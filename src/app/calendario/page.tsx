import NavBar from "@/components/NavBar"

export default function Movimentacoes() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="calendario" />
      <h2>Calendário</h2>
    </main>
  );
}
