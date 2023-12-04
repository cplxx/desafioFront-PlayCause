import { Messages } from "@/models/messages";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

export const GetAllMessages = async () => {
  const { data } = await api.get<Messages[]>("/chat");
  return data;
};

export default function useFetchMessages() {
  return useQuery({
    queryKey: ["message"],
    queryFn: GetAllMessages,
  });
}
