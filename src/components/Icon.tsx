import { Dumbbell } from 'lucide-react';

interface IconProps {
    name: string
}

const icons = [
    { name: "dumbbell",        icon: <Dumbbell />},
]

export function Icon({ name }: IconProps){
    return icons.find( icon => icon.name == name )?.icon
}