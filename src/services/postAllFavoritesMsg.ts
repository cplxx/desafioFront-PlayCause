import { api } from "./api";
import { useMutation } from "@tanstack/react-query";
import { UserMessage } from "@/models/userMessages";

export const PostAllFavoriteMsg = async (messageId: number) => {
  const { data } = await api.post<UserMessage[]>(`/user-message`, {
    messageId: messageId,
  });
  return data;
};

export default function usePostFavoriteMsg() {
  return useMutation({
    mutationFn: PostAllFavoriteMsg,
  });
}
