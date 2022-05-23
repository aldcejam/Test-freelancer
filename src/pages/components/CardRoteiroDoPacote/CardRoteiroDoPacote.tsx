import Image from "next/image";
import { useEffect, useState } from "react";
import Slide from "../Galery";
import Modal from 'react-modal'
import ModalForGalery from "../ModalForGalery";
import ModalForVideo from "../ModalForVideo";

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
        document.body.style.overflow = "hidden"
    }
    const handleCloseGalery = () => {
        setIsOpenGalery(false)
        document.body.style.overflow = "auto"
    }
    /* ====== Video ======== */
    const [isOpenVideo, setIsOpenVideo] = useState(false)
    
    const handleOpenVideo = () => {
        setIsOpenVideo(true)
        document.body.style.overflow = "hidden"
    }
    const handleCloseVideo = () => {
        setIsOpenVideo(false)
        document.body.style.overflow = "auto"
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
                    <ModalForGalery isOpenGalery={isOpenGalery} handleCloseGalery={handleCloseGalery} groupImages={groupImages}/>
                    {/* ======= Video ======= */}
                    <ModalForVideo handleCloseVideo={handleCloseVideo} isOpenVideo={isOpenVideo} linkIframeVideo={linkIframeVideo}/>
                </div>
            </div >
        </article >
    )
}