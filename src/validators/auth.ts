import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "e-mail invalido" }),
  name: z.string().min(3, { message: "Seu nome é muito curto" }).max(255),
  password: z.string().min(8, { message: "senha fraca" }).max(100),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "e-mail invalido" }),
  password: z.string().min(5, { message: "senha fraca" }).max(100),
});
