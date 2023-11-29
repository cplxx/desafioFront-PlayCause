
import RoomChat from "@/components/ui/roomChat";
import Sidebar from "@/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <RoomChat />
    </main>
  );
}
