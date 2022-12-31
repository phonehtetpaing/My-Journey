export default {
  port: '3001',
  baseUrl: '/api/graphql',
  server: {
    timeout: 3000,
    bodyCharLimit: 5000,
  },
  logger: {
    logLevel: 'info',
    levels: {
      error: 0,
      warn: 1,
      info: 2,
      debug: 3,
      perf: 4,
      trace: 5,
    },
    colors: {
      error: 'red',
      warn: 'yellow',
      info: 'blue',
      debug: 'green',
      perf: 'cyan',
      trace: 'green',
    },
  },
  db: {
    connectionString: 'mongodb+srv://my-journey:iqE5OkrRpEjwTooE@cluster0.awpwvfd.mongodb.net/?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // server: { auto_reconnect: true },
    },
  },
  gql: {
    persistedQueriesTtl: 86400,
    queryDepthLimit: 5,
  },
  password: {
    saltLength: 8,
  },
};
