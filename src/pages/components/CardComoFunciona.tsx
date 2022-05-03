interface CardComoFuncionaProps{
    title: string
    text: string
    img: string
}

export default function CardComoFunciona({title,text, img}: CardComoFuncionaProps){
    return(
        <div className="hover:cursor-pointer h-[470px] sm:h-[380px] bg-white pt-5  justify-center rounded-lg shadow-3xl max-w-[90vw]">
            <div className="flex justify-center p-4">
                <img  src={img} alt="" />
            </div>
            <div className="text-center text-text">
                <h3 className="py-2 text-xl px-4">{title}</h3>
                <p className="overflow-y-auto max-h-[200px] px-4">{text}</p>
            </div>
        </div>
    )
}

