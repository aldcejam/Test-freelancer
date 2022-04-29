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
      <div className='relative h-[100vh]'>
        <Image src={'/background/bgHeader.png'} layout='fill' />
        <div className='flex justify-betweenn items-center absolute inset-x-0 container mx-auto mt-14 '>
          <div>
            <img src="/log.svg" alt="" />
          </div>
          <div className='flex gap-3 absolute right-0'>
            <p className='text-white'>Menu</p>
            <img className='w-5' src="/menuBurguer.svg" alt="" />
          </div>
        </div>
        <div className='absolute text-white mt-[35vh] left-0 right-0 container mx-auto'>
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
        <section className='relative'>
          <div className='shadow-3xl flex flex-wrap  gap-9 items-center container mx-auto -mt-[14vh] py-10 px-10 bg-white rounded-2xl'>
            <div>
              <Title title='Pacote Bonito Lua de Mel' />
              <p className='text-text'>4 diárias + 5 passeios + Hotel</p>
            </div>
            <div className='lg:flex justify-center lg:container'>
              <section className='md:flex md:gap-5 sm:flex-wrap py-5 px-7 border-2 border-grayBorder border-solid rounded-lg'>
                <ul className='flex gap-6 md:flex-wrap items-center justify-center md:gap-0'>
                  <li className='flex  max-h-28 bg-grayBlue gap-3 px-6 py-4 pr-14 rounded-lg'>
                    <img className='iconHeader' src="/shoppingCart.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Esta oferta é válida até:</h3>
                      <p>15/05/2021</p>
                    </div>
                  </li>
                  <li className='flex max-h-36 sm:mt-5 bg-grayBlue gap-3 px-6 py-4 pr-14 rounded-lg'>
                    <img className='iconHeader' src="/airplane.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Período para Viagem:</h3>
                      <p>15/05/2021 a 18/12/2021</p>
                    </div>
                  </li>
                </ul>
                <ul className='flex md:flex-wrap md:justify-center mt-6 gap-6'>
                  <li className='flex flex-wrap justify-center items-center gap-4 px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <img className='iconPadLockHeader' src="/padlock.svg" alt="iconPadlock" />
                    <p className='text-text'>Hospedagem <br />opcional</p>
                  </li>
                  <li className='flex flex-wrap justify-center gap-4 px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <img className='iconHeader' src="/man.svg" alt="iconPadlock" />
                    <p className='text-text'>Passeios<br />e atrações</p>
                  </li>
                  <li className='flex flex-wrap justify-center gap-4 px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <img className='iconHeader' src="/bus.svg" alt="iconPadlock" />
                    <p className='text-text'>Traslados para <br />Bonito e passeios</p>
                  </li>
                </ul>
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
        </section>
        {/* =================================================================== */}
        {/* ================ SECTION TITULO: ROTEIRO DO PACOTE ================ */}
        {/* =================================================================== */}
        <section className='ssm:max-x-[70vw] shadow-3xl bg-white container mx-auto  pt-10 pb-1  px-10 mt-14 rounded-2xl'>
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
        <section className='container mx-auto pt-10 mt-14 '>
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
        <section className='shadow-3xl bg-white container mx-auto  py-10 px-10 mt-14 rounded-2xl'>
          <Regulation />
        </section>
      </main>
      {/* =================================================================== */}
      {/* ================== SECTION TITULO: COMO FUNCIONA ================== */}
      {/* =================================================================== */}
      <section className=' container mx-auto py-10 px-10 mt-14 rounded-2xl'>
        <div className='mb-10'>
          <Title title='Como funciona' />
          <h3 className='text-title'>Pacotes de Data Flexível</h3>
        </div>
        <div className='flex flex-wrap gap-3 justify-center'>
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
        <div className='grid grid-cols-12 ssm:px-0 gap-10 md:gap-0 justify-center container mx-auto pt-16 mt-14 rounded-2xl'>
          <div className='col-span-6 sm:px-0 md:col-span-12'>
            <Image src={'/paradises.png'} width={'100%'} height={'100%'} layout='responsive' />
          </div>

          <div className='grid grid-cols-12 col-span-6 md:col-span-12 py-10 '>
            <div className='col-span-12 sm:col-span-12'>
              <Title title='Bonito: um lugar fantástico' />
              <br />
              <p className='text-text'>Localizado a 31 km da cidade de Bonito – MS, o passeio de flutuação da Nascente Azul é feita na nascente do Rio Bonito.</p>
              <br />
              <p className='text-text'>O acesso a flutuação da Nascente Azul é feito através de uma trilha contemplativa de aproximadamente 300 m até chegar à sala de equipamentos para a flutuação</p>
            </div>
            <div className='col-span-12  sm:col-span-12 pt-10'>
              <img className='w-full' src="/logs/Logs.png" alt="" />
            </div>
          </div>
        </div>
      </section >

      {/* =================================================================== */}
      {/* =========== SECTION TITULO: RECARREGUE AS SUAS ENERGIAS ============ */}
      {/* =================================================================== */}
      <section className='flex justify-center relative h-[130vh] '>
        <div className='w-full absolute h-[130vh]'>
          <Image src={'/background/reserveSeusPacote.png'} width={'100%'} height={'60vh'} layout='responsive' />
        </div>
        <h5 className=' text-white absolute mt-[20vh] text-4xl font-pacifico'>Recarregue as suas energias</h5>
        <div className='absolute w-[65vw] max-w-[90vw] sm:w-[80vw] bg-green mt-[45vh] p-10 pb-12 px-14 text-center text-white rounded-lg'>
          <h3 className='text-2xl font-light mb-[50px]'>Reserve seu pacote</h3>
          <div className='flex flex-wrap justify-center gap-8 '>
            {/* inputs */}
            <div className='grid grid-cols-10 gap-2 max-w-[350px]'>
              <input className='inputName col-span-10 rounded-md p-2 mb-2' type="text" />
              <input className='inpurEmail col-span-10 rounded-md p-2 my-2 pl-10' type="email" placeholder='email' />
              <div className='flex p-2 col-span-3 min-w-[70px]  rounded-md my-2 bg-white text-text px-2'>

                <img className='mr-2' src="/icons/flagBrazil.svg" alt="DDD-Brasil" />
                - 55
              </div>
              <input className='my-2 ml-1 col-span-7 rounded-md pl-2' type="text" placeholder='telefone' />
            </div>
            {/* inputs */}
            <div className='text-text grid grid-cols-2 gap-2 max-w-[300px]'>
              <input className='inputCheckIn pl-10 rounded-md' type="text" />
              <input className='inputCheckOut pl-10 rounded-md' type="text" />
              <input className='inputAdulto pl-10 h-10 rounded-md' type="text" />
              <input className='inputCrianca pl-10 h-10 rounded-md' type="text" />
              <p className='text-left mt-2 text-white'>idade da criança 1:</p>
              <input type="text" className='w-[3vw] min-w-[40px] h-10 rounded-md' />
            </div>
          </div>
          <button className='bg-orange px-12 py-3 rounded-md mt-10 text-title font-medium shadow-3xl'>Quero receber meu roteiro</button>
        </div>
      </section>
      {/* =================================================================== */}
      {/* =========== SECTION TITULO: NOSSAS AVALIACOES ============ */}
      {/* =================================================================== */}
      <section className='bg-white' >
        <div className='grid grid-cols-8 lg:flex-wrap lg:justify-center lg:gap-10 justify-between container mx-auto py-24 px-10 rounded-2xl'>
          <div className='col-span-2 md:col-span-8'>
            <h3 className='text-2xl text-title'>Nossas Avaliações</h3>
            <p>Somos uma das maiores avaliações para <br /> Bonito</p>
          </div>
          <div className='flex justify-between col-span-6 md:col-span-8 '>
            <div className=''>
              <img className='mr-12 ' src="/logs/travelers.svg" />
            </div>
            <div className=''>
              <Avaliations />
            </div>
          </div>
        </div>
      </section >
      {/* =================================================================== */}
      {/* ========================== FOOTER ========================== */}
      {/* =================================================================== */}
      <footer className='relative h-[70vh]'>
        <div className='h-[60vh]'>
          <Image className='absolute' src={'/background/ocean.png'} width={'100%'} height={'100%'} layout='responsive' />
        </div>
        <div className='absolute grid grid-cols-6 w-[70vw] lg:w-[90vw] gradient h-[70vh] sm:h-[100vh] px-[6vw] pt-20 md:pt-5 top-[15vh] inset-0 mx-auto justify-center'>
          <div className='grid grid-cols-5 col-span-6 top-[10vh] ml-[2vw] md:gap-7'>
            <div className='col-span-1 sm:col-span-2'>
              <img className='mr-0' src="/log.svg" alt="" />
            </div>
            <div className='text-white text-xs col-span-2 sm:col-span-3'>
              <h3>Onde Estamos</h3>
              <br />
              <p>R. Cel. Pilad Rebuá, 1853 Centro - Bonito/MS</p>
              <br />
              <h3>Horário de Atendimento</h3>
              <br />
              <p className='break-words'>Segunda a Domingo das 07h00 às 19h00 e nosso fuso horário é 1 hora a menos que Brasília</p>
            </div>
            <div className='grid grid-cols-8 col-span-2 sm:col-span-6 ml-[6vw] gap-2 text-white  '>
              <h4 className='col-span-6 sm:col-span-8'>Formas de pagamento:</h4>
              <div className='grid grid-cols-3 col-span-6 sm:col-span-8 gap-2 mt-2'>
                <a href="#"><img src="/logs/american.png" alt="" /></a>
                <a href="#"><img src="/logs/elo.png" alt="" /></a>
                <a href="#"><img src="/logs/mastercard.png" alt="" /></a>
                <a href="#"><img src="/logs/visa.png" alt="" /></a>
                <a href="#"><img src="/logs/boleto.png" alt="" /></a>
                <a href="#"><img src="/logs/pix.png" alt="" /></a>
              </div>
              <p className='mt-4 col-span-6 sm:col-span-3'>Parcelamos em <br />
                até 12x sem juros</p>
            </div>
          </div>
          <div className='col-span-5 w-[55vw] lg:w-[70vw] h-[2px] bg-text mt-[1vh] '></div>

          <div className=' flex justify-between col-span-5 text-white'>
            <div className='text-sm leading-7'>
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
