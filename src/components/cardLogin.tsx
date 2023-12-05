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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";
import axios from "axios";
import { useRouter } from "next/navigation";

type Input = z.infer<typeof loginSchema>;

const CardLogin = () => {
  const router = useRouter();

  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Input) {
    try {
      const response = await axios.post(
        "https://chat-api-n6ks.onrender.com/auth/login",
        data
      );
      localStorage.setItem("token", response.data.token);
      console.log("usuario logado", response.data);
      router.push("/chat");
      form.reset();
    } catch (err) {
      console.error("Falha no login", err);
    }
  }

  return (
    <div className="flex justify-center">
      <Card className="flex flex-col items-center justify-center w-96 ">
        <CardHeader>
          <p>Faça login para continuar</p>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardContent className="flex flex-col gap-2">
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
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                size="lg"
                className="w-56 "
                type="submit"
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default CardLogin;
