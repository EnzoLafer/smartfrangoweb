import DropDownActions from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
    

interface RotinaItemProps {
    rotina : {
        id: number,
        nome: string,
        icone: string
    }
}

export function RotinaItem({ rotina }: RotinaItemProps) {
   
    return (
        <div className="flex justify-between p-2">
            <div className="flex items-center gap-2">
                <Icon name={rotina.icone} />
                <span>{rotina.nome}</span>
            </div>
            <DropDownActions />
        </div>
    )
}