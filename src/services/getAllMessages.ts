import { Messages } from "@/models/messages";
import { api } from "./api";
import { useEffect, useState } from "react";

export const GetAllMessages = async () => {
  const { data } = await api.get<Messages[]>("/chat");
  return data;
};

export default function useFetchMessages() {
  const [data, setData] = useState<Messages[]>([]);

  useEffect(() => {
    GetAllMessages().then((message) => {
      setData(message);
    });
  }, []);
  return data;
}
