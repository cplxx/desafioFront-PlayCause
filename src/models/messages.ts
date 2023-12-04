import { User } from "./user";

export interface Messages {
  id: number;
  content: string;
  user_id: number;
  createdAt: Date;
  user: Omit<User, "password">;
  type: string
}
