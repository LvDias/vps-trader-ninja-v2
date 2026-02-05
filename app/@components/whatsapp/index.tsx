import { Phone } from "lucide-react"
import Link from "next/link"

export function WhatsappButton() {
    return (
        <Link
            className="fixed right-4 bottom-4 z-10 flex size-16 items-center justify-center rounded-full border border-white border-solid bg-green-500 text-white"
            href={process.env.LINK_WHATSAPP!}
        >
            <Phone className="size-8" />
        </Link>
    )
}
