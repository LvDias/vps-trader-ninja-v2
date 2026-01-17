import { Check } from "lucide-react"

export interface CardCheckV2Props {
    title: string
}

export function CardCheckV2({ title }: CardCheckV2Props) {
    return (
        <div className="flex items-center gap-2">
            <Check className="size-4 text-green-500" />
            <span className="text-white">{title}</span>
        </div>
    )
}
