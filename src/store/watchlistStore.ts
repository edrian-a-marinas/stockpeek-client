import { create } from "zustand";
import { MAX_WATCHLIST_ITEMS } from "@/constants";
import type { WatchlistState } from "@/types/watchlist";

export const useWatchlistStore = create<WatchlistState>((set) => ({
  items: [],
  addItem: (stockSymbol) =>
    set((state) => {
      if (state.items.length >= MAX_WATCHLIST_ITEMS) return state;
      if (state.items.some((item) => item.stockSymbol === stockSymbol))
        return state;
      return {
        items: [
          ...state.items,
          { stockSymbol, dateAdded: new Date().toISOString() },
        ],
      };
    }),
  removeItem: (stockSymbol) =>
    set((state) => ({
      items: state.items.filter((item) => item.stockSymbol !== stockSymbol),
    })),
  setNote: (stockSymbol, note) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.stockSymbol === stockSymbol ? { ...item, note } : item,
      ),
    })),
}));
