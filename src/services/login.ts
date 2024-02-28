import { AxiosResponse } from "axios";
import { api } from "./api";

type LoginProps = {
  email: string;
  password: string;
};

interface AuthDto {
  token: string;
}

export function login(props: LoginProps): Promise<AxiosResponse<AuthDto>> {
  return api.post<AuthDto>("/auth", props);
}
