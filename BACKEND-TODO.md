Back-end TODOs (short checklist)

- [ ] Add DB connection (Mongo/Postgres/your choice) and replace `bookService` mocks
- [ ] Implement proper validation and error handling
- [ ] Wire up `aiService.askAI` to your Python/AI endpoint (set AI_PYTHON_ENDPOINT value in .env)
- [ ] Fix CORS config: update `src/middlewares/corsConfig.ts` and enable it in `src/server.ts`
- [ ] Add unit/integration tests
