import React from 'react'
import { Book } from '../types/types'

export default function BookList({ books }: { books: Book[] }) {
  return (
    <ul>
      {books.map(b => (
        <li key={b.id}>{b.title} — {b.author}</li>
      ))}
    </ul>
  )
}
