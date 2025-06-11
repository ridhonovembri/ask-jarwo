import axios from "axios"

export default axios.create({
  baseURL: 'http://localhost:3000/',
  // baseURL: 'https://ask-jarwo-be.vercel.app/',
  headers: {
    'Content-type': 'application/json'
  }
});