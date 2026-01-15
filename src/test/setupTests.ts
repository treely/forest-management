import '@testing-library/jest-dom';

// Polyfill structuredClone for jsdom (required by Chakra UI v3)
if (typeof globalThis.structuredClone === 'undefined') {
  globalThis.structuredClone = (obj: any) => JSON.parse(JSON.stringify(obj));
}
