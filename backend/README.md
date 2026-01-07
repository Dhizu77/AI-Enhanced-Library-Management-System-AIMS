AIMS Backend (Skeleton)

This is a minimal Express + TypeScript backend intended as a learning scaffold. The project includes:

- controllers/
- routes/
- services/ (mocked functions, TODOs for DB & AI wiring)
- types/ (share the interfaces you need)

Important: The CORS setup and .env are intentionally left incomplete. Populate `.env` and uncomment/use `src/middlewares/corsConfig.ts` in `src/server.ts` to get the frontend talking to the backend.

Where to implement logic:
- `src/services/bookService.ts` — replace mock arrays with DB queries
- `src/services/aiService.ts` — call out to your Python AI server
