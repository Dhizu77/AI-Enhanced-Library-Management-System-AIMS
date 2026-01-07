import axios from 'axios'

// WARNING: baseURL is intentionally incomplete — set REACT_APP_API_URL or similar in your env and update this file.
const api = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:4000/api'
})

export default api
