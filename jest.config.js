module.exports = {
    collectCoverageFrom: ['packages/**/*.ts'],
    coverageDirectory: '<rootDir>/coverage/',
    coveragePathIgnorePatterns: ['node_modules'],
    coverageThreshold: {
        global: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50,
        },
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    roots: [
        "<rootDir>/packages"
    ],
    testPathIgnorePatterns: ['node_modules'],
    testMatch: ['**/*.test.ts?(x)'],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    silent: false,
}