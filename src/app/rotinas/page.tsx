import NavBar from "@/components/NavBar"
import { RotinaItem } from "./RotinaItem";
import { Button } from "@nextui-org/button";

export default function Rotinas() {

  const rotinas = [
    {
      id: 1,
      nome: "Peito",
      icone: "dumbbell"
    },
    {
      id: 2,
      nome: "Costas",
      icone: "dumbbell"
    },
    {
      id: 3,
      nome: "Perna",
      icone: "dumbbell"
    },
  ]


  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="rotinas" />
     
      <section className="flex flex-col gap-2 bg-orange-500 mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Rotinas Cadastradas</h2>
          <Button>Nova Rotina</Button>
        </div>

        {rotinas.map(rotina => <RotinaItem rotina={rotina} /> )}

      </section>

    </main>
  );
}
