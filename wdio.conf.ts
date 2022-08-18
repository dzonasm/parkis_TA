import { config } from './config/configuration';

const yargs = require('yargs').argv;
const capability = { ...config.capabilities[0] };

if (yargs.env === 'local') {
  config.baseUrl = 'http://localhost';
}

if (yargs.env === 'dev') {
  config.baseUrl = '';

}

exports.config = { ...config, capabilities: [capability] };
