module.exports = {
    setupFiles: ['./tests/setup.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    moduleNameMapper: {
        'src(.*)$': '<rootDir>/src/$1',
    },
    moduleDirectories: ['node_modules', 'tests'],
    transform: {
        '^.+\\.(tsx?)$': 'babel-jest',
    },
    testRegex: 'test\\.(ts|tsx)$',
    coveragePathIgnorePatterns: ['/node_modules/', '/tests/setup.js'],
    testURL: 'http://localhost/',
};
