import type { LucideIcon } from "lucide-react"

export interface CardV1Props {
    title: string
    desc: string
    icon: LucideIcon
}

export function CardV1({ title, desc, icon: Icon }: CardV1Props) {
    return (
        <div className="flex flex-col gap-4 rounded bg-zinc-950 p-8">
            <div className="flex size-12 items-center justify-center rounded bg-red-500/20 text-red-500">
                <Icon className="size-8" />
            </div>

            <h4 className="font-bold text-white text-xl">{title}</h4>
            <p className="text-sm text-white/80">{desc}</p>
        </div>
    )
}
