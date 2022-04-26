interface CardRoteiroDoPacoteProps {
    withImage: boolean;
    withVideo: boolean;
    title: string
    text: string
    image: string;

}

export default function CardRoteiroDoPacote({ title, text, image, withImage, withVideo, }: CardRoteiroDoPacoteProps) {
    return (
        <article className="hover:cursor-pointer flex gap-8 mb-14 lg:block lg:mx-[20%]">
            <div >
                <img className="" src={image} alt="" />
            </div>
            <div className="w-[70%] leading-4">
                <h2 className="text-xl">{title}</h2>
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