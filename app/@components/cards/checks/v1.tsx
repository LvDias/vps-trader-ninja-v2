import { Check } from "lucide-react"

export interface CardCheckV1Props {
    title: string
    desc: string
}

export function CardCheckV1({ title, desc }: CardCheckV1Props) {
    return (
        <div className="flex gap-4">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                <Check className="size-3 text-zinc-950" />
            </div>

            <div className="flex flex-col">
                <p className="font-bold text-white">{title}</p>
                <p className="text-sm text-white/80 md:text-base">{desc}</p>
            </div>
        </div>
    )
}
