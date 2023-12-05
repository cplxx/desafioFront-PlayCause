import { User } from "@/models/user";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

export const GetUser = async (id: number) => {
  const data = await api.get<User>(`/user/${id}`);
  return data;
};

export default function useFetchUser() {
  return useQuery<User>({
    queryKey: ["user"],
  });
}
