import { create } from "zustand";

type ToastStore = {
  message: string | null;
  showToast: (message: string) => void;
  hideToast: () => void;
};

const useToastStore = create<ToastStore>((set) => ({
  message: null,

  showToast: (message) => set({ message }),

  hideToast: () => set({ message: null }),
}));

export default useToastStore;
