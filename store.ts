import { create } from "zustand";

export const useScoreStore = create((set) => ({
  scores: 0,
  increaseScore: () => set((state: any) => ({ scores: state.scores + 1 })),
  decreaseScore: () => set((state: any) => ({ scores: state.scores - 1 })),
}));

