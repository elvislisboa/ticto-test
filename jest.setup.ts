import "@testing-library/jest-dom";

const originalWarn = console.warn;

console.warn = (...args: any[]) => {
  if (
    typeof args[0] === "string" &&
    (args[0].includes("using an outdated JSX transform") ||
      args[0].includes("DeprecationWarning: The `punycode` module is deprecated"))
  ) {
    return;
  }
  originalWarn(...args);
};
