import Image from "next/image"

interface CardOpcoesDeOspedagemProps {
    title: string
    subTitle: string
    image: string
    price: number
}

export default function CardOpcoesDeOspedagem({ title, subTitle, price, image }: CardOpcoesDeOspedagemProps) {
    return (
        <section className="relative shadow-3xl grid grid-cols-4 items-center bg-white rounded-xl mb-16">
            <div className="relative col-span-1 lg:col-span-4 h-[50vh] lg:h-[60vh] min-h-[300px] w-[100%]">
                <Image src={image} width='100%' height='100vh' layout="fill" />
            </div>
            <div className="col-span-2 lg:col-span-4  pl-14 lg:pl-2 pr-5 lg:pr-0 py-10 text-text ">
                <div className="leading-[8px] px-10 msm:px-2">
                    <h2 className="hover:cursor-pointer text-2xl leading-6 font-normal">{title}</h2>
                    <h3 className="hover:cursor-pointer text-sm ">{subTitle}</h3>
                </div>
                {/* ============ specifications ============ */}
                <div className="grid grid-cols-2 lg:col-span-4 px-10 msm:px-2">
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/bed.svg" alt="" />
                        <span>2 pessoas</span>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/wifi.svg" alt="" />
                        <span>Wifi</span>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/pool.svg" alt="" />
                        <span>Piscina</span>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/cup.svg" alt="" />
                        <span className="mx">Café da manhã</span>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/airCond.svg" alt="" />
                        <span>Ar condicionado</span>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/chair.svg" alt="" />
                        <span>Área de lazer</span>
                    </div>
                </div>

                <nav className="flex gap-6 mt-10 lg:px-10 md:px-0">
                    <a href="#" className="flex">
                        <img src="/iconPlay.svg" alt="" />
                        <p className="ml-4">Ver Vídeo</p>
                    </a>
                    <a href="#" className="flex">
                        <img src="/iconImage.svg" alt="" />
                        <p className="ml-4">Ver fotos</p>
                    </a>
                </nav>
            </div>
            <div className="col-span-1 lg:col-span-4 text-center pr-8 lg:pr:0 -mt-[5%] lg:my-4">
                <h4 className="text-text">Preço do pacote com essa acomodação</h4>
                <p className="flex items-center gap-3 justify-center">R$ <span className="text-4xl text-[#444444]">{price}</span></p>
                <button className='bg-orange lg:ml-3 py-3 px-12 mt-4 rounded-xl font-bold'>Quero Comprar</button>
            </div>
        </section>
    )
}