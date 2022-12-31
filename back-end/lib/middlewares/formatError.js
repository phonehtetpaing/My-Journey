import logger from '../utils/logger.js';
import errorCodes from '../../resources/errorCodes.js';

// Don't return specific errors to client
export const formatError = (err) => {
  try {
    // error code from graphql
    const serverCode = err?.extensions?.code;

    // error returning to client
    const clientError = errorCodes[serverCode] || errorCodes.GENERIC_ERROR || {};

    // error path
    const path = JSON.stringify(err?.path || []);

    // error message
    const message = err?.message;

    logger.error(`GraphQL Error :: ${serverCode} ${clientError.code} - ${path} - ${message}`);
    return clientError;
  } catch (e) {
    logger.error(e);
    return { message: 'UNEXPECTED_ERROR' };
  }
};
