import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import mongoose from 'mongoose';
import config from './config/config.js';
import logger from './lib/utils/logger.js';
import typeDefs from './lib/typeDefs/typeDefs.js';
import resolvers from './lib/resolvers/resolvers.js';
import { formatResponse } from './lib/middlewares/formatResponse.js';
import { formatError } from './lib/middlewares/formatError.js';

logger.info(`Server starting... NODE_ENV:${process.env.NODE_ENV}`);

const {
  port, baseUrl, server: { timeout }, gql: { persistedQueriesTtl, queryDepthLimit },
} = config;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cors());
app.options('*', cors());

let server;
(async () => {
  // Connect to Mongoose
  await mongoose.connect(config.db.connectionString, config.db.options);
  logger.info('Connected to MongoDB.');

  // Start Apollo Server
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: false,
    csrfPrevention: true,
    cache: 'bounded',
    persistedQueries: { ttl: persistedQueriesTtl }, // cache time-to-live
    validationRules: [depthLimit(queryDepthLimit)],
    formatResponse, // response formatting
    formatError, // error handling
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: baseUrl });
  logger.info('Apollo Server started.');

  // Start Server
  server = await app.listen(port);
  server.setTimeout(timeout);
  logger.info(`Server started. Listening on port ${port}`);
})();

// eslint-disable-next-line consistent-return
app.all('*', (req, res, next) => {
  if (req.url === baseUrl && req.method === 'POST' && req.body) return next();
  logger.debug(`Invalid API Request :: url ${req.originalUrl} :: body ${JSON.stringify(req.body)}`);
  res.status(200).json({ message: 'ok' });
});

// 500 Error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err) {
    logger.error(`Error 500 Internal Server Error: ${err}`, { stack: err.stack });
    res.status(500)
      .json('An error has occurred');
  }
});

// Unexpected Error Handler
const unexpectedErrorHandler = (error) => {
  logger.error(error);
  process.exit(1);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
process.on('SIGTERM', () => logger.info('SIGTERM received'));

export default app;
