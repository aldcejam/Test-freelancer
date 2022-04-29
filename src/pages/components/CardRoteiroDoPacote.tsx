import Image from "next/image";

interface CardRoteiroDoPacoteProps {
    withImage: boolean;
    withVideo: boolean;
    title: string
    text: string
    image: string;

}

export default function CardRoteiroDoPacote({ title, text, image, withImage, withVideo, }: CardRoteiroDoPacoteProps) {
    return (
        <article className="hover:cursor-pointer flex md:flex-wrap md:justify-center gap-8 mb-14">
            <div className="w-[47%] md:w-[90%] lg:w-[70%] ">
                <Image src={image} width='100%' height='55%' layout="responsive"/>
            </div>
            <div className="w-[70%] leading-4">
                <h2 className="text-xl text-text">{title}</h2>
                <p className=" text-text mt-3">{text}</p>
                <div className="flex mt-8 gap-8">
                    {
                        withVideo ? 
                        <a href="#" className="flex items-center">
                            <img src="/iconPlay.svg" alt="" />
                            <p className="ml-4">Ver Vídeo</p>
                        </a>
                        : null
                    }
                    {
                        withImage ? 
                        <a href="#" className="flex items-center">
                            <img src="/iconImage.svg" alt="" />
                            <p className="ml-4">Ver fotos</p>
                        </a>
                        : null
                    }

                </div>
            </div>
        </article>
    )
}