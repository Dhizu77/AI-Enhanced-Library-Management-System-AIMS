import cors from 'cors';

// WARNING: This CORS config is intentionally incomplete. You must edit it and/or enable it in `server.ts`.

export const corsOptions: cors.CorsOptions = {
  // TODO: set a safe origin or a function that validates origin
  // origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  origin: 'TODO_SET_ORIGIN',
  optionsSuccessStatus: 200
};

export default cors(corsOptions);
