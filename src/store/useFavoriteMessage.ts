import { create } from "zustand";

export type FavoriteMessageStore = {
  favoriteMessageIds: string[];
};

export const useFavoriteStore = create<FavoriteMessageStore>((set, get) => ({
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
