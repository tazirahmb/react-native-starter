module.export = {
  preset: 'react-native',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
    '^@elements(.*)$': '<rootDir>/src/components/elements$1',
    '^@forms(.*)$': '<rootDir>/src/components/forms$1',
    '^@fragments(.*)$': '<rootDir>/src/components/fragments$1',
    '^@layouts(.*)$': '<rootDir>/src/components/layouts$1',
  },
};
