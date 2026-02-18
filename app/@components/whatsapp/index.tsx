import Image from "next/image"
import Link from "next/link"

export function WhatsappButton() {
    return (
        <Link
            className="fixed right-4 bottom-4 z-10 flex size-16 items-center justify-center rounded-full bg-white"
            href={process.env.NEXT_PUBLIC_LINK_WHATSAPP!}
        >
            <picture className="relative size-8">
                <Image fill src="/whatsapp.svg" alt="Whatsapp" />
            </picture>
        </Link>
    )
}
