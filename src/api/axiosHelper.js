import axios from 'axios'
import { config } from '@appConfig'

const baseURL = config.API

const api = (fn, args) => {
  return fn
  .apply(axios, args)
  .then(res => res.data)
  .catch(error => {
    console.error('error with request to API => ', error)
    return Promise.reject(error.message || 'error with request to API')
  })
}

const _get = (...rest) => api(axios.get, rest)
const _post = (...rest) => api(axios.post, rest)
const _put = (...rest) => api(axios.put, rest)
const _patch = (...rest) => api(axios.patch, rest)
const _delete = (...rest) => api(axios.delete, rest)

const setCustomHeader = (headers) => {
  if (localStorage.getItem('token')) {
    return { authorization: `Bearer ${localStorage.getItem('token')}`, ...headers }
  }

  return headers
}

const httpOptions = (headers, responseType = 'json') => ({
  baseURL,
  responseType,
  headers: setCustomHeader(headers),
})

export const get = (url, params = {}, headers = {}, responseType = 'json') =>
  _get(url, { ...httpOptions(headers, responseType), params })

export const post = (url, body = '', headers = {}, responseType = 'json') =>
  _post(url, body, { ...httpOptions(headers, responseType) })

export const put = (url, body = '', headers = {}, responseType = 'json') =>
  _put(url, body, { ...httpOptions(headers, responseType) })

export const patch = (url, body = '', headers = {}, responseType = 'json') =>
  _patch(url, body, { ...httpOptions(headers, responseType) })

export const httpDelete = (url, data = '', headers = {}, responseType = 'json') =>
  _delete(url, { data, ...httpOptions(headers, responseType) })
