import _ from 'lodash';
import defaultConfig from './default.js';

const { default: envConfig } = await import(`./${process.env.NODE_ENV}.js`);

export default _.merge({}, defaultConfig, envConfig);
