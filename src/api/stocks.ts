import api from '@/lib/axios'

export const getStockPriceRequest = (stockSymbol: string) =>
  api.get(`/stocks/${stockSymbol}/price/`)