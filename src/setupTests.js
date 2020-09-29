import '@testing-library/jest-dom/extend-expect';

Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
