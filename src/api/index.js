import { get } from './axiosHelper'

export const loadBooks = () => get('/books')
export const searchBooks = (searchTxt, option) => get(`/searchBooks?value=${searchTxt}&option=${option}`)
export const filterBooks = (categories, price) => get(`/filterBooks?categories=${categories}&price=${price}`)

