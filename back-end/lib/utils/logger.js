import winston from 'winston';

import config from '../../config/config.js';

const { logLevel, levels, colors } = config.logger;

winston.addColors(colors);

export default winston.createLogger({
  level: logLevel,
  levels,
  format: winston.format.combine(
    winston.format.colorize(),
    // Dependent of server time
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.align(),
    winston.format.printf((info) => {
      const { timestamp, level, message } = info;
      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} - ${level} - process ${process.pid} - ${message || ''}`;
    }),
  ),
  transports: process.env.NODE_ENV === 'production' ? [] : [new winston.transports.Console()],
});
