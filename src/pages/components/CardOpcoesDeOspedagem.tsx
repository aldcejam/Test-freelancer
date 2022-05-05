import Image from "next/image"

interface CardOpcoesDeOspedagemProps {
    title: string
    subTitle: string
    image: string
    price: number
}

export default function CardOpcoesDeOspedagem({ title, subTitle, price, image }: CardOpcoesDeOspedagemProps) {
    return (
        <article className="relative shadow-3xl grid grid-cols-4 items-center bg-white rounded-xl mb-16">
            <div className="relative col-span-1 lg:col-span-4 h-[100%] lg:h-[110%] min-h-[300px] w-[120%] max-w-[450px] lg:max-w-[100%] lg:w-[100%] ">
                <Image src={image} width='100%' height='100%' layout="fill" />
            </div>
            <div className="col-span-2 lg:col-span-4  pl-14 py-10 text-text ">
                <div className="leading-[8px] -ml-[10px] minlg:pl-10">
                    <h2 className="hover:cursor-pointer text-2xl leading-6 font-normal">{title}</h2>
                    <h3 className="hover:cursor-pointer text-sm ">{subTitle}</h3>
                </div>
                {/* ============ specifications ============ */}
                <div className="grid grid-cols-2 msm:grid-cols-1 lg:col-span-4 -ml-[10px] minlg:pl-10">
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/bed.svg" alt="" />
                        <strong className="font-normal">2 pessoas</strong>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/wifi.svg" alt="" />
                        <strong className="font-normal">Wifi</strong>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/pool.svg" alt="" />
                        <strong className="font-normal">Piscina</strong>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/cup.svg" alt="" />
                        <strong className="font-normal">Café da manhã</strong>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/airCond.svg" alt="" />
                        <strong className="font-normal">Ar condicionado</strong>
                    </div>
                    <div className="flex gap-5 mt-4 items-center">
                        <img className="w-7" src="/icons/chair.svg" alt="" />
                        <strong className="font-normal">Área de lazer</strong>
                    </div>
                </div>

                <nav className="flex gap-6 mt-10 -ml-[10px] minlg:pl-10">
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
            <div className="col-span-1 lg:col-span-4 text-center pr-8 lg:pr:0 minsm:px-0 minsm:mx-6 px-10 msm:px-5 -mt-[5%] lg:my-4">
                <h4 className="text-text">Preço do pacote com essa acomodação</h4>
                <p className="flex items-center gap-3 justify-center">R$ <span className="text-4xl text-[#444444]">{price}</span></p>
                <button className='bg-orange lg:ml-3 py-3 px-12 mt-4 rounded-xl font-bold'>Quero Comprar</button>
            </div>
        </article>
    )
}