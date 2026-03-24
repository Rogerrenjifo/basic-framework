export const env = {
  uiBaseUrl: process.env.UI_BASE_URL ?? 'http://localhost:3000',
  apiBaseUrl: process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
  defaultTimeoutMs: Number(process.env.DEFAULT_TIMEOUT_MS ?? 30000),
};
