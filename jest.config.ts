import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverageFrom: ['test/**/*.{ts}'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  moduleNameMapper: {},
  // setupFilesAfterEnv: ['./configs/jest/test-setup.js'],
  testPathIgnorePatterns: ['./node_modules/'],
  coveragePathIgnorePatterns: ['tests/.+'],
  testRegex: 'tests/.*\\.test\\.ts$',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};

export default config;
