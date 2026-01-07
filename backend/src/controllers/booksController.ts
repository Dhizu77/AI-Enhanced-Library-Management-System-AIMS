import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export async function listBooks(req: Request, res: Response) {
  // TODO: replace mock with DB query
  const books = await bookService.getAllBooks();
  res.json(books);
}

export async function getBook(req: Request, res: Response) {
  const { id } = req.params;
  // TODO: validate id
  const book = await bookService.getBookById(id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
}

export async function createBook(req: Request, res: Response) {
  const payload = req.body;
  // TODO: implement validation and DB insert
  const created = await bookService.createBook(payload);
  res.status(201).json(created);
}
