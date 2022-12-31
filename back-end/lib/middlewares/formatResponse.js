import config from '../../config/config.js';
import logger from '../utils/logger.js';

export const formatResponse = (response, requestContext) => {
  Object.keys(response?.data || {}).forEach((key) => {
    const jwtToken = response?.data?.[key]?.jwtToken;
    if (jwtToken) {
      requestContext.response.http.headers.set(config.jwt.name, jwtToken);
      response.data[key].jwtToken = null;
    }
  });

  logger.info(`API Response :: ${JSON.stringify(response.data)}`);
  return response;
};
