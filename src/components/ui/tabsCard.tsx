import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardLogin from "./cardLogin";
import CardRegister from "./cardRegister";

const TabsCard = () => {
  return (
    <div className="w-full flex items-center justify-center mt-28">
      <Tabs className="flex flex-col" defaultValue="Entrar">
        <TabsList className="bg-gray-900/5 border">
          <TabsTrigger value="Entrar">Entrar</TabsTrigger>
          <TabsTrigger value="Registrar">Registrar</TabsTrigger>
        </TabsList>
        <TabsContent value="Entrar">
          <CardLogin />
        </TabsContent>
        <TabsContent value="Registrar">
          <CardRegister />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsCard;
