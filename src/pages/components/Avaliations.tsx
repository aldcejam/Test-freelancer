export default function Avaliations(){
    return(
        <div className="flex gap-20 msm:gap-4">
            <div className="col-span-4 flex flex-wrap justify-center w-20 ">
                <strong className="text-2xl font-normal">4,5</strong>
                 <img className="" src="/logs/tripadvisor.svg" alt="logo do tripadvisor" />
            </div>
            <div className="col-span-4 flex flex-wrap justify-center w-20">
                <strong className="text-2xl font-normal">4,7</strong>
                <img className="" src="/logs/google.svg" alt="logo do google" />
            </div>
            <div className="col-span-4 flex flex-wrap justify-center w-20">
                <strong className="text-2xl font-normal">4,8</strong>
                <img className="-mt-3" src="/logs/facebook.svg" alt="logo do facebook" />
            </div>
        </div>
    )
}