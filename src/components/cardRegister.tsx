"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/form";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/card";
import { registerSchema } from "@/validators/auth";
import axios from "axios";
import { useRouter } from "next/navigation";

type Input = z.infer<typeof registerSchema>;

const CardRegister = () => {
  const router = useRouter();
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: Input) {
    try {
      const response = await axios.post(
        "http://localhost:3003/auth/register",
        data
      );
      router.push("/chat");
      console.log("Registro bem-sucedido", response.data);

      form.reset();
    } catch (err) {
      console.error("Falha no registro", err);
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

export default CardRegister;
