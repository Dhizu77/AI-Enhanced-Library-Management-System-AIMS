import { Request, Response } from 'express';
import * as aiService from '../services/aiService';

export async function askModel(req: Request, res: Response) {
  const { question } = req.body;
  // TODO: validate user input and handle errors gracefully
  try {
    const answer = await aiService.askAI({ question });
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: 'AI service error' });
  }
}
