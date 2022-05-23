import Image from "next/image";
import { useState } from "react";
import Slide from "../Galery";
import Modal from 'react-modal'

interface CardRoteiroDoPacoteProps {
    withGroupImages: boolean;
    withVideo: boolean;
    title: string
    text: string
    image: string;
    groupImages?: Array<{
        srcImg: string
        altImg?: string,
        titleImg?: string
    }>

    linkIframeVideo?: string
}

export default function CardRoteiroDoPacote({ title, text, image, withGroupImages, withVideo, groupImages, linkIframeVideo }: CardRoteiroDoPacoteProps) {
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
        <article className="hover:cursor-pointer bg-white overflow-hidden flex md:flex-wrap md:justify-center gap-8 mb-14 rounded-xl shadow-3xl">
            <div onClick={handleOpenGalery} className="hover:cursor-pointer relative h-[300px] w-full minmd:w-[40%]">
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="w-[70%] md:w-[90%] pb-7 pr-5 minlg:pr-10 minmd:py-10 leading-4">
                <h2 className="text-xl text-text font-semibold">{title}</h2>
                <p className=" text-text mt-3">{text}</p>
                <div className="flex mt-8 gap-8">
                    {
                        withVideo ?
                            <a onClick={handleOpenVideo} href="#" className="flex items-center">
                                <img src="/iconPlay.svg" alt="" />
                                <span className="ml-4">Ver Vídeo</span>
                            </a>
                            : null
                    }
                    {
                        withGroupImages ?
                            <div onClick={handleOpenGalery} className="flex items-center">
                                <img src="/iconImage.svg" alt="" />
                                <span className="ml-4">Ver fotos</span>
                            </div>
                            : null
                    }
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

                </div>
            </div >
        </article >
    )
}