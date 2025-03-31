// src/services/api.ts
import axios from 'axios'
import { Coffee } from '../types/Coffee'

const HOT_ENDPOINT = 'https://api.sampleapis.com/coffee/hot'
const ICED_ENDPOINT = 'https://api.sampleapis.com/coffee/iced'

/**
 * Busca a lista de cafés quentes
 */
export async function getHotCoffees(): Promise<Coffee[]> {
  const response = await axios.get(HOT_ENDPOINT)
  // Adicionamos a propriedade "type"
  return response.data.map((item: Coffee) => ({
    ...item,
    type: 'hot'
  }))
}

/**
 * Busca a lista de cafés gelados
 */
export async function getIcedCoffees(): Promise<Coffee[]> {
  const response = await axios.get(ICED_ENDPOINT)
  return response.data.map((item: Coffee) => ({
    ...item,
    type: 'iced'
  }))
}

/**
 * Busca todas as opções (hot + iced) juntas
 */
export async function getAllCoffees(): Promise<Coffee[]> {
  const [hot, iced] = await Promise.all([getHotCoffees(), getIcedCoffees()])
  return [...hot, ...iced]
}
