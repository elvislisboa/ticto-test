import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^swiper/css$": "<rootDir>/src/__mocks__/styleMock.ts",
    "^swiper/css/pagination$": "<rootDir>/src/__mocks__/styleMock.ts",
    "^swiper/modules$": "<rootDir>/src/__mocks__/swiperMock.tsx",
    "^swiper/react$": "<rootDir>/src/__mocks__/swiperMock.tsx",
    "\\.(css|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.ts",
  },
};

export default createJestConfig(customJestConfig);
