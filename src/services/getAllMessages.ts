import { Messages } from "@/models/messages";
import { useEffect, useState } from "react";
import { api } from "./api";

type WhoAmIProps = {
  token: string | undefined;
};


export const GetAllMessages = async (props: WhoAmIProps) => {

  const { data } = await api.get<Messages[]>("/chat", {
    headers: {
      Authorization: `Bearer ${props.token}`,
      // "Content-Type": "application/json",
    },
  });
  return data;
};

export default function useFetchMessages(props: WhoAmIProps) {
  const [data, setData] = useState<Messages[]>([]);
  console.log(props);
  useEffect(() => {
    GetAllMessages({ token: props.token } ).then((message) => {
      setData(message);
    });
  }, []);
  return data;
}
