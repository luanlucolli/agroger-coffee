// src/types/Coffee.ts

export interface Coffee {
    id: number
    title: string
    description?: string
    ingredients?: string[]
    image?: string
    price?: number
    totalSales?: number
  
    // Propriedade extra para sabermos se é hot ou iced
    type: 'hot' | 'iced'
  }
  