import Image from "next/image";
import { useState } from "react";
import Slide from "../Slide";
import Modal from 'react-modal'

interface CardRoteiroDoPacoteProps {
    withGroupImages: boolean;
    withVideo: boolean;
    title: string
    text: string
    image: string;
    groupImages?: Array<{ srcImg: string }>
}

export default function CardRoteiroDoPacote({ title, text, image, withGroupImages, withVideo, groupImages }: CardRoteiroDoPacoteProps) {
    const [isOpenGalery, setIsOpenGalery] = useState(false)

    const handleOpenGalery = () => {
        setIsOpenGalery(true)
    }
    const handleCloseGalery = () => {
        setIsOpenGalery(false)
    }
    return (
        <article className="hover:cursor-pointer bg-white overflow-hidden flex md:flex-wrap md:justify-center gap-8 mb-14 rounded-xl shadow-3xl">
            <div className="relative h-[300px] w-full minmd:w-[40%]">
                <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="w-[70%] md:w-[90%] pb-7 pr-5 minlg:pr-10 minmd:py-10 leading-4">
                <h2 className="text-xl text-text font-semibold">{title}</h2>
                <p className=" text-text mt-3">{text}</p>
                <div className="flex mt-8 gap-8">
                    {
                        withVideo ?
                            <a href="#" className="flex items-center">
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
                    <Modal
                    
                        isOpen={isOpenGalery}
                        onRequestClose={handleCloseGalery}
                        className='relative w-full h-full bg-[#000]'>
                        <div
                            onClick={handleCloseGalery}
                            className="absolute z-50 top-5 right-5 cursor-pointer w-10">
                            <img src="/icons/close.svg" alt="" />
                        </div>
                        <div className="flex items-center h-full">
                            <Slide groupImages={groupImages} />
                        </div>
                    </Modal>

                </div>
            </div>
        </article>
    )
}