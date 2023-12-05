"use client";

import RoomChat from "@/components/roomChat";
import Sidebar from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="flex">
      <QueryClientProvider client={queryClient}>
        <Sidebar />
        <RoomChat />
      </QueryClientProvider>
    </main>
  );
}
