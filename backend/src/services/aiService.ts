import axios from 'axios';

interface AskPayload {
  question: string;
}

export async function askAI(payload: AskPayload): Promise<string> {
  // TODO: Implement real AI model call.
  // Mock behavior: return a canned response for now.
  // Hint: Replace the placeholder URL with your Python/AI service URL.

  // Placeholder axios call (intentionally incomplete):
  // return axios.post('http://<PYTHON_AI_SERVICE>/predict', payload).then(r => r.data.answer);

  return Promise.resolve('This is a mock AI response. Implement the real model call in src/services/aiService.ts');
}
