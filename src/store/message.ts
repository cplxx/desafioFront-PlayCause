// messageStore.ts
import create from "zustand";

interface MessageStore {
  messages: string[];
  addMessage: (message: string) => void;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));

export default useMessageStore;
