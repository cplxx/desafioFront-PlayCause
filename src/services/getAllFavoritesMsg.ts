import { api } from "./api";
import { useQuery } from "@tanstack/react-query";
import { UserMessage } from "@/models/userMessages";

export const GetAllFavoriteMsg = async () => {
  const { data } = await api.get<UserMessage[]>("/user-message");
  return data;
};

export default function useFetchFavoriteMsg() {
  return useQuery({
    queryKey: ["message"],
    queryFn: GetAllFavoriteMsg,
  });
}
