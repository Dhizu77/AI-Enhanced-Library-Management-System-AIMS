import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
// NOTE: The CORS setup is intentionally incomplete for you to fix.
// See `src/middlewares/corsConfig.ts` and `.env` for hints.

const app = express();

app.use(express.json());
// TODO: wire a proper CORS configuration
// app.use(cors()); // intentionally commented for you to enable/configure

app.use('/api', routes);
app.use(errorHandler);

const PORT = process.env.APP_PORT || 4000;
app.listen(PORT, () => {
  console.log(`AIMS backend listening on port ${PORT}`);
});
