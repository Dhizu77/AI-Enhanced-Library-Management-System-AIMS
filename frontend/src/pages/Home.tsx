import React, { useEffect, useState } from 'react'
import { Book } from '../types/types'
import api from '../services/api'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    // TODO: Add error handling and loading states
    api.get('/books').then(res => setBooks(res.data)).catch(() => {
      // NOTE: backend CORS/.env may be incomplete — you'll need to fix that to get data
    })
  }, [])

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Books</h2>
      <ul>
        {books.map(b => (
          <li key={b.id} className="p-2 bg-white rounded mb-2 shadow-sm">
            <div className="font-semibold">{b.title}</div>
            <div className="text-sm text-gray-600">{b.author}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
