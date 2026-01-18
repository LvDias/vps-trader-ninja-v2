import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-10 border-b border-b-white/20 border-solid bg-zinc-950">
            <div className="m-auto flex max-w-7xl items-center justify-between gap-4 p-4">
                <span className="font-extrabold text-white text-xl">
                    VPS Trader Ninja
                </span>

                <Button size="lg" asChild>
                    <Link href={process.env.LINK_CHECKOUT!}>Assinar Agora</Link>
                </Button>
            </div>
        </header>
    )
}
