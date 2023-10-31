module.exports = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.spec.jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: ["/node_modules/", "\\.css$"],
};
