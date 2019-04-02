
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  collectCoverageFrom: ["./src/**/*.js", "!src/index.js"],
  coverageThreshold: {
    global: {
      statements: 8,
      branches: 0,
      functions: 6,
      lines: 6
    }
  },
  setupFilesAfterEnv: ["./enzymeconfig.js"],
};
