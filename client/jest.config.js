module.exports = {  
  transformIgnorePatterns: ['node_modules/(?!(sucrase)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
  // ...the rest of your config
}