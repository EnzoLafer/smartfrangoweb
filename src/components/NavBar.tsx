import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "calendario" | "rotinas" | "exercicios" | "medidas"
}

export default function NavBar(props: NavBarProps){
    const { active } = props
    const classActive = "border-b-4 border-white-500 pb-2"

    return (
        <nav className="flex justify-between items-center bg-orange-500 w-full px-5 py-3">
            <h1 className="text-3xl font-bold">Smart Frango</h1>
            <ul className="flex gap-12">
                <li className={active == "dashboard" ? classActive : ""}>
                    <Link href="/">Dashboard</Link>
                </li>
                <li className={active == "calendario" ? classActive : ""}>
                    <Link href="/calendario">Calendário</Link>
                </li>
                <li className={active == "rotinas" ? classActive : ""}>
                    <Link href="/rotinas">Rotinas</Link>
                </li>
                <li className={active == "exercicios" ? classActive : ""}>
                    <Link href="/exercicios">Exercícios</Link>
                </li>
                <li className={active == "medidas" ? classActive : ""}>
                    <Link href="/medidas">Medidas</Link>
                </li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="logo.png" alt="Logo"/>
            </div>
        </nav>
    )
}
