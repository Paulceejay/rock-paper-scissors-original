import { create } from "zustand";

export const useGameStore = create((set) => ({
  scores: 0,
  isPlayingGame: false,
  modal: false,
  increaseScore: () => set((state: any) => ({ scores: state.scores + 1 })),
  decreaseScore: () => set((state: any) => ({ scores: state.scores - 1 })),
  setIsPlayingGame: () => set({ isPlayingGame: true }),
  setModalTrue: () => set({ modal: true }),
  setModalFalse: () => set({ modal: false }),
}));