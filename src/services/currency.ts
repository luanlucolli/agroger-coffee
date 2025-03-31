// src/services/currency.ts
export async function getDollarRate(): Promise<number> {
    const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    const data = await res.json()
    return Number(data.USDBRL.bid) || 5.0 // fallback se falhar
  }
  