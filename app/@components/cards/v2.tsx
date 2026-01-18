import type { LucideIcon } from "lucide-react"

export interface CardV2Props {
    title: string
    desc: string
    icon: LucideIcon
}

export function CardV2({ title, desc, icon: Icon }: CardV2Props) {
    return (
        <div className="flex flex-col gap-4 rounded border border-slate-800 border-solid bg-slate-800/20 p-4">
            <div className="flex flex-row-reverse items-start justify-between gap-4 md:flex-col">
                <Icon className="size-4 text-cyan-400 md:size-8" />
                <h4 className="font-bold text-white text-xl">{title}</h4>
            </div>
            <p className="text-sm text-white/80">{desc}</p>
        </div>
    )
}
