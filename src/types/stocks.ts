
// --------- Used in useStockPrice ---------
export interface StockPriceData {
  stock_symbol: string
  price: string
  last_updated: string
}

export interface StockPriceApiResponse {
  status: string
  data: StockPriceData
  message: string
}