import { memo } from "react"

interface CardComoFuncionaProps{
    title: string
    text: string
    img: string
}

export default function CardComoFunciona({title,text, img}: CardComoFuncionaProps){
    return(
        <div className="w-[300px] p-10 bg-white justify-center rounded-lg shadow-3xl">
            <div className="flex justify-center p-4">
                <img  src={img} alt="" />
            </div>
            <div className="text-center text-text">
                <h3 className="py-2 text-xl">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
