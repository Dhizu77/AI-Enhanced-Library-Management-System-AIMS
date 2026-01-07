import { Book } from '../types/types';

// Mock data — replace with DB calls
const MOCK_BOOKS: Book[] = [
  { id: '1', title: '1984', author: 'George Orwell', available: true },
  { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien', available: true }
];

export async function getAllBooks(): Promise<Book[]> {
  // TODO: replace with DB query
  return MOCK_BOOKS;
}

export async function getBookById(id: string): Promise<Book | null> {
  // TODO: replace with DB query
  return MOCK_BOOKS.find(b => b.id === id) || null;
}

export async function createBook(payload: Partial<Book>): Promise<Book> {
  // TODO: implement DB insert
  const newBook: Book = {
    id: String(Date.now()),
    title: payload.title || 'Untitled',
    author: payload.author || 'Unknown',
    available: payload.available ?? true
  };
  MOCK_BOOKS.push(newBook);
  return newBook;
}
