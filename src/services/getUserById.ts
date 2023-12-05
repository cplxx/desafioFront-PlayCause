import { User } from "@/models/user";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const GetUser = async (id: number) => {
  const response = await api.get(`/auth/user/${id}`);

  console.log(response);

  return response.data;
};

export default function useFetchUser(id: number) {
  return useQuery<User, AxiosError>({
    queryKey: ["user", GetUser],
    queryFn: () => GetUser(id),
  });
}
