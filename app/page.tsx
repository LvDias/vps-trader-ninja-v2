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
            <section className="relative flex min-h-screen flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
                <Chart />

                <div className="flex items-center gap-2 rounded-full border border-cyan-500 border-solid bg-cyan-500/20 p-2">
                    <span className="size-2 rounded-full bg-cyan-500" />
                    <span className="font-bold text-cyan-500 text-xs uppercase">
                        Servidores em Chicago (CME)
                    </span>
                </div>

                <h1 className="text-center font-extrabold text-4xl text-white md:text-7xl">
                    Opere Futuros na <br />
                    <span className="bg-gradient-to-r from-red-500 to-orange-700 bg-clip-text text-transparent">
                        Velocidade da Luz
                    </span>
                </h1>

                <div className="flex max-w-2xs flex-col gap-2 text-center text-sm text-white/80 md:max-w-max md:text-base">
                    <p>
                        Hospedagem VPS de alta performance localizada ao Lado da
                        CME.
                    </p>
                    <p>
                        Latência ultrabaixa de 1-2ms para execução de ordens
                        instantânea no Ninja Trader.
                    </p>
                </div>

                <Button className="z-10" size="lg" asChild>
                    <Link href={process.env.LINK_CHECKOUT!}>
                        Quero operar sem lag
                    </Link>
                </Button>

                <div className="hidden gap-8 md:flex">
                    <div className="flex items-center gap-2 text-sm text-white/80 md:text-base">
                        <Timer className="size-8" />
                        <span>1ms de latência</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/80">
                        <Database className="size-8" />
                        <span>Data Center T1</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/80">
                        <Shield className="size-8" />
                        <span>DDoS Protection</span>
                    </div>
                </div>
            </section>

            <div className="bg-slate-900">
                <section className="m-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:gap-8 md:px-8 md:py-16">
                    <header className="flex flex-col gap-2 text-center">
                        <h2 className="font-bold text-2xl text-white md:text-4xl">
                            Pare de perder dinheiro com problemas técnicos
                        </h2>
                        <p className="text-sm text-white/80 md:text-base">
                            O mercado não perdoa falhas. Elimine os riscos que
                            destroem a rentabilidade do seu trading diário.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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

            <section className="m-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:gap-8 md:px-8 md:py-16">
                <header className="flex flex-col gap-2 text-center">
                    <h2 className="font-bold text-2xl text-white md:text-4xl">
                        A{" "}
                        <span className="text-center text-cyan-400">
                            Vantagem Injusta
                        </span>{" "}
                        do Trader Profissional
                    </h2>
                    <p className="text-sm text-white/80 md:text-base">
                        Tecnologia de ponta otimizada especificamente para
                        plataformas de trading algorítmico e manual.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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

            <div className="bg-slate-900" id="specifications">
                <section className="m-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-8 md:gap-8 md:px-8 md:py-16 lg:grid-cols-2">
                    <div className="grid aspect-video grid-rows-[auto_1fr] gap-8 rounded border border-slate-800 border-solid bg-zinc-950 p-8">
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

                        <div className="flex flex-col justify-center gap-4 md:gap-8">
                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white text-xs uppercase md:text-sm">
                                <span>Processador</span>
                                <span className="font-bold">
                                    AMD Epyc 7003 Series
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white text-xs uppercase md:text-sm">
                                <span>Memória</span>
                                <span className="font-bold">DDR4 ECC Reg</span>
                            </div>

                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white text-xs uppercase md:text-sm">
                                <span>Armazenamento</span>
                                <span className="font-bold">
                                    NVMe SSD Raid 10
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-b-white/10 border-solid pb-2 text-white text-xs uppercase md:text-sm">
                                <span>Uplink</span>
                                <span className="font-bold">
                                    10 Gbps Dedicado
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-8">
                        <div className="hidden items-center gap-2 self-center rounded-full border border-green-500 border-solid bg-green-500/20 p-2 md:flex md:self-start">
                            <span className="size-2 rounded-full bg-green-500" />
                            <span className="font-bold text-green-500 text-xs uppercase">
                                Hardware Enterprise
                            </span>
                        </div>

                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h2 className="font-bold text-2xl text-white md:text-4xl">
                                Potência Bruta para seus algoritmos
                            </h2>
                            <p className="text-sm text-white/80 md:text-base">
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

            <section className="flex flex-col items-center gap-4 px-4 py-8 md:gap-8 md:px-8 md:py-16">
                <header className="flex flex-col text-center">
                    <h2 className="font-bold text-2xl text-white md:text-4xl">
                        Investimento Pessoal
                    </h2>
                    <p className="text-sm text-white/80 md:text-base">
                        Simples, transparente e sem fidelidade.
                    </p>
                </header>

                <div className="grid grid-cols-1 items-center gap-4 rounded border border-orange-500 border-solid p-4 md:gap-8 md:p-8 lg:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center gap-2 md:items-start">
                            <p className="text-white text-xl md:text-2xl">
                                Plano Trader Pro
                            </p>
                            <span className="text-white/80 text-xs">
                                R$
                                <span className="font-bold text-4xl text-white md:text-6xl">
                                    150,00
                                </span>
                                /mês
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button size="lg" asChild>
                                <Link href={process.env.LINK_CHECKOUT!}>
                                    Assinar Agora
                                </Link>
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
                <section className="m-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 md:gap-8 md:px-8 md:py-16">
                    <h2 className="text-center font-bold text-2xl text-white md:text-4xl">
                        Perguntas Frequentes
                    </h2>

                    <Accordion className="w-full" type="single" collapsible>
                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-1"
                        >
                            <AccordionTrigger>
                                Q1: Como eu conecto na VPS pelo celular ou
                                tablet?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: É muito simples! Você usa o
                                        aplicativo “Windows App” (disponível
                                        gratuitamente para iOS e Android).
                                    </p>
                                    <p>Passo a passo:</p>
                                    <ul>
                                        <ol>
                                            - Baixe o app "Windows App" na App
                                            Store ou Google Play
                                        </ol>
                                        <ol>
                                            - Após a contratação da VPS, você
                                            recebe as credenciais de acesso (IP,
                                            usuário e senha) via E-mail.
                                        </ol>
                                        <ol>
                                            - Abra o app, toque em "+" para
                                            adicionar uma nova conexão
                                        </ol>
                                        <ol>
                                            - Cole o endereço IP que enviamos e
                                            suas credenciais
                                        </ol>
                                        <ol>
                                            - Pronto! Você terá acesso total
                                            Windows e ao NinjaTrader como se
                                            estivesse em um desktop de 12
                                            núcleos
                                        </ol>
                                    </ul>
                                    <p>
                                        Dica: Recomendamos usar uma tela de pelo
                                        menos 10" (tablet) para melhor
                                        visualização dos gráficos, mas é
                                        perfeitamente possível operar até de um
                                        smartphone em situações de emergência.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-2"
                        >
                            <AccordionTrigger>
                                Q2: É difícil configurar meu Replikanto ou
                                outros plugins na VPS?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: Não! O processo é idêntico ao que
                                        você já faz no seu PC local.
                                    </p>
                                    <p>
                                        O NinjaTrader já vem instalado e
                                        otimizado na VPS. Para adicionar o
                                        Replikanto (ou qualquer outro
                                        plugin/indicador):
                                    </p>
                                    <ul>
                                        <ol>- Acesse a VPS normalmente</ol>
                                        <ol>- Abra o NinjaTrader</ol>
                                        <ol>
                                            - Vá em Tools &gt; Import &gt;
                                            NinjaScript Add-On
                                        </ol>
                                        <ol>
                                            - Selecione o arquivo .zip do seu
                                            plugin
                                        </ol>
                                        <ol>- Reinicie o NinjaTrader</ol>
                                    </ul>
                                    <p>
                                        E se você tiver dúvida? Nosso suporte
                                        via WhatsApp te guia em minutos (não em
                                        horas). Nossa equipe conhece NinjaTrader
                                        profundamente e já configurou centenas
                                        de Replikanto, Order Flow, Market
                                        Profile e outros add-ons.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-3"
                        >
                            <AccordionTrigger>
                                Q3: Posso usar minha licença do NinjaTrader na
                                VPS?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: Sim, perfeitamente! Você usa a mesma
                                        licença que já possui.
                                    </p>
                                    <p>
                                        Basta fazer login com sua conta do
                                        NinjaTrader dentro da VPS. A política da
                                        NinjaTrader permite que você use sua
                                        licença em até 2 máquinas
                                        simultaneamente (seu PC local + a VPS,
                                        por exemplo).
                                    </p>
                                    <p>
                                        Importante: Se você usa a versão
                                        gratuita (Sim Feed ou dados atrasados),
                                        também funciona normalmente. Se usa
                                        provedores de dados como CQG, Rithmic,
                                        Kinetick, etc., basta conectar suas
                                        credenciais dentro da VPS como faria em
                                        qualquer computador.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-4"
                        >
                            <AccordionTrigger>
                                Q4: E se eu tiver problemas técnicos? Vocês
                                resolvem?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: Absolutamente. E aqui está um dos
                                        nossos maiores diferenciais:
                                    </p>
                                    <p>
                                        Nosso suporte NÃO é genérico de TI.
                                        Somos programadores especializados em
                                        NinjaTrader. Entendemos de:
                                    </p>
                                    <ul>
                                        <ol>
                                            Configuração de Data Feeds (CQG,
                                            Rithmic, Kinetick)
                                        </ol>
                                        <ol>
                                            Instalação de indicadores e
                                            estratégias automatizadas
                                        </ol>
                                        <ol>
                                            Otimização de performance para
                                            scalping
                                        </ol>
                                        <ol>
                                            Troubleshooting de plugins como
                                            Replikanto, Jigsaw, OrderFlowBot,
                                            etc.
                                        </ol>
                                    </ul>
                                    <p>
                                        Suporte humano 24/7 via WhatsApp. Sem
                                        tickets, sem espera de 48h, sem robôs.
                                        Você fala direto com quem entende do
                                        assunto.
                                    </p>
                                    <p>Exemplos do que já resolvemos:</p>
                                    <ul>
                                        <ol>
                                            "Meu Replikanto não está replicando
                                            as ordens" → Resolvido em 10 minutos
                                        </ol>
                                        <ol>
                                            "O NinjaTrader está lento ao abrir
                                            múltiplos gráficos" → Ajustamos a
                                            alocação de RAM
                                        </ol>
                                        <ol>
                                            "Não consigo conectar no Rithmic" →
                                            Configuramos as portas e firewall
                                        </ol>
                                    </ul>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-5"
                        >
                            <AccordionTrigger>
                                Q5: A VPS fica ligada 24 horas? Preciso
                                desligar?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: A VPS roda 24/7 sem interrupção. Você
                                        NÃO precisa desligar ou deslogar.
                                    </p>
                                    <p>Por que isso é importante?</p>
                                    <ul>
                                        <li>
                                            Robôs e estratégias automatizadas
                                            continuam rodando mesmo quando você
                                            fecha a conexão remota
                                        </li>
                                        <li>
                                            O NinjaTrader permanece conectado ao
                                            mercado, recebendo dados em tempo
                                            real
                                        </li>
                                        <li>
                                            Você não perde conexão se sua
                                            internet local cair ou se você
                                            fechar o notebook
                                        </li>
                                    </ul>
                                    <p>Como funciona na prática:</p>
                                    <ul>
                                        <li>
                                            Você conecta na VPS pelo celular/PC
                                        </li>
                                        <li>
                                            Abre o NinjaTrader e deixa suas
                                            estratégias rodando
                                        </li>
                                        <li>
                                            Fecha o aplicativo Remote Desktop no
                                            seu dispositivo
                                        </li>
                                        <li>
                                            O servidor continua operando
                                            normalmente (como se você tivesse
                                            deixado um PC ligado 24h)
                                        </li>
                                    </ul>
                                    <p>
                                        Isso é ideal para quem opera no
                                        overnight, usa trailing stops
                                        automatizados ou quer monitorar o
                                        mercado sem ficar preso ao computador.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-6"
                        >
                            <AccordionTrigger>
                                Q6: Qual a diferença entre essa VPS e uma VPS
                                comum da Amazon/Google?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: A diferença está na otimização
                                        cirúrgica que fizemos no sistema
                                        operacional. É como comparar um carro de
                                        rua com um carro de Fórmula 1.
                                    </p>

                                    <p>VPS comum (AWS, Google Cloud, Azure):</p>

                                    <ul>
                                        <li>
                                            - Windows "puro", sem otimizações
                                        </li>
                                        <li>
                                            - Desperdiça CPU/RAM com logs, sons,
                                            atualizações automáticas
                                        </li>
                                        <li>
                                            - Antivírus escaneia cada tick de
                                            mercado que chega
                                        </li>
                                        <li>
                                            - Você precisa configurar tudo
                                            manualmente (instalar NT, otimizar
                                            rede, ajustar prioridades)
                                        </li>
                                        <li>
                                            - Suporte genérico de TI (não
                                            entendem de trading)
                                        </li>
                                    </ul>
                                    <p>VPS Trader Ninja:</p>
                                    <ul>
                                        <li>
                                            - "Lobotomia" de I/O: Bloqueamos
                                            fisicamente a gravação de logs e
                                            sons inúteis
                                        </li>
                                        <li>
                                            - Prioridade de CPU "High":
                                            NinjaTrader tem preferência absoluta
                                            sobre processos do Windows
                                        </li>
                                        <li>
                                            - Protocolo UDP ativado: Menor
                                            latência que TCP (padrão em VPS
                                            comuns)
                                        </li>
                                        <li>
                                            - Windows Defender com exclusões:
                                            Não escaneia o NinjaTrader (elimina
                                            micro-travamentos)
                                        </li>
                                        <li>
                                            - NinjaTrader pré-instalado com
                                            Plugin Net Time (delay 0,01 a 0,06s)
                                        </li>
                                        <li>
                                            - Suporte especializado em trading
                                            via WhatsApp 24/7
                                        </li>
                                    </ul>
                                    <p>
                                        Resultado: Você tem a performance de um
                                        servidor institucional, mas com a
                                        facilidade de um serviço plug-and-play.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-7"
                        >
                            <AccordionTrigger>
                                Q7: Posso cancelar a qualquer momento?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: Sim, sem burocracia. O serviço é
                                        mensal e sem fidelidade.
                                    </p>
                                    <p>
                                        Você pode cancelar quando quiser. Não há
                                        multa, taxa de cancelamento ou "letras
                                        miúdas".
                                    </p>
                                    <p>Como funciona:</p>
                                    <ul>
                                        <li>
                                            - Você contrata e paga mensalmente
                                            (R$ 150/mês)
                                        </li>
                                        <li>
                                            - Se decidir cancelar, basta avisar
                                            via WhatsApp
                                        </li>
                                        <li>
                                            - Seu acesso permanece ativo até o
                                            final do período pago
                                        </li>
                                        <li>
                                            - Não há renovação automática
                                            forçada (você escolhe se quer
                                            continuar)
                                        </li>
                                    </ul>
                                    <p>
                                        Nosso objetivo é que você fique porque a
                                        VPS resolve seu problema de performance,
                                        não porque está preso em um contrato.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-8"
                        >
                            <AccordionTrigger>
                                Q8: Vocês oferecem garantia de uptime (tempo
                                online)?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>R: Sim. Garantia de 99,9% de uptime.</p>
                                    <p>
                                        Nossos servidores ficam em datacenters
                                        de nível empresarial nos EUA (região
                                        central, próximo a Chicago), com:
                                    </p>
                                    <ul>
                                        <li>
                                            - Redundância de energia (geradores
                                            backup)
                                        </li>
                                        <li>
                                            - Conexão de rede redundante
                                            (múltiplos provedores)
                                        </li>
                                        <li>
                                            - Monitoramento 24/7 por nossa
                                            equipe
                                        </li>
                                    </ul>
                                    <p>E se houver algum problema?</p>
                                    <ul>
                                        <li>
                                            - Em caso de manutenção programada
                                            (rara), avisamos com antecedência
                                            mínima de 48h
                                        </li>
                                        <li>
                                            - Se houver qualquer problema de
                                            infraestrutura não programado, nosso
                                            time age imediatamente e você é
                                            notificado via WhatsApp
                                        </li>
                                    </ul>
                                    <p>
                                        Histórico: Nos últimos 12 meses, tivemos
                                        menos de 2 horas de downtime total
                                        (99,98% de uptime real).
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-9"
                        >
                            <AccordionTrigger>
                                Q9: Posso instalar outros softwares além do
                                NinjaTrader?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: Sim, você tem acesso administrativo
                                        completo. A VPS é sua.
                                    </p>
                                    <p>
                                        Você pode instalar o que precisar para
                                        sua operação:
                                    </p>
                                    <ul>
                                        <li>
                                            - TradingView (para análises
                                            complementares)
                                        </li>
                                        <li>
                                            - Excel/Google Sheets (para
                                            planilhas de controle)
                                        </li>
                                        <li>
                                            - Discord, Telegram, WhatsApp Web
                                            (para grupos de trading)
                                        </li>
                                        <li>
                                            - Outros terminais (se você opera
                                            múltiplos mercados)
                                        </li>
                                        <li>
                                            - Softwares de gravação de tela
                                            (para revisar suas operações)
                                        </li>
                                    </ul>
                                    <p>
                                        Recomendação: Evite instalar softwares
                                        pesados que não sejam essenciais para
                                        trading (jogos, editores de vídeo,
                                        etc.). A ideia é manter 100% dos
                                        recursos focados em performance de
                                        execução.
                                    </p>
                                    <p>
                                        Se tiver dúvida se algo vai impactar a
                                        performance, pergunte no WhatsApp antes
                                        de instalar. Nosso time te orienta.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                            className="mb-4 border-solid border-none bg-zinc-950 p-4 text-white"
                            value="item-10"
                        >
                            <AccordionTrigger>
                                Q10: Como funciona a segurança contra ataques
                                DDoS?
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4">
                                    <p>
                                        R: Implementamos múltiplas camadas de
                                        segurança:
                                    </p>
                                    <p>1. Bloqueio de acesso via navegador</p>
                                    <ul>
                                        <li>
                                            - Você só consegue conectar usando o
                                            aplicativo Windows App (RDP)
                                        </li>
                                        <li>
                                            - Isso elimina 99% dos vetores de
                                            ataque comuns (phishing, exploits de
                                            navegador, etc.)
                                        </li>
                                        <li>
                                            - Hackers não conseguem "adivinhar"
                                            sua senha via tentativa e erro na
                                            web
                                        </li>
                                    </ul>
                                    <p>2. Proteção DDoS de nível empresarial</p>
                                    <ul>
                                        <li>
                                            - Nossos servidores ficam em
                                            datacenters com filtragem de tráfego
                                            malicioso
                                        </li>
                                        <li>
                                            - Ataques DDoS são mitigados
                                            automaticamente antes de chegarem ao
                                            seu servidor
                                        </li>
                                    </ul>
                                    <p>3. Firewall configurado para trading</p>
                                    <ul>
                                        <li>
                                            - Apenas as portas necessárias para
                                            NinjaTrader e RDP estão abertas
                                        </li>
                                        <li>
                                            - Todo o resto é bloqueado por
                                            padrão
                                        </li>
                                    </ul>
                                    <p>4. Credenciais seguras</p>
                                    <ul>
                                        <li>
                                            - Senhas fortes geradas
                                            automaticamente
                                        </li>
                                        <li>
                                            - Você pode (e deve) alterar a senha
                                            após o primeiro acesso
                                        </li>
                                    </ul>
                                    <p>
                                        Resultado: Sua estação de trabalho fica
                                        em um "bunker digital". Você opera com
                                        tranquilidade, sabendo que sua
                                        infraestrutura está protegida.
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </main>
    )
}
