import Title from "./Title";



export default function RegulationComponent() {

    return (
        <div>
            <Title title="Regulamento" />
            <div className="flex gap-20 lg:flex-wrap mt-7">
                <nav className="lg:mb-10">
                    <ul className="lg:flex lg:flex-wrap lg:gap-6">
                        <li>
                            <a className="block py-5 pl-6 liRegulation ssm:max-w-[200px] bg-lightBlue border-l-DarkBlue border-l-8 border-solid" >O que está incluso</a>
                        </li>
                        <li>
                            <a className="block shadow-2xl py-5 pl-6 liRegulation ssm:max-w-[200px] mt-3 lg:mt-0 border-l-blue border-l-8 border-solid  " href="">Como utilizar</a>
                        </li>
                        <li>
                            <a className="block shadow-2xl py-5 pl-6 liRegulation ssm:max-w-[200px] mt-3 lg:mt-0 border-l-blue border-l-8 border-solid  " href="">Cancelamento e taxas</a>
                        </li>
                        <li>
                            <a className="block shadow-2xl py-5 pl-6 liRegulation ssm:max-w-[200px] mt-3 lg:mt-0 border-l-blue border-l-8 border-solid  " href="">Hotel e comodidades</a>
                        </li>
                        <li>
                            <a className="block shadow-2xl py-5 pl-6 liRegulation ssm:max-w-[200px] mt-3 lg:mt-0 border-l-blue border-l-8 border-solid  " href="">Regulamento Completo</a>
                        </li>
                    </ul>
                </nav>
                <div className=" sm:px-0 text-text max-w-[60vw]">
                    <h3 className="text-2xl">Conheça o pacote</h3>
                    <br />
                    <p className="break-words">
                        o pacote inclui:<br /><br />
                        Aéreo: Passagem aérea de ida e volta entre a cidade de origem Campo Grande - Aeroporto Internacional de Campo Grande (CGR), em classe econômica, podendo haver conexão e/ou escala.
                        <br /><br />
                        Bagagem: Este pacote permite levar uma bagagem de mão com até 10 quilos. Desta forma, você poderá levar uma mochila ou bolsa (que deverá ser acomodada debaixo do seu assento) e uma bagagem de mão (que deverá caber no compartimento superior do avião).
                        <br /><br />
                        Hospedagem: Em Bonito na Pousada Caramanchão, Pousada Chão de Pedra, Pousada Flor da Guavira, Pousada Lago Azul ou outro hotel de mesma categoria econômica - com café da manhã. A hospedagem será definida pelo Hurb de acordo com a disponibilidade e tarifário promocional.
                        <br /><br />
                        Atenção: As diárias são contabilizadas pelas noites dormidas a partir da sua chegada no hotel.
                        <br /><br />
                        Idiomas do hotel: Português, inglês ou espanhol
                        <br /><br />
                        <br />

                        <strong className="text-2xl leading-10 font-normal">Dados do Voo</strong>
                        <br />
                        Nós ficamos responsáveis por escolher as informações do seu voo (aeroporto, companhia aérea, dias e horários de voo). Estas informações serão enviadas para sua confirmação em até 45 dias antes da primeira data que você inseriu no formulário.
                        <br /><br />
                        <br />

                        <strong className="text-2xl leading-10 font-normal">Tipo de Acomodação</strong><br />
                        Quarto individual, duplo ou triplo, de acordo com o número de viajantes.
                        <br /><br />
                        <br />

                        <strong className="text-2xl leading-10 font-normal">Importante</strong>
                        <br />
                        Para garantir a oferta no precinho Hurb, você deve comprar 2 pacotes para validar a acomodação dupla ou 3 pacotes para validar a acomodação tripla.
                        <br /><br />
                        Se desejar, poderá configurar acomodação individual ao comprar apenas 1 pacote. Essa informação deverá ser inserida no campo Solicitações Especiais do formulário de agendamento. Será adicionado 40% do valor da opção escolhida antes da emissão da passagem aérea. Não será possível validar o pacote sem o pagamento dessa diferença.
                        Regra para vincular os pacotes:
                        <br /><br />
                        Caso tenha comprado seu pacote separado das pessoas que viajarão com você, o número do pedido de cada um deverá ser informado no formulário de agendamento dos outros integrantes para agilizar o processo de reserva de todos.
                        <br /><br />
                        Obs.: Nem sempre conseguimos garantir o mesmo voo e/ou hotel para todos os viajantes com pedidos vinculados. Vai depender do número de viajantes e da disponibilidade. Caso deseje que todos estejam no mesmo voo e/ou hotel, nos informe no campo  Viajando com outras pessoas”, o número dos pedidos dos outros viajantes para verificarmos a disponibilidade.
                        <br /><br />
                        Pagamentos:
                        Para finalizar a compra do seu pacote, você pode optar por pagar em até 12x no cartão de crédito ou no boleto bancário à vista. Se desejar pagar no boleto parcelado, sem consulta ao SPC e SERASA, você poderá consultar o número de parcelas disponíveis na página de pagamento, antes de finalizar a compra.
                        <br /><br />
                        Atenção para o período em que deseja viajar, pois o pagamento em boleto parcelado deverá ser concluído com, no mínimo, 60 dias de antecedência do período em que deseja efetivar a sua viagem.
                        <br /><br />
                        Fique Ligado(a)!
                        <br /><br />
                        O não pagamento de algum boleto em até 10 dias após a compra resulta no cancelamento automático do pedido.
                        <br /><br />
                        É legal saber: em alguns casos, é possível que seja cobrado juros de parcelamento. Você pode conferir esses detalhes antes do pagamento por boleto ou cartão de crédito. Atenção!
                        <br /><br />
                        <strong className="font-normal">- O Hurb não realiza personalizações/modificações nos pacotes;</strong>
                        - Caso as 3 datas sugeridas pelo Viajante estejam indisponíveis, iremos enviar uma nova opção levando em consideração a proximidade às datas sugeridas;
                        <br /><br />
                        - Garantimos o mesmo voo para até 8 viajantes com pedidos vinculados. No entanto, a hospedagem irá depender da disponibilidade do estabelecimento.
                        <br /><br />
                        <br /><br />
                        <strong className="text-2xl leading-10 font-normal">Regras para Crianças</strong>
                        <br />
                        Crianças de até 1 ano e 11 meses completos até a data de retorno da viagem pagam uma taxa de serviço de 150 reais. Esse valor poderá ser pago antes da confirmação do voo através do link abaixo. Os dados da criança (nome completo e data de nascimento) deverão ser informados no campo “Solicitações sobre sua viagem” do formulário de agendamento. Link para taxa de serviço infantil: https://www.hurb.com/br/packages/especial/868793
                        • Crianças a partir de 2 anos pagam o mesmo valor de adulto, sendo necessária a compra do pacote para a mesma

                    </p>
                </div>
            </div>
        </div>
    )
}