import { create } from "zustand";

type MessageStore = {
  id: number;
  userId: number;
  content: string;
};

export type FavoriteMessageStore = {
  favoriteMessageIds: string[];
};

export const useFavoriteStore = create<FavoriteMessageStore>(() => ({
  favoriteMessageIds: [],
}));

export const toggleFavoriteMessage = (messageId: string) => {
  const favoriteMessages = useFavoriteStore.getState().favoriteMessageIds;

  const addFavoriteMessage = () => {
    const newFavoriteMessages = [...favoriteMessages, messageId];

    useFavoriteStore.setState({
      favoriteMessageIds: newFavoriteMessages,
    });
  };
  const removeFavoriteMessage = () => {
    const newFavoriteMessages = favoriteMessages.filter(
      (id) => id !== messageId
    );

    useFavoriteStore.setState({
      favoriteMessageIds: newFavoriteMessages,
    });
  };

  favoriteMessages.includes(messageId)
    ? removeFavoriteMessage()
    : addFavoriteMessage();
};
