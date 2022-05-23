import Image from "next/image"
import { useState } from "react"
import Modal from 'react-modal'
import Slide from "../Galery"

interface CardOpcoesDeOspedagemProps {
    title: string
    subTitle: string
    image: string
    price: number
    groupImages: Array<{
        srcImg: string
        altImg?: string,
        titleImg?: string
    }>

    linkIframeVideo: string
}

export default function CardOpcoesDeOspedagem({ title, subTitle, price, image, groupImages, linkIframeVideo }: CardOpcoesDeOspedagemProps) {
    /* ====== Galery ======== */
    const [isOpenGalery, setIsOpenGalery] = useState(false)

    const handleOpenGalery = () => {
        setIsOpenGalery(true)
    }
    const handleCloseGalery = () => {
        setIsOpenGalery(false)
    }
    /* ====== Video ======== */
    const [isOpenVideo, setIsOpenVideo] = useState(false)

    const handleOpenVideo = () => {
        setIsOpenVideo(true)
    }
    const handleCloseVideo = () => {
        setIsOpenVideo(false)
    }
    return (
        <article className="relative shadow-3xl grid grid-cols-4 items-center bg-white rounded-xl mb-16">
            <div onClick={handleOpenGalery} className="relative col-span-1 lg:col-span-4 h-[100%] lg:h-[110%] min-h-[300px] w-[120%] max-w-[450px] lg:max-w-[100%] lg:w-[100%] rounded-lg ">
                <Image className="rounded-xl" src={image} layout="fill" />
            </div>
            <div className="col-span-2 lg:col-span-4  pl-10 minmlg:pl-14 py-10 text-text ">
                <div className="leading-[8px] -ml-[10px] minlg:pl-10">
                    <h2 className="hover:cursor-pointer text-2xl leading-6 font-semibold">{title}</h2>
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
                    <button className="flex" onClick={handleOpenVideo}>
                        <img src="/iconPlay.svg" alt="" />
                        <p className="ml-4">Ver Vídeo</p>
                    </button>
                    <button className="flex" onClick={handleOpenGalery}>
                        <img src="/iconImage.svg" alt="" />
                        <p className="ml-4">Ver fotos</p>
                    </button>

                    {/* ======= Galery ======= */}
                    <Modal
                        isOpen={isOpenGalery}
                        onRequestClose={handleCloseGalery}
                        className='absolute inset-x-0 mx-auto overflow-y-scroll  w-full h-full bg-[#fff] '>
                        <div
                            onClick={handleCloseGalery}
                            className="flex items-center w-full py-2 pl-2 bg-white cursor-pointer max-w-[1200px] mx-auto">
                            <div className="bg-[#e8e8e8] rounded-lg flex items-center mr-2 ">
                                <Image src="/icons/icon-close.svg" width={40} height={35} />
                            </div>
                            <div className="font-semibold">Galeria</div>
                        </div>
                        <Slide groupImages={groupImages} />
                    </Modal>
                    {/* ======= Video ======= */}
                    <Modal
                        isOpen={isOpenVideo}
                        onRequestClose={handleCloseVideo}
                        className='relative w-full h-full bg-[#000]'>
                        <div
                            onClick={handleCloseVideo}
                            className="flex items-center w-full py-2 pl-2 bg-white cursor-pointer">
                            <div className="bg-[#e8e8e8] rounded-lg flex items-center mr-2 ">
                                <Image src="/icons/icon-close.svg" width={40} height={35} />
                            </div>
                            <div className="font-semibold">Video</div>
                        </div>
                        <div className="flex items-center h-full w-full">
                            <iframe width="100%" height="100%" src={linkIframeVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                    </Modal>
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