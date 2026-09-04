import { useQuery } from '@tanstack/react-query'
import { getStockPriceRequest } from '@/api/stocks'
import type { StockPriceApiResponse } from '@/types/stocks'

export function useStockPrice(stockSymbol: string) {
  return useQuery({
    queryKey: ['stock-price', stockSymbol],
    queryFn: async () => {
      const response = await getStockPriceRequest(stockSymbol)
      return (response.data as StockPriceApiResponse).data
    },
    enabled: !!stockSymbol,
  })
}