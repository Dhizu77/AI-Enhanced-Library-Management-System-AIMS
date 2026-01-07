// Simple config loader — fill .env variables manually
export const APP_PORT = process.env.APP_PORT || 4000;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '';
export const AI_PYTHON_ENDPOINT = process.env.AI_PYTHON_ENDPOINT || '';

// Note: .env.example is intentionally incomplete — copy and populate a real .env
