import { User } from "@/models/user";
import { AxiosResponse } from "axios";
import { api } from "./api";

type WhoAmIProps = {
  token: string | undefined;
};

export async function whoAmI(props: WhoAmIProps): Promise<AxiosResponse<User>> {
  return api.get<User>("/auth/who-am-i", {
    headers: {
      Authorization: "Bearer " + props.token,
      "Content-Type": "application/json",
    },
  });
}
