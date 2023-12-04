import { Message } from "postcss";
import { User } from "./user";

export interface UserMessage {
  id: number;
  user: User;
  userId: number;
  message: string;
  messageId: number;
}
