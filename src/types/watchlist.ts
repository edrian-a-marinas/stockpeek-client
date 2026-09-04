export interface WatchlistItem {
  stockSymbol: string;
  dateAdded: string;
  note?: string;
}

export interface WatchlistState {
  items: WatchlistItem[];
  addItem: (stockSymbol: string) => void;
  removeItem: (stockSymbol: string) => void;
  setNote: (stockSymbol: string, note: string) => void;
}
