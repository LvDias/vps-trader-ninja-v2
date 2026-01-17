import {
    ArrowUpDown,
    Clock12,
    Cpu,
    Database,
    MoveDownRight,
    Shield,
    ShieldUser,
    Timer,
    WifiOff,
    Zap,
} from "lucide-react"
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CardCheckV1 } from "./@components/cards/checks/v1"
import { CardCheckV2 } from "./@components/cards/checks/v2"
import { CardV1 } from "./@components/cards/v1"
import { CardV2 } from "./@components/cards/v2"
import { Chart } from "./@components/chart"

export default function Home() {
    return (
        <main className="flex flex-col">
            <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 p-8">
                <Chart />

                <div className="flex items-center gap-2 rounded-full border border-cyan-500 border-solid bg-cyan-500/20 p-2">
                    <span className="size-2 rounded-full bg-cyan-500" />
                    <span className="font-bold text-cyan-500 text-xs uppercase">
                        Servidores em Chicago (CME)
                    </span>
                </div>

                <h1 className="text-center font-extrabold text-7xl text-white">
                    Opere Futuros na <br />
                    <span className="bg-gradient-to-r from-red-500 to-orange-700 bg-clip-text text-transparent">
                        Velocidade da Luz
                    </span>
                </h1>

                <div className="text-center text-white/80">
                    <p>
                        Hospedagem VPS de alta performance localizada ao Lado da
                        CME.
                    </p>
                    <p>
                        Latência ultrabaixa de 1-2ms para execução de ordens
                        instantânea no Ninja Trader.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Button asChild>
                        <Link href="#">Quero operar sem lag</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="#">Ver especificações</Link>
                    </Button>
                </div>

                <div className="flex gap-8">
                    <div className="flex items-center gap-2 text-white/80">
                        <Timer className="size-8" />
                        <span>1ms de latência</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                        <Database className="size-8" />
                        <span>Data Center T1</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                        <Shield className="size-8" />
                        <span>DDoS Protection</span>
                    </div>
                </div>
            </section>

            <div className="bg-slate-900">
                <section className="m-auto flex max-w-7xl flex-col gap-8 px-8 py-16">
                    <header className="flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-4xl text-white">
                            Pare de perder dinheiro com problemas técnicos
                        </h2>
                        <p className="text-white/80">
                            O mercado não perdoa falhas. Elimine os riscos que
                            destroem a rentabilidade do seu trading diário.
                        </p>
                    </header>

                    <div className="grid grid-cols-3 gap-4">
                        <CardV1
                            icon={MoveDownRight}
                            title="Slippage Excessivo"
                            desc="Cada tick perdido na execução é dinheiro deixado
                                na mesa. Nossa rede elimina o delay entre seu
                                clique e a bolsa."
                        />

                        <CardV1
                            icon={WifiOff}
                            title="Quedas de Conexão"
                            desc="Internet residencial não é confiável para operar
                                pesado. Oferecemos redundância de link e energia
                                24/7."
                        />

                        <CardV1
                            icon={Cpu}
                            title="Hardware Lag"
                            desc="Notbooks comuns travam com indicadores
                                complexos. Nossos servidores dedicados suportam
                                carga máxima."
                        />
                    </div>
                </section>
            </div>

            <section className="m-auto flex max-w-7xl flex-col gap-8 px-8 py-16">
                <header className="flex flex-col gap-2 text-center">
                    <h2 className="font-bold text-4xl text-white">
                        A{" "}
                        <span className="text-center text-cyan-400">
                            Vantagem Injusta
                        </span>{" "}
                        do Trader Profissional
                    </h2>
                    <p className="text-white/80">
                        Tecnologia de ponta otimizada especificamente para
                        plataformas de trading algorítmico e manual.
                    </p>
                </header>

                <div className="grid grid-cols-4 gap-4">
                    <CardV2
                        icon={ShieldUser}
                        title="I/O Blindado"
                        desc="Discos NVMe Enterprise isolados para garantir que
                            nenhuma outra VPS afete sua performance de
                            leitura/escrita."
                    />

                    <CardV2
                        icon={Zap}
                        title="Prioridade de CPU"
                        desc="Threads de processamento dedicadas. Seu NinjaTrader
                            nunca vai 'engasgar' por falta de recursos."
                    />

                    <CardV2
                        icon={ArrowUpDown}
                        title="Protocolo UDP"
                        desc="Otimização de rede para pacotes UDP, garantindo a
                            entrega mais rápida possível de dados de mercado
                            (L1/L2)."
                    />

                    <CardV2
                        icon={Clock12}
                        title="Chicago Timezone"
                        desc="Servidores configurados no fuso horário da CME para
                            alinhamento perfeito de logs e execução de
                            estratégias."
                    />
                </div>
            </section>

            <div className="bg-slate-900">
                <section className="m-auto grid max-w-7xl grid-cols-2 gap-8 px-8 py-16">
                    <div className="grid aspect-video grid-rows-[auto_1fr] gap-4 rounded border border-slate-800 border-solid bg-zinc-950 p-8">
                        <header className="flex items-center justify-between">
                            <div className="grid grid-cols-3 gap-2">
                                <span className="size-2 rounded-full bg-red-500" />
                                <span className="size-2 rounded-full bg-yellow-500" />
                                <span className="size-2 rounded-full bg-green-500" />
                            </div>

                            <span className="text-white/80 text-xs uppercase">
                                System_Monitor_V1.0
                            </span>
                        </header>

                        <div className="flex flex-col justify-center gap-8">
                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white uppercase">
                                <span>Processador</span>
                                <span className="font-bold">
                                    AMD Epyc 7003 Series
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white uppercase">
                                <span>Memória</span>
                                <span className="font-bold">DDR4 ECC Reg</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white uppercase">
                                <span>Armazenamento</span>
                                <span className="font-bold">
                                    NVMe SSD Raid 10
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white uppercase">
                                <span>Uplink</span>
                                <span className="font-bold">
                                    10 Gbps Dedicado
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2 self-start rounded-full border border-green-500 border-solid bg-green-500/20 p-2">
                            <span className="size-2 rounded-full bg-green-500" />
                            <span className="font-bold text-green-500 text-xs uppercase">
                                Hardware Enterprise
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="font-bold text-4xl text-white">
                                Potência Bruta para seus algoritmos
                            </h2>
                            <p className="text-white/80">
                                Não usamos hardware de desktop. Nossos
                                servidores são equipamentos de nível empresarial
                                (Data Center Grade) localizados no coração
                                financeiro de Chicago.
                            </p>
                        </div>

                        <div className="flex flex-col justify-between gap-4">
                            <CardCheckV1
                                title="Windows Server 2022 Otimizado"
                                desc="Sem bloatware, configurado para máxima
                                        performance."
                            />

                            <CardCheckV1
                                title="Instalação One-Click"
                                desc="NinjaTrader já vem pré-instalado."
                            />

                            <CardCheckV1
                                title="Acesso Remoto Rápido"
                                desc="Conecte via RDP de qualquer PC, Mac ou
                                        celular."
                            />
                        </div>
                    </div>
                </section>
            </div>

            <section className="flex flex-col items-center gap-8 px-8 py-16">
                <header className="flex flex-col text-center">
                    <h2 className="font-bold text-4xl text-white">
                        Investimento Pessoal
                    </h2>
                    <p className="text-white/80">
                        Simples, transparente e sem fidelidade.
                    </p>
                </header>

                <div className="grid grid-cols-2 items-center gap-8 rounded border border-orange-500 border-solid p-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl text-white">
                                Plano Trader Pro
                            </p>
                            <span className="text-white/80 text-xs">
                                R$
                                <span className="font-bold text-6xl text-white">
                                    150,00
                                </span>
                                /mês
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button size="lg" asChild>
                                <Link href="#">Assinar Agora</Link>
                            </Button>
                            <p className="text-white/50 text-xs">
                                Cancelamento gratuito a qualquer momento.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white uppercase">
                            Tudo o que você precisa:
                        </h4>

                        <CardCheckV2 title="4 vCPU Cores (Alta Prioridade)" />
                        <CardCheckV2 title="8 GB RAM" />
                        <CardCheckV2 title="60 GB NVMe Storage" />
                        <CardCheckV2 title="Suporte dedicado via Whatsapp" />
                        <CardCheckV2 title="Setup em até 1 hora" />
                    </div>
                </div>
            </section>

            <div className="bg-slate-900">
                <section className="m-auto flex max-w-7xl flex-col items-center gap-8 px-8 py-16">
                    <h2 className="text-center font-bold text-4xl text-white">
                        Perguntas Frequentes
                    </h2>

                    <Accordion
                        className="min-w-7xl max-w-7xl"
                        type="single"
                        collapsible
                    >
                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-1"
                        >
                            <AccordionTrigger>
                                Qual é a latência média para o NinjaTrader/CME
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, quae non nemo fuga
                                aliquid debitis quo delectus natus obcaecati
                                omnis, qui aperiam ullam perspiciatis!
                                Architecto doloremque hic explicabo at amet.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-2"
                        >
                            <AccordionTrigger>
                                Posso instalar outros softwares além do
                                NinjaTrader?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, quae non nemo fuga
                                aliquid debitis quo delectus natus obcaecati
                                omnis, qui aperiam ullam perspiciatis!
                                Architecto doloremque hic explicabo at amet.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-3"
                        >
                            <AccordionTrigger>
                                Como acesso a VPS?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, quae non nemo fuga
                                aliquid debitis quo delectus natus obcaecati
                                omnis, qui aperiam ullam perspiciatis!
                                Architecto doloremque hic explicabo at amet.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-4"
                        >
                            <AccordionTrigger>
                                Existe contrato de fidelidade?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, quae non nemo fuga
                                aliquid debitis quo delectus natus obcaecati
                                omnis, qui aperiam ullam perspiciatis!
                                Architecto doloremque hic explicabo at amet.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </main>
    )
}
