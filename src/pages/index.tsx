import type { NextPage } from 'next'
import Avaliations from './components/Avaliations'
import CardComoFunciona from './components/CardComoFunciona'
import CardOpcoesDeOspedagem from './components/CardOpcoesDeOspedagem/CardOpcoesDeOspedagem'
import CardRoteiroDoPacote from './components/CardRoteiroDoPacote/CardRoteiroDoPacote'
import Regulation from './components/Regulation'
import Title from './components/Title'
import Image from 'next/image'
import MenuBurguer from './components/MenuBurguer'
import { useState } from 'react'

const Home: NextPage = () => {
  const [menuBurguerSituation, setMenuBurguerSituation] = useState(false)
  const activeMenuBurguer = () => {
    menuBurguerSituation ? setMenuBurguerSituation(false) : setMenuBurguerSituation(true)
  }
  return (
    <div className='bg-gray'>
      {/* =================================================================== */}
      {/* ===================== TOP WEB SITE DECORATION ===================== */}
      {/* =================================================================== */}
      <div className='relative h-[100vh]'>
        <Image src={'/background/bgHeader.png'} layout='fill' objectFit='cover' />
        <div className='flex justify-betweenn items-center absolute inset-x-0 container mx-auto mt-12 '>
          <div>
            <img src="/log.svg" alt="menu hamburguer" />
          </div>
          <div className='flex gap-3 absolute right-0'>
            <p className='text-white'>Menu</p>
            <img onClick={() => { activeMenuBurguer() }} className='w-5 cursor-pointer' src="/menuBurguer.svg" alt="" />
          </div>
          <MenuBurguer isActive={menuBurguerSituation} />
        </div>
        <div className='absolute text-white mt-[35vh] left-0 right-0 container mx-auto'>
          <p className='text-xl'>
            Um mergulho na <br />
            <span className='text-6xl -ml-[2px] font-medium font-workSans'>Natureza</span>
          </p>
        </div>
      </div>
      <main>
        {/* =================================================================== */}
        {/* ============= HEADER TITULO: PACOTE BONITO LUA DE MEL ============= */}
        {/* =================================================================== */}
        <section className='relative '>
          <div className='shadow-3xl container mx-auto -mt-[14vh] py-10 box msm:px-5 bg-white rounded-2xl'>
            <div>
              <h1 className='text-title text-3xl'>Pacote Bonito Lua de Mel</h1>
              <p className='text-text'>4 diárias + 5 passeios + Hotel</p>
            </div>
            <div className='flex lg:flex-wrap justify-center items-center gap-5 lg:container mt-10'>
              <section className='md:flex md:gap-5 sm:flex-wrap sm:px-0 px-7  py-5 text-sm minsm:border-2 border-grayBorder border-solid rounded-lg'>
                <ul className='flex justify-between sm:justify-center md:flex-wrap md:gap-0'>
                  <li className='w-[48%] min-w-[200px] md:pr-4 flex max-h-24 sm:w-[100%] sm:justify-center bg-grayBlue gap-3 pl-6 py-4 rounded-lg'>
                    <img className='w-8' src="/shoppingCart.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Esta oferta é válida até:</h3>
                      <p>
                        <strong className='font-normal'>
                          <time dateTime="2021-05-15">15/05/2021</time>
                        </strong>
                      </p>
                    </div>
                  </li>
                  <li className='w-[48%] min-w-[200px] md:pr-4 flex items-center pr-1 max-h-24  sm:w-[100%] sm:justify-center sm:mt-5 bg-grayBlue gap-3 pl-6 py-4 rounded-lg'>
                    <img className='w-8' src="/airplane.svg" alt="" />
                    <div className='leading-5 text-text'>
                      <h3>Período para Viagem:</h3>
                      <strong className='font-normal'><time dateTime="2021-05-15">15/05/2021</time> a <time dateTime="2021-12-18">18/12/2021</time></strong>
                    </div>
                  </li>
                </ul>
                <ul className='flex md:flex-wrap md:justify-center mt-6 md:mt-0 gap-4 md:gap-3'>
                  <li className='flex items-center sm:w-[100%] sm:justify-center pl-6 pr-3 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <div className='flex minssm:flex-wrap md:flex-nowrap justify-center items-center gap-4 min-w-[100px]'>
                      <img className='h-8' src="/padlock.svg" alt="iconPadlock" />
                      <p className='text-text'><em> Hospedagem <br />opcional</em></p>
                    </div>
                  </li>
                  <li className='flex items-center sm:w-[100%] sm:justify-center pl-6 pr-3 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <div className='flex minssm:flex-wrap md:flex-nowrap justify-center items-center gap-4 min-w-[100px]'>
                      <img className='iconHeader' src="/man.svg" alt="iconPadlock" />
                      <p className='text-text'><em>Passeios<br />e atrações</em></p>
                    </div>
                  </li>
                  <li className='flex items-center sm:w-[100%] sm:justify-center pl-6 pr-3 py-4 border-2 border-solid border-grayBorder rounded-md leading-4'>
                    <div className='flex minssm:flex-wrap md:flex-nowrap justify-center items-center gap-4 min-w-[100px]'>
                      <img className='iconHeader' src="/bus.svg" alt="iconPadlock" />
                      <p className='text-text'><em>Traslados para <br />Bonito e passeios</em></p>
                    </div>
                  </li>
                </ul>
              </section>
              <div className=' text-center mx-auto text-text'>
                <h4>a partir de</h4>
                <p className='text-2xl text-[#444444]'><strong className='font-normal'>10x de R$ <span className='text-5xl'>93,20</span></strong></p>
                <h4 className='text-lg'>ou 932,00 à vista</h4>
                <p className='text-sm'>(preço por pessoas)</p>
                <button className='bg-orange py-3 px-12 mt-4 rounded-xl text-title'>Quero Comprar</button>
              </div>
            </div>
          </div>
        </section>
        {/* =================================================================== */}
        {/* ================ SECTION TITULO: ROTEIRO DO PACOTE ================ */}
        {/* =================================================================== */}
        <section className='ssm:max-x-[70vw] shadow-3xl bg-white container mx-auto pt-10 pb-1 box mt-14 rounded-2xl'>
          <div className='msm:px-4'>
            <Title title='Roteiro do Pacote' />
          </div>
          <div className='mt-9'>
            <CardRoteiroDoPacote
              withGroupImages={true}
              groupImages={
                [
                  { srcImg: '/background/ocean.png' },
                  { srcImg: '/background/bgHeader.png' },
                  { srcImg: '/background/bgHeader.png' },
                  { srcImg: '/background/ocean.png' }
                ]
              }
              withVideo={true}
              image='/GrupoDeMascara.png'
              title='1º dia - Check-in em Bonito'
              text='Acomodação na hospedagem. Você ainda pode aproveitar para conhecer os passeios urbanos da cidade, como o Projeto Jiboia e o Aquário de Bonito, descansar e jantar em um dos restaurantes de Bonito (atividades não incluídas no pacote, contratar à parte). Ao final do dia, pernoite.'
            />
            <CardRoteiroDoPacote
              withGroupImages={true}
              groupImages={
                [
                  { srcImg: '/background/ocean.png' },
                  { srcImg: '/background/bgHeader.png' },
                  { srcImg: '/background/bgHeader.png' },
                  { srcImg: '/background/ocean.png' }
                ]
              }
              withVideo={false}
              image='/imgDia2.png'
              title='2º dia Grutas de São Miguel + Estância Mimosa'
              text='Grutas de São Miguel: saída do hotel às 08h30. Pela manhã, um passeio repleto de surpresas em uma das principais grutas da cidade. Na sequência, visita e passeio nas Cachoeiras Estância Mimosa, com almoço incluso. Retorno e pernoite na hospedagem.'
            />
            <CardRoteiroDoPacote
              withGroupImages={false}
              withVideo={true}
              image='/imgDia3.png'
              title='3º dia Flutuação + Balneário Nascente Azul'
              text='Nascente Azul: saída do hotel às 08h30. O dia inteiro de atrações com o Combo Flutuação + Balneário, incluindo delicioso almoço! Retorno e pernoite na hospedagem.'
            />
            <CardRoteiroDoPacote
              withGroupImages={false}
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
              groupImages={
                [
                  { srcImg: '/background/ocean.png' },
                  { srcImg: '/background/bgHeader.png' },
                  { srcImg: '/background/ocean.png' },
                  { srcImg: '/background/bgHeader.png' }
                ]
              }
            />
            <CardOpcoesDeOspedagem
              title='Hotel Lucca'
              subTitle='Conforto e aconchego para você curtir o seu final de dia.'
              image='/imgHotelLucca.png'
              price={1280}
              groupImages={
                [
                  { srcImg: '/background/bgHeader.png' },
                  { srcImg: '/background/ocean.png' },
                  { srcImg: '/background/ocean.png' },
                  { srcImg: '/background/bgHeader.png' }
                ]
              }
            />
          </div>
        </section>

        {/* =================================================================== */}
        {/* =================== SECTION TITULO: REGULAMENTO =================== */}
        {/* =================================================================== */}
        <section className='box shadow-3xl bg-white container mx-auto py-10 mt-14 rounded-2xl'>
          <Regulation />
        </section>
      </main>
      {/* =================================================================== */}
      {/* ================== SECTION TITULO: COMO FUNCIONA ================== */}
      {/* =================================================================== */}
      <section className='container mx-auto py-10 mt-14 rounded-2xl'>
        <div className='mb-10'>
          <Title title='Como funciona' />
          <h3 className='text-title'>Pacotes de Data Flexível</h3>
        </div>
        <div className='grid grid-cols-12 gap-4 justify-start'>
          <div className='col-span-12 minsm:col-span-6 minmd:col-span-4 minlg:col-span-3'>
            <CardComoFunciona
              title='Solicitamos a reserva'
              text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil. '
              img='/cards/person1.svg'
            />
          </div>
          <div className='col-span-12 minsm:col-span-6 minmd:col-span-4 minlg:col-span-3'>
            <CardComoFunciona
              title='Personalizando o Pacote'
              text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil.  '
              img='/cards/person2.svg'
            />
          </div>
          <div className='col-span-12 minsm:col-span-6 minmd:col-span-4 minlg:col-span-3'>
            <CardComoFunciona
              title='Realizando o Pagamento'
              text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil. '
              img='/cards/person3.svg'
            />
          </div>
          <div className='col-span-12 minsm:col-span-6 minmd:col-span-4 minlg:col-span-3'>
            <CardComoFunciona
              title='Viajando ao Destino'
              text='Rios de águas cristalinas, grutas, fauna e flora preservadas e considerado um dos principais destinos de ecoturismo do Brasil. '
              img='/cards/person4.svg'
            />
          </div>
        </div>
      </section>
      {/* =================================================================== */}
      {/* =========== SECTION TITULO: BONITO UM LUGAR FANTASTICO ============ */}
      {/* =================================================================== */}
      <section className=' bg-white pb-[15vh]'>
        <div className='grid grid-cols-12 ssm:px-0 gap-10 md:gap-0 justify-center container mx-auto pt-16 mt-14 rounded-2xl'>
          <div className='col-span-6 sm:px-0 md:col-span-12'>
            <Image src={'/paradises.png'} width={'100%'} height={'100%'} layout='responsive' objectFit='contain' />
          </div>

          <div className='flex flex-wrap gap-5 lg:gap-0 justify-center col-span-6 md:col-span-12 py-10 '>
            <div >
              <Title title='Bonito: um lugar fantástico' />
              <br />
              <p className='text-text'>Localizado a 31 km da cidade de Bonito – MS, o passeio de flutuação da Nascente Azul é feita na nascente do Rio Bonito.</p>
              <br />
              <p className='text-text'>O acesso a flutuação da Nascente Azul é feito através de uma trilha contemplativa de aproximadamente 300 m até chegar à sala de equipamentos para a flutuação</p>
            </div>
            <div className='relative h-[250px] lg:h-[200px] w-[100%] md:minmd:mt-4 mt-6 ssm:mt-0'>
              <Image src="/logs/Logs.png" layout='fill' objectFit='contain' />
            </div>
          </div>
        </div>
      </section >

      {/* =================================================================== */}
      {/* =========== SECTION TITULO: RECARREGUE AS SUAS ENERGIAS ============ */}
      {/* =================================================================== */}
      <section className='relative h-[130vh] min-h-[800px] msm:min-h-[900px] max-h-[1000px] md:max-h-[800px] flex justify-center '>
        <div className='w-full relative h-full'>
          <Image src={'/background/reserveSeusPacote.png'} layout='fill' objectFit='cover' />
        </div>
        <h5 className=' text-white absolute mt-[13vh] minssm:mt-[12vh] minmd:mt-[20vh]  text-4xl text-center font-pacifico '>Recarregue as suas energias</h5>
        <div className='bg-green absolute md:w-[100vw] bottom-[15vh] md:bottom-0 sm:mx-10 p-10 pb-12 px-14 md:px-5 text-center text-white rounded-lg'>
          <h3 className='text-2xl font-light mb-[50px]'>Reserve seu pacote</h3>
          <div className='grid grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center'>
            {/* inputs */}
            <div className='grid gap-2 max-w-[350px] text-black'>
              <input className='inputName inputFormulario' type="text" placeholder='Nome' />
              <input className='inpurEmail inputFormulario' type="email" placeholder='Email' />
              <div className='grid grid-cols-8 gap-2'>
                <div className='bg-white h-[40px] pl-3 py-3 rounded-md col-span-2'>
                  <img className='mr-2' src="/icons/flagBrazil.svg" alt="DDD-Brasil" />
                </div>
                <input className='rounded-md pl-3 col-span-6' type="number" placeholder='telefone' />
              </div>
            </div>
            {/* inputs */}
            <div className='grid grid-cols-2 gap-2 max-w-[350px] text-black'>
              <input className='inputCheckIn inputFormulario msm:col-span-2' type="text" placeholder='CheckIn' />
              <input className='inputCheckOut inputFormulario msm:col-span-2' type="text" placeholder='CheckOut' />
              <input className='inputAdulto inputFormulario msm:col-span-2' type="text" placeholder='Adultos' />
              <input className='inputCrianca inputFormulario msm:col-span-2' type="text" placeholder='Crianças' />
              <div className='col-span-2 msm:col-span-1 grid grid-cols-8 gap-2'>
                <p className='text-left text-white col-span-4 '>idade da criança 1:</p>
                <input type="text" className='rounded-md px-2 col-span-3 max-w-[50px] min-h-[40px]' placeholder='12' />
              </div>
            </div>
          </div>
          <button className='bg-orange px-12 py-3 rounded-md mt-10 text-title font-medium shadow-3xl'>Quero receber meu roteiro</button>
        </div>
      </section>
      {/* =================================================================== */}
      {/* =========== SECTION TITULO: NOSSAS AVALIACOES ============ */}
      {/* =================================================================== */}
      <section className='bg-white relative flex justify-center' >
        <div className='flex gap-10 lg:flex-wrap lg:gap-10 lg:justify-center justify-between py-[120px] container'>
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
      <footer className='relative footer minsm:max-h-[350px] md:bg-black'>
        <div className='relative footer footerItem md:hidden md:h-0'>
          <Image src={'/background/ocean.png'} layout='fill' objectFit='cover' />
        </div>
        <div className='colorGradient absolute md:block flex flex-wrap footer footerIten minsm:max-h-[330px] w-[80vw] max-w-[1100px] md:w-[100vw] px-[6vw] minmsm:pt-14 pt-20  top-[10vh] md:top-0 inset-0 mx-auto justify-center'>
          <div className='relative flex sm:flex-wrap justify-end sm:justify-start col-span-6 gap-7'>
            <div className='mr-10'>
              <img className='mr-0' src="/log.svg" alt="" />
            </div>
            <div className=' text-white text-xs leading-5'>
              <h3 className='font-medium'>Onde Estamos</h3>
              <address>R. Cel. Pilad Rebuá, 1853 Centro - Bonito/MS</address>
              <br />
              <h3 className='font-medium'>Horário de Atendimento</h3>
              <p className='break-words'><strong className='font-normal'>Segunda a Domingo das 07h00 às 19h00 e nosso fuso horário é 1 hora a menos que Brasília</strong></p>
            </div>
            <div className='flex flex-wrap  md:gap-2 text-white max-w-[170px]'>
              <h4 className='font-medium text-sm col-span-6 sm:col-span-8'>Formas de pagamento:</h4>
              <div className='flex flex-wrap justify-end col-span-6 sm:col-span-8 gap-2 -mt-2 md:mt-1'>
                <div className='flex gap-2'>
                  <a href="#"><img src="/logs/american.png" alt="" /></a>
                  <a href="#"><img src="/logs/elo.png" alt="" /></a>
                  <a href="#"><img src="/logs/mastercard.png" alt="" /></a>
                </div>
                <div className='flex gap-2'>
                  <a href="#"><img src="/logs/visa.png" alt="" /></a>
                  <a href="#"><img src="/logs/boleto.png" alt="" /></a>
                  <a href="#"><img src="/logs/pix.png" alt="" /></a>
                </div>
              </div>
              <p className='mt-2 col-span-6 sm:col-span-5 font-light text-sm leading-4 w-full'>Parcelamos em <br />
                até 12x sem juros</p>
            </div>
          </div>
          <div className='col-span-6 w-full h-[2px] bg-text mt-[1%] md:mt-[20px]'></div>

          <div className='flex w-full sm:flex-wrap justify-between gap-10 sm:gap-3 col-span-6 md:mt-[20px] minmlg:-mt-[3vh] text-white'>
            <div className='text-sm leading-7'>
              <p className='text-[#DCDCDC]'>@ 2021 - Ygarapé Tour - Todos os direitos reservados</p>
              <p>CNPJ 86.744.935/0001-06</p>
            </div>
            <div className=''>
              <img src="/icons/websocorro.svg" alt="logo-web-socorro" />
            </div>
          </div>
        </div>
      </footer>
    </div >


  )
}

export default Home
