"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/store/auth";

type Input = z.infer<typeof loginSchema>;

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const router = useRouter();

  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Input) {
    handleLogin(data);
  }

  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center flex-col w-full h-screen bg-white justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-2xl font-bold text-[#282F3D]">Entrar na conta</h1>
          <p className="text-base font-normal text-[#798AA3]">
            Faça login na sua conta para continuar.
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 w-full px-44"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="senha" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="outline" className="w-full \" type="submit">
              Entrar
            </Button>
          </form>
        </Form>
      </div>
      <Image
        src={"/login.jpeg"}
        alt="login"
        width={500}
        height={500}
        className="fill-current w-full h-screen object-cover"
      />
    </div>
  );
};

export default Login;
