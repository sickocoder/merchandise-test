const config = require('./jest.config');

config.testMatch = ['**/?(*.)!(*server*).(test|spec).ts?(x)'];
module.exports = config;
