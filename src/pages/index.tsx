import type { NextPage } from 'next'
import Avaliations from './components/Avaliations'
import CardComoFunciona from './components/CardComoFunciona'
import CardOpcoesDeOspedagem from './components/CardOpcoesDeOspedagem'
import CardRoteiroDoPacote from './components/CardRoteiroDoPacote'
import Regulation from './components/Regulation'
import Title from './components/Title'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='bg-gray'>
      {/* =================================================================== */}
      {/* ===================== TOP WEB SITE DECORATION ===================== */}
      {/* =================================================================== */}
      <div className='relative h-[90vh]'>
        <Image src={'/background/bgHeader.png'} layout='fill' />
        <header className='flex justify-betweenn items-center absolute inset-x-0 container mx-auto xl:mx-10 mt-14 '>
          <div>
            <img src="/log.svg" alt="" />
          </div>
          <div className='flex gap-3 absolute right-0'>
            <p className='text-white'>Menu</p>
            <img className='w-5' src="/menuBurguer.svg" alt="" />
          </div>
        </header>
        <div className='absolute text-white mt-[35vh] left-0 right-0 container mx-auto xl:mx-10'>
          <p className='text-xl'>
            Um mergulho na <br />
            <span className='text-6xl -ml-[2px] font-medium font-workSans'>Natureza</span>
          </p>
        </div>
      </div>
      {/* =================================================================== */}
      {/* ============= HEADER TITULO: PACOTE BONITO LUA DE MEL ============= */}
      {/* =================================================================== */}
      <main>
        <header className='relative'>
          <div className='shadow-3xl flex flex-wrap gap-9 items-center container mx-auto -mt-[18vh] xl:mx-10 py-10 px-10 bg-white rounded-2xl'>
            <div>
              <header>
                <Title title='Pacote Bonito Lua de Mel' />
                <p className='text-text'>4 diárias + 5 passeios + Hotel</p>
              </header>
              <section className=' py-5 px-7 mt-10 border-2 border-grayBorder border-solid rounded-lg'>
                <div className='flex gap-6'>
                  <div className='flex bg-grayBlue gap-3 px-6 py-4 pr-14 rounded-lg'>
                    <img src="/shoppingCart.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Esta oferta é válida até:</h3>
                      <p>15/05/2021</p>
                    </div>
                  </div>
                  <div className='flex bg-grayBlue gap-3 px-6 py-4 pr-14 rounded-lg'>
                    <img src="/airplane.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Período para Viagem:</h3>
                      <p>15/05/2021 a 18/12/2021</p>
                    </div>
                  </div>
                </div>
                <div className='flex mt-6 gap-6'>
                  <div className='flex gap-4 px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <img src="/padlock.svg" alt="iconPadlock" />
                    <p className='text-text'>Hospedagem <br />opcional</p>
                  </div>
                  <div className='flex gap-4 px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <img src="/man.svg" alt="iconPadlock" />
                    <p className='text-text'>Passeios<br />e atrações</p>
                  </div>
                  <div className='flex gap-4 px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <img src="/bus.svg" alt="iconPadlock" />
                    <p className='text-text'>Traslados para <br />Bonito e passeios</p>
                  </div>
                </div>
              </section>
            </div>
            <aside className=' text-center mx-auto text-text'>
              <h4>a partir de</h4>
              <h2 className='text-2xl text-[#444444]'>10x de R$ <span className='text-5xl'>93,20</span></h2>
              <h4 className='text-lg'>ou 932,00 à vista</h4>
              <p className='text-sm'>(preço por pessoas)</p>
              <button className='bg-orange py-3 px-12 mt-4 rounded-xl text-title'>Quero Comprar</button>
            </aside>
          </div>
        </header>
        {/* =================================================================== */}
        {/* ================ SECTION TITULO: ROTEIRO DO PACOTE ================ */}
        {/* =================================================================== */}
        <section className='shadow-3xl bg-white container mx-auto xl:mx-10 pt-10 pb-1  px-10 mt-14 rounded-2xl'>
          <Title title='Roteiro do Pacote' />
          <div className='mt-9'>
            <CardRoteiroDoPacote
              withImage={true}
              withVideo={true}
              image='/GrupoDeMascara.png'
              title='1º dia - Check-in em Bonito'
              text='Acomodação na hospedagem. Você ainda pode aproveitar para conhecer os passeios urbanos da cidade, como o Projeto Jiboia e o Aquário de Bonito, descansar e jantar em um dos restaurantes de Bonito (atividades não incluídas no pacote, contratar à parte). Ao final do dia, pernoite.'
            />
            <CardRoteiroDoPacote
              withImage={true}
              withVideo={false}
              image='/imgDia2.png'
              title='2º dia Grutas de São Miguel + Estância Mimosa'
              text='Grutas de São Miguel: saída do hotel às 08h30. Pela manhã, um passeio repleto de surpresas em uma das principais grutas da cidade. Na sequência, visita e passeio nas Cachoeiras Estância Mimosa, com almoço incluso. Retorno e pernoite na hospedagem.'
            />
            <CardRoteiroDoPacote
              withImage={false}
              withVideo={true}
              image='/imgDia3.png'
              title='3º dia Flutuação + Balneário Nascente Azul'
              text='Nascente Azul: saída do hotel às 08h30. O dia inteiro de atrações com o Combo Flutuação + Balneário, incluindo delicioso almoço! Retorno e pernoite na hospedagem.'
            />
            <CardRoteiroDoPacote
              withImage={false}
              withVideo={false}
              image='/imgDia4.png'
              title='4º dia - Balneário do Sol'
              text='Saída do hotel às 08h30. O dia inteiro relaxando em meio às lindas paisagens do Rio Formoso + variedade de lazer para todas as idades. Check-out na hospedagem após o passeio.'
            />

          </div>

        </section>
        {/* =================================================================== */}
        {/* ============== SECTION TITULO: OPÇÕES DE HOSPEDAGEM =============== */}
        {/* =================================================================== */}
        <section className='container mx-auto xl:mx-10 pt-10 mt-14 '>
          <Title title='Opções de Hospedagem' />
          <div className='mt-8'>
            <CardOpcoesDeOspedagem
              title='Flat Ype Hotel'
              subTitle='Flat com cozinha equipada e apartamento mobiliado.'
              image='/imgFlat.png'
              price={930}
            />
            <CardOpcoesDeOspedagem
              title='Hotel Lucca'
              subTitle='Conforto e aconchego para você curtir o seu final de dia.'
              image='/imgHotelLucca.png'
              price={1280}
            />
          </div>
        </section>

        {/* =================================================================== */}
        {/* =================== SECTION TITULO: REGULAMENTO =================== */}
        {/* =================================================================== */}
        <section className='shadow-3xl bg-white container mx-auto xl:mx-10 py-10 px-10 mt-14 rounded-2xl'>
          <Regulation />
        </section>
      </main>
      {/* =================================================================== */}
      {/* ================== SECTION TITULO: COMO FUNCIONA ================== */}
      {/* =================================================================== */}
      <section className=' container mx-auto xl:mx-10 py-10 px-10 mt-14 rounded-2xl'>
        <div className='mb-10'>
          <Title title='Como funciona' />
          <h3 className='text-title'>Pacotes de Data Flexível</h3>
        </div>
        <div className='flex gap-3 justify-center'>
          <CardComoFunciona
            title='Solicitamos a reserva'
            text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil. '
            img='/cards/person1.svg'
          />
          <CardComoFunciona
            title='Personalizando o Pacote'
            text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil.  '
            img='/cards/person2.svg'
          />
          <CardComoFunciona
            title='Realizando o Pagamento'
            text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil. '
            img='/cards/person3.svg'
          />
          <CardComoFunciona
            title='Viajando ao Destino'
            text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil. '
            img='/cards/person4.svg'
          />
        </div>
      </section>
      {/* =================================================================== */}
      {/* =========== SECTION TITULO: BONITO UM LUGAR FANTASTICO ============ */}
      {/* =================================================================== */}

      <section className=' bg-white pb-[15vh]'>
        <div className='flex justify-center container mx-auto xl:mx-10 pt-16 px-10 mt-14 rounded-2xl'>
          <div className='w-[45%] '>
            <Image src={'/paradises.png'} width={'100%'} height={'100%'} layout='responsive' />
          </div>

          <div className='w-[60%] py-10 pl-20 '>
            <div>
              <Title title='Bonito: um lugar fantástico' />
              <br />
              <p className='text-text'>Localizado a 31 km da cidade de Bonito – MS, o passeio de flutuação da Nascente Azul é feita na nascente do Rio Bonito.</p>
              <br />
              <p className='text-text'>O acesso a flutuação da Nascente Azul é feito através de uma trilha contemplativa de aproximadamente 300 m até chegar à sala de equipamentos para a flutuação</p>
            </div>
            <div className='w-[80%] pt-10'>
              <img className='w-full' src="/logs/Logs.png" alt="" />
            </div>
          </div>
        </div>
      </section >

      {/* =================================================================== */}
      {/* =========== SECTION TITULO: RECARREGUE AS SUAS ENERGIAS ============ */}
      {/* =================================================================== */}
      <section className='flex justify-center relative h-[130vh] '>
        <div className='w-full absolute'>
          <Image src={'/background/reserveSeusPacote.png'} width={'100%'} height={'77%'} layout='responsive' />
        </div>
        <h5 className=' text-white absolute mt-[20vh] text-4xl font-pacifico'>Recarregue as suas energias</h5>
        <section className='min-w-[700px] absolute bg-green mt-[45vh] p-10 pb-12 px-14 text-center text-white rounded-lg'>
          <h3 className='text-2xl font-light mb-[50px]'>Reserve seu pacote</h3>
          <div className='grid grid-cols-2 gap-8 w-[50vw] min-w-[600px] max-w-700 max-h-400'>
            {/* inputs */}
            <section className='w-[80%] min-w-[400px] flex flex-wrap '>
              <input className='inputName w-[100%] max-w-[300px] rounded-md p-2 mb-2' type="text" />
              <input className='inpurEmail w-[100%] max-w-[300px] rounded-md p-2 my-2 pl-10' type="email" placeholder='email' />
              <div className='flex w-[100%] max-w-[300px]'>
                <div className='p-2 w-[35%] min-w-[70px] rounded-md my-2 bg-white'>
                  <div className='text-text flex px-1'>
                    <img className='mr-2' src="/icons/flagBrazil.svg" alt="DDD-Brasil" />
                    - 55
                  </div>
                </div>
                <input className='w-[70%] my-2 ml-1 rounded-md pl-2' type="text" placeholder='telefone' />
              </div>
            </section>
            {/* inputs */}
            <section className='text-text grid grid-cols-2 gap-2 w-[90%] min-w-[300px]'>
              <input className='inputCheckIn pl-10 w-[100%] h-10 rounded-md' type="text" />
              <input className='inputCheckOut pl-10 w-100%] h-10 rounded-md' type="text" />
              <input className='inputAdulto pl-10 w-[100%] h-10 rounded-md' type="text" />
              <input className='inputCrianca pl-10 w-[100%] h-10 rounded-md' type="text" />
              <p className='text-left mt-2 text-white'>idade da criança 1:</p>
              <input type="text" className='w-[3vw] h-10 rounded-md' />
            </section>
          </div>
          <button className='bg-orange px-12 py-3 rounded-md mt-10 text-title font-medium shadow-3xl'>Quero receber meu roteiro</button>
        </section>
      </section>
      {/* =================================================================== */}
      {/* =========== SECTION TITULO: NOSSAS AVALIACOES ============ */}
      {/* =================================================================== */}
      <section className='bg-white' >
        <div className='flex justify-between container mx-auto xl:mx-10 py-24 px-10 rounded-2xl'>
          <div>
            <h3 className='text-2xl text-title'>Nossas Avaliações</h3>
            <p>Somos uma das maiores avaliações para <br /> Bonito</p>
          </div>
          <div className='flex'>
            <img className='mr-12' src="/logs/travelers.svg" alt="" />
            <Avaliations />
          </div>
        </div>
      </section >
      {/* =================================================================== */}
      {/* ========================== FOOTER ========================== */}
      {/* =================================================================== */}
      <footer className='relative'>
        <Image src={'/background/ocean.png'} width={'100%'} height={'53%'} layout='responsive' />
        <div className='w-[70vw] gradient h-[60vh] px-10 pt-20 absolute top-[15vh] inset-0 mx-auto flex justify-center'>
          <div className='absolute top-[15vh] flex'>
            <section className='mr-16 '>
              <img src="/log.svg" alt="" />
            </section>
            <section className='text-white w-[30vw] text-xs'>
              <h3>Onde Estamos</h3>
              <br />
              <p>R. Cel. Pilad Rebuá, 1853 Centro - Bonito/MS</p>
              <br />
              <h3>Horário de Atendimento</h3>
              <br />
              <p>Segunda a Domingo das 07h00 às 19h00 e nosso fuso horário é 1 hora a menos que Brasília</p>
            </section>
            <section className='text-white ml-5'>
              <h4>Formas de pagamento:</h4>
              <div className='grid grid-cols-3 gap-2 mt-2'>
                <a href="#"><img src="/logs/american.png" alt="" /></a>
                <a href="#"><img src="/logs/elo.png" alt="" /></a>
                <a href="#"><img src="/logs/mastercard.png" alt="" /></a>
                <a href="#"><img src="/logs/visa.png" alt="" /></a>
                <a href="#"><img src="/logs/boleto.png" alt="" /></a>
                <a href="#"><img src="/logs/pix.png" alt="" /></a>
              </div>
              <p className='mt-4'>Parcelamos em <br />
                até 12x sem juros</p>
            </section>
          </div>
          <div className='w-[75%] h-[2px] bg-text mt-[30vh] absolute'></div>

          <div className='text-white mt-[34vh] w-[80%] flex justify-between relative'>
            <div className='text-sm leading-7 -ml-1'>
              <p className='text-[#DCDCDC]'>@ 2021 - Ygarapé Tour - Todos os direitos reservados</p>
              <p>CNPJ 86.744.935/0001-06</p>
            </div>
            <div className=''>
              <img src="/icons/websocorro.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div >


  )
}

export default Home
