// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
process.env.TZ = 'AO';

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '@test-suite': '<rootDir>/test-suite/index.tsx',
    '@builders/(.*)$': '<rootDir>/builders/$1',
    '@components/(.*)$': '<rootDir>/components/$1',
    '@services/(.*)$': '<rootDir>/services/$1',
    '@constants': '<rootDir>/constants/index.ts',
    '@utils/(.*)$': '<rootDir>/utils/$1',
  },
};