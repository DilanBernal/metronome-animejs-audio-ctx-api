import { create } from "zustand";

export type bpmStoreType = {
  bpm: number;
  started: boolean;
  start: () => void;
  stop: () => void;
  setBpm: (bpm: number) => void;
}

export const useBpmStore = create<bpmStoreType>((set) => ({
  bpm: 0,
  started: false,


  start: () => set({ started: true }),
  stop: () => set({ started: false }),
  setBpm: (bpm: number) => set({ bpm }),
}));