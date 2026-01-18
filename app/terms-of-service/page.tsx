import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Termos de Uso e Isenção de Responsabilidade - VPS Trader Ninja",
    description:
        "Termos de uso e isenção de responsabilidade do serviço VPS Trader Ninja",
}

export default function TermosUso() {
    return (
        <main className="m-auto flex max-w-4xl flex-col gap-4 px-4 pt-20 pb-8 md:gap-8 md:px-8 md:pt-32 md:pb-16">
            <Link
                href="/"
                className="flex w-fit items-center gap-2 text-cyan-400 transition-colors hover:text-cyan-300"
            >
                <ArrowLeft className="size-4" />
                Voltar para o início
            </Link>

            <div className="flex flex-col gap-4 md:gap-6">
                <h1 className="font-bold text-2xl text-white md:text-4xl">
                    Termos de Uso e Isenção de Responsabilidade
                </h1>
                <p className="text-base text-white/50">
                    Efetiva a partir de 18 de janeiro de 2026
                </p>
            </div>

            <div className="flex flex-col gap-8 text-white/80">
                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        VPS Trader Ninja - Isenção de Responsabilidade
                    </h2>
                    <p className="text-base leading-relaxed">
                        Ao contratar os serviços da VPS Trader Ninja, você
                        declara estar ciente e concordar integralmente com os
                        seguintes termos:
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        1. Natureza do Serviço
                    </h2>
                    <p className="text-base leading-relaxed">
                        A VPS Trader Ninja fornece exclusivamente infraestrutura
                        de servidor virtual privado (VPS) otimizado para
                        trading. Nosso serviço consiste em:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>Fornecimento de hardware (servidor dedicado)</li>
                        <li>
                            Instalação e configuração do sistema operacional
                            Windows
                        </li>
                        <li>
                            Pré-instalação do software NinjaTrader e otimizações
                            de performance
                        </li>
                        <li>
                            Suporte técnico relacionado à infraestrutura e
                            configuração do ambiente
                        </li>
                    </ul>
                    <p className="font-semibold text-base leading-relaxed">
                        NÃO fornecemos:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>Consultoria financeira ou de investimentos</li>
                        <li>Estratégias de trading ou sinais de operação</li>
                        <li>
                            Garantias de lucro ou performance no mercado
                            financeiro
                        </li>
                        <li>
                            Assessoria sobre decisões de compra/venda de ativos
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        2. Isenção de Responsabilidade sobre Operações
                        Financeiras
                    </h2>
                    <p className="text-base leading-relaxed">
                        A VPS Trader Ninja <strong>NÃO</strong> se
                        responsabiliza, em hipótese alguma, por:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Perdas financeiras decorrentes de operações
                            realizadas no mercado de futuros, ações, forex ou
                            qualquer outro ativo financeiro
                        </li>
                        <li>
                            Decisões de trading tomadas pelo usuário
                            (estratégias, entradas, saídas, gerenciamento de
                            risco)
                        </li>
                        <li>
                            Problemas com corretoras, mesas proprietárias ou
                            provedores de dados (CQG, Rithmic, Kinetick, etc.)
                        </li>
                        <li>
                            Falhas de execução de ordens causadas por latência
                            de terceiros, rejeição de ordens pela corretora, ou
                            problemas de liquidez do mercado
                        </li>
                        <li>
                            Bugs, erros ou mau funcionamento de softwares de
                            terceiros instalados na VPS (NinjaTrader, plugins,
                            indicadores, robôs, etc.)
                        </li>
                        <li>
                            Incompatibilidade entre softwares instalados pelo
                            usuário e o ambiente da VPS
                        </li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        O mercado financeiro envolve riscos substanciais de
                        perda. Você reconhece que pode perder parte ou todo o
                        capital investido, e que a VPS Trader Ninja não tem
                        controle sobre suas decisões de trading ou sobre as
                        condições de mercado.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        3. Responsabilidade do Usuário
                    </h2>
                    <p className="text-base leading-relaxed">
                        O usuário é inteiramente responsável por:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Todas as operações financeiras realizadas através da
                            VPS
                        </li>
                        <li>
                            Instalação de softwares, plugins, indicadores e
                            estratégias automatizadas (robôs/bots)
                        </li>
                        <li>
                            Configuração de contas de corretoras e provedores de
                            dados
                        </li>
                        <li>
                            Segurança de suas credenciais (senhas de acesso à
                            VPS, contas de corretoras, etc.)
                        </li>
                        <li>
                            Uso adequado dos recursos da VPS (não utilizar para
                            atividades ilegais, spam, mineração de criptomoedas,
                            etc.)
                        </li>
                        <li>
                            Backup de dados e configurações (a VPS Trader Ninja
                            não realiza backups automáticos de dados do usuário)
                        </li>
                        <li>
                            Compartilhamento de acesso (caso opte por
                            compartilhar credenciais com terceiros, você assume
                            todos os riscos)
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        4. Limitações Técnicas e Disponibilidade do Serviço
                    </h2>
                    <h3 className="font-semibold text-lg text-white">
                        4.1. Garantia de Uptime
                    </h3>
                    <p className="text-base leading-relaxed">
                        Embora nos esforcemos para manter 99,9% de uptime, a VPS
                        Trader Ninja não garante disponibilidade ininterrupta do
                        serviço. Podem ocorrer:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Manutenções programadas (com aviso prévio de 48h)
                        </li>
                        <li>
                            Falhas de infraestrutura de terceiros (datacenters,
                            provedores de internet backbone)
                        </li>
                        <li>
                            Eventos de força maior (desastres naturais, ataques
                            cibernéticos em larga escala, etc.)
                        </li>
                    </ul>
                    <h3 className="font-semibold text-lg text-white">
                        4.2. Isenção de Responsabilidade por Downtime
                    </h3>
                    <p className="text-base leading-relaxed">
                        A VPS Trader Ninja <strong>NÃO</strong> se
                        responsabiliza por:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Perdas financeiras decorrentes de indisponibilidade
                            temporária do serviço
                        </li>
                        <li>Ordens não executadas devido a queda de conexão</li>
                        <li>
                            Estratégias automatizadas que deixaram de rodar
                            durante períodos de manutenção
                        </li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        <strong>Recomendação:</strong> Sempre tenha um plano de
                        contingência (acesso alternativo ao mercado) para
                        situações críticas.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        5. Softwares de Terceiros
                    </h2>
                    <h3 className="font-semibold text-lg text-white">
                        5.1. NinjaTrader e Plugins
                    </h3>
                    <p className="text-base leading-relaxed">
                        O NinjaTrader é um software de propriedade da
                        NinjaTrader LLC. A VPS Trader Ninja apenas fornece o
                        ambiente otimizado para sua execução. Quaisquer
                        problemas relacionados a:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>Bugs do NinjaTrader</li>
                        <li>Incompatibilidade de plugins/indicadores</li>
                        <li>Atualizações que causem instabilidade</li>
                        <li>Licenciamento e termos de uso do NinjaTrader</li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        São de responsabilidade exclusiva do desenvolvedor
                        (NinjaTrader LLC) e do usuário.
                    </p>
                    <h3 className="font-semibold text-lg text-white">
                        5.2. Plugins e Indicadores de Terceiros
                    </h3>
                    <p className="text-base leading-relaxed">
                        A instalação de plugins como Replikanto, Jigsaw,
                        OrderFlowBot, ou qualquer outro add-on é de inteira
                        responsabilidade do usuário. A VPS Trader Ninja:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Não desenvolve, vende ou distribui esses softwares
                        </li>
                        <li>
                            Não garante compatibilidade ou funcionamento correto
                        </li>
                        <li>
                            Não se responsabiliza por bugs, erros de execução ou
                            perdas causadas por esses softwares
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        6. Segurança e Privacidade
                    </h2>
                    <h3 className="font-semibold text-lg text-white">
                        6.1. Responsabilidade do Usuário
                    </h3>
                    <p className="text-base leading-relaxed">
                        Você é responsável por:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Manter suas credenciais de acesso seguras (senha da
                            VPS, senha do NinjaTrader, senhas de corretoras)
                        </li>
                        <li>
                            Não compartilhar acesso com terceiros não
                            autorizados
                        </li>
                        <li>
                            Utilizar autenticação de dois fatores (2FA) em suas
                            contas de corretoras
                        </li>
                    </ul>
                    <h3 className="font-semibold text-lg text-white">
                        6.2. Limitações da VPS Trader Ninja
                    </h3>
                    <p className="text-base leading-relaxed">
                        Embora implementemos medidas de segurança (firewall,
                        proteção DDoS, acesso restrito via RDP), não podemos
                        garantir proteção absoluta contra:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Ataques cibernéticos sofisticados (zero-day
                            exploits)
                        </li>
                        <li>
                            Vazamento de credenciais por phishing ou engenharia
                            social
                        </li>
                        <li>
                            Invasões decorrentes de senhas fracas ou
                            compartilhadas
                        </li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        A VPS Trader Ninja não se responsabiliza por perdas
                        financeiras ou vazamento de dados decorrentes de falhas
                        de segurança causadas por negligência do usuário.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        7. Proibições de Uso
                    </h2>
                    <p className="text-base leading-relaxed">
                        É estritamente proibido utilizar a VPS para:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Atividades ilegais (fraude, lavagem de dinheiro,
                            hacking, etc.)
                        </li>
                        <li>Mineração de criptomoedas</li>
                        <li>Envio de spam ou ataques DDoS</li>
                        <li>Hospedagem de conteúdo ilegal ou ofensivo</li>
                        <li>Revenda de acesso à VPS sem autorização prévia</li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        Violações resultarão em suspensão imediata do serviço,
                        sem direito a reembolso.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        8. Cancelamento e Reembolso
                    </h2>
                    <h3 className="font-semibold text-lg text-white">
                        8.1. Política de Cancelamento
                    </h3>
                    <p className="text-base leading-relaxed">
                        O serviço pode ser cancelado a qualquer momento pelo
                        usuário, sem multa ou burocracia. O acesso permanece
                        ativo até o final do período pago.
                    </p>
                    <h3 className="font-semibold text-lg text-white">
                        8.2. Política de Reembolso
                    </h3>
                    <p className="text-base leading-relaxed">
                        <strong>NÃO</strong> oferecemos reembolso em nenhuma
                        hipótese, incluindo:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>Insatisfação com o serviço</li>
                        <li>
                            Problemas de compatibilidade com softwares de
                            terceiros
                        </li>
                        <li>Perdas financeiras no mercado</li>
                        <li>Mudança de estratégia de trading</li>
                    </ul>
                    <p className="text-base leading-relaxed">
                        <strong>Recomendação:</strong> Avalie cuidadosamente
                        suas necessidades antes de contratar.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        9. Modificações nos Termos
                    </h2>
                    <p className="text-base leading-relaxed">
                        A VPS Trader Ninja reserva-se o direito de modificar
                        estes termos a qualquer momento. Alterações
                        significativas serão comunicadas via WhatsApp ou e-mail
                        com antecedência mínima de 15 dias.
                    </p>
                    <p className="text-base leading-relaxed">
                        O uso continuado do serviço após a notificação implica
                        aceitação dos novos termos.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        10. Lei Aplicável e Foro
                    </h2>
                    <p className="text-base leading-relaxed">
                        Estes termos são regidos pelas leis da República
                        Federativa do Brasil. Quaisquer disputas serão
                        resolvidas no foro da comarca competente, com exclusão
                        de qualquer outro, por mais privilegiado que seja.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        11. Declaração de Ciência e Concordância
                    </h2>
                    <p className="text-base leading-relaxed">
                        Ao contratar a VPS Trader Ninja, você declara que:
                    </p>
                    <ul className="ml-6 flex list-disc flex-col gap-2">
                        <li>
                            Leu, compreendeu e concorda integralmente com este
                            Disclaimer
                        </li>
                        <li>Está ciente dos riscos do mercado financeiro</li>
                        <li>
                            Não responsabilizará a VPS Trader Ninja por perdas
                            financeiras
                        </li>
                        <li>Utilizará o serviço de forma ética e legal</li>
                        <li>
                            É maior de 18 anos e possui capacidade jurídica para
                            contratar serviços
                        </li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="font-bold text-white text-xl md:text-2xl">
                        12. Contato
                    </h2>
                    <p className="text-base leading-relaxed">
                        Para dúvidas sobre estes termos, entre em contato via:
                    </p>
                    <ul className="ml-6 flex list-none flex-col gap-2">
                        <li>📱 WhatsApp: +55 14 99755-9851</li>
                        <li>📧 E-mail: soultech215@gmail.com</li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <p className="text-center text-base text-white/50">
                        Última atualização: 18 de janeiro de 2026
                    </p>
                    <p className="text-center text-base text-white/50">
                        VPS Trader Ninja - Todos os direitos reservados.
                    </p>
                </section>
            </div>
        </main>
    )
}
