import { create } from "zustand";

const useLoginStore = create((set) => ({
  user: '',
  login: (state) => set({ user: { state } }),
  logout: () => set({ user: "" }),
}));

export default useLoginStore;
