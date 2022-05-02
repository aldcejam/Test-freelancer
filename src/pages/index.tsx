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
        <Image src={'/background/bgHeader.png'} layout='fill' objectFit='cover' />
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
      <section className='relative '>
          <div className='shadow-3xl container mx-auto -mt-[14vh] py-10 px-10 bg-white rounded-2xl'>
            <div>
              <h1 className='text-title text-3xl'>Pacote Bonito Lua de Mel</h1>
              <p className='text-text'>4 diárias + 5 passeios + Hotel</p>
            </div>
            <div className='flex lg:flex-wrap justify-center gap-5 lg:container mt-10'>
              <section className='md:flex md:gap-5 sm:flex-wrap py-5 px-7 sm:px-2 text-sm border-2 border-grayBorder border-solid rounded-lg'>
                <ul className='flex gap-6 md:flex-wrap justify-center md:gap-0'>
                  <li className='flex  max-h-28 bg-grayBlue gap-3 px-6 py-4 pr-14 rounded-lg'>
                    <img className='iconHeader' src="/shoppingCart.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Esta oferta é válida até:</h3>
                      <p>
                        <strong className='font-normal'>
                          <time dateTime="2021-05-15">15/05/2021</time>
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li className='flex max-h-36 sm:mt-5 bg-grayBlue gap-3 px-6 py-4 pr-14 rounded-lg'>
                    <img className='iconHeader' src="/airplane.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Período para Viagem:</h3>
                      <strong className='font-normal'><time dateTime="2021-05-15">15/05/2021</time> a <time dateTime="2021-12-18">18/12/2021</time></strong>
                    </div>
                  </li>
                </ul>
                <ul className='flex md:flex-wrap md:justify-center mt-6 gap-6 md:gap-4'>
                  <li className='flex items-center sm:w-[220px] px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <div className='flex flex-wrap justify-center items-center gap-4 min-w-[100px]'>
                      <img className='iconPadLockHeader' src="/padlock.svg" alt="iconPadlock" />
                      <p className='text-text'><em> Hospedagem <br />opcional</em></p>
                    </div>
                  </li>
                  <li className='flex items-center sm:w-[220px] px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <div className='flex flex-wrap justify-center items-center gap-4 min-w-[100px]'>
                      <img className='iconHeader' src="/man.svg" alt="iconPadlock" />
                      <p className='text-text'><em>Passeios<br />e atrações</em></p>
                    </div>
                  </li>
                  <li className='flex items-center sm:w-[220px] px-6 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-4 min-w-[100px]'>
                      <img className='iconHeader' src="/bus.svg" alt="iconPadlock" />
                      <p className='text-text'><em>Traslados para <br />Bonito e passeios</em></p>
                    </div>
                  </li>
                </ul>
              </section>
              <aside className=' text-center mx-auto text-text'>
                <h4>a partir de</h4>
                <p className='text-2xl text-[#444444]'><strong className='font-normal'>10x de R$ <span className='text-5xl'>93,20</span></strong></p>
                <h4 className='text-lg'>ou 932,00 à vista</h4>
                <p className='text-sm'>(preço por pessoas)</p>
                <button className='bg-orange py-3 px-12 mt-4 rounded-xl text-title'>Quero Comprar</button>
              </aside>
            </div>
          </div>
        </section>
        {/* =================================================================== */}
        {/* ================ SECTION TITULO: ROTEIRO DO PACOTE ================ */}
        {/* =================================================================== */}
        <section className='ssm:max-x-[70vw] shadow-3xl bg-white container mx-auto pt-10 pb-1 px-10 msm:px-0 mt-14 rounded-2xl'>
          <div className='msm:px-4'>
            <Title title='Roteiro do Pacote' />
          </div>
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
      <section className='container mx-auto py-10 md:px-0 mt-14 rounded-2xl'>
        <div className='mb-10'>
          <Title title='Como funciona' />
          <h3 className='text-title'>Pacotes de Data Flexível</h3>
        </div>
        <div className='flex flex-wrap gap-3 justify-center md:justify-start'>
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
            <Image src={'/paradises.png'} width={'100%'} height={'100%'} layout='responsive' objectFit='cover' />
          </div>

          <div className='grid grid-cols-12 col-span-6 md:col-span-12 py-10 '>
            <div className='col-span-12 sm:col-span-12'>
              <Title title='Bonito: um lugar fantástico' />
              <br />
              <p className='text-text'>Localizado a 31 km da cidade de Bonito – MS, o passeio de flutuação da Nascente Azul é feita na nascente do Rio Bonito.</p>
              <br />
              <p className='text-text'>O acesso a flutuação da Nascente Azul é feito através de uma trilha contemplativa de aproximadamente 300 m até chegar à sala de equipamentos para a flutuação</p>
            </div>
            <div className='col-span-12 relative h-[200px] '>
              <Image src="/logs/Logs.png" width={'100%'} height={'100px'} layout='fill' />
            </div>
          </div>
        </div>
      </section >

      {/* =================================================================== */}
      {/* =========== SECTION TITULO: RECARREGUE AS SUAS ENERGIAS ============ */}
      {/* =================================================================== */}
      <section className='relative h-[130vh] min-h-[900px] max-h-[1000px] flex justify-center'>
        <div className='w-full relative h-[100%] '>
          <Image src={'/background/reserveSeusPacote.png'} width={'100%'} height={'60vh'} layout='fill' objectFit='cover'/>
        </div>
        <h5 className=' text-white absolute mt-[20vh] text-4xl font-pacifico'>Recarregue as suas energias</h5>
        <div className='bg-green absolute mt-[45vh] msm:w-[90vw] sm:mx-10 p-10 pb-12 px-14 md:px-5 text-center text-white rounded-lg'>
          <h3 className='text-2xl font-light mb-[50px]'>Reserve seu pacote</h3>
          <div className='flex md:flex-wrap justify-center gap-8'>
            {/* inputs */}
            <div className='grid grid-cols-10 gap-2 max-w-[350px] lg:col-span-2'>
              <input className='inputName col-span-10 rounded-md p-2 mb-2' type="text" />
              <input className='inpurEmail col-span-10 rounded-md p-2 mb-2 pl-10' type="email" placeholder='email' />
              <div className='col-span-10 grid grid-cols-12 gap-3'>
                <div className='col-span-4 ssm:col-span-5 flex rounded-md bg-white text-text px-2 py-2 '>
                  <img className='mr-2' src="/icons/flagBrazil.svg" alt="DDD-Brasil" />
                  - 55
                </div>
                <input className='col-span-8 ssm:col-span-7 rounded-md pl-2 py-2' type="text" placeholder='telefone' />
              </div>
            </div>
            {/* inputs */}
            <div className='text-text grid grid-cols-2 gap-2 max-w-[300px] col-span-1 lg:col-span-2'>
              <input className='inputCheckIn pl-10 rounded-md' type="text" placeholder='CheckIn' />
              <input className='inputCheckOut pl-10 rounded-md' type="text" placeholder='CheckOut' />
              <input className='inputAdulto pl-9 h-10 rounded-md' type="text" placeholder='Adultos' />
              <input className='inputCrianca pl-9 h-10 rounded-md' type="text" placeholder='Crianças' />
              <p className='text-left mt-2 text-white'>idade da criança 1:</p>
              <input type="text" className='w-[3vw] min-w-[40px] h-10 rounded-md px-2' placeholder='12' />
            </div>
          </div>
          <button className='bg-orange px-12 py-3 rounded-md mt-10 text-title font-medium shadow-3xl'>Quero receber meu roteiro</button>
        </div>
      </section>
      {/* =================================================================== */}
      {/* =========== SECTION TITULO: NOSSAS AVALIACOES ============ */}
      {/* =================================================================== */}
      <section className='bg-white relative flex justify-center' >
        <div className='flex lg:flex-wrap lg:gap-10 lg:justify-center justify-between py-[17vh] container'>
          <div className='col-span-2 md:col-span-8'>
            <h3 className='text-2xl text-title'>Nossas Avaliações</h3>
            <p>Somos uma das maiores avaliações para <br /> Bonito</p>
          </div>
          <div className='flex sm:flex-wrap justify-center gap-10 col-span-6 md:col-span-8 '>
            <img className='2-20' src="/logs/travelers.svg" />
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
        <div className='relative h-[100vh] md:h-[160vh] min-h-[500px] '>
          <Image src={'/background/ocean.png'} width={'100%'} height={'100%'} layout='fill' objectFit='cover' />
        </div>
        <div className='colorGradient absolute grid grid-cols-6 w-[70vw] msm:w-[90vw] h-[80vh] min-h-[420px] sm:h-[110vh] px-[6vw] pt-20 md:pt-5 top-[15vh] inset-0 mx-auto justify-center'>
          <div className='grid grid-cols-5 col-span-6 md:gap-7'>
            <div className='col-span-1 sm:col-span-2'>
              <img className='mr-0' src="/log.svg" alt="" />
            </div>
            <div className='text-white text-xs col-span-2 sm:col-span-3'>
              <h3 className='font-medium'>Onde Estamos</h3>
              <br />
              <address>R. Cel. Pilad Rebuá, 1853 Centro - Bonito/MS</address>
              <br />
              <h3 className='font-medium'>Horário de Atendimento</h3>
              <br />
              <p className='break-words'><strong className='font-normal'>Segunda a Domingo das 07h00 às 19h00 e nosso fuso horário é 1 hora a menos que Brasília</strong></p>
            </div>
            <div className='grid grid-cols-8 col-span-2 sm:col-span-6 ml-[6vw] md:gap-2 text-white  '>
              <h4 className='font-medium col-span-6 sm:col-span-8'>Formas de pagamento:</h4>
              <div className='grid grid-cols-3 col-span-6 sm:col-span-8 gap-2 mt-2'>
                <a href="#"><img src="/logs/american.png" alt="" /></a>
                <a href="#"><img src="/logs/elo.png" alt="" /></a>
                <a href="#"><img src="/logs/mastercard.png" alt="" /></a>
                <a href="#"><img src="/logs/visa.png" alt="" /></a>
                <a href="#"><img src="/logs/boleto.png" alt="" /></a>
                <a href="#"><img src="/logs/pix.png" alt="" /></a>
              </div>
              <p className='mt-2 col-span-6 sm:col-span-5'>Parcelamos em <br />
                até 12x sem juros</p>
            </div>
          </div>
          <div className='col-span-6 w-[100%] h-[2px] bg-text mt-[1vh] '></div>

          <div className='flex sm:flex-wrap justify-between col-span-6 text-white'>
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
