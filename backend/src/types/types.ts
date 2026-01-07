export interface Book {
  id: string;
  title: string;
  author: string;
  available: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'librarian' | 'member';
}

export interface ChatMessage {
  id: string;
  userId: string;
  message: string;
  createdAt: string; // ISO
}
