export default function Avaliations(){
    return(
        <div className="flex sm:flex-wrap justify-center gap-14 msm:gap-4">
            <div className="col-span-4 flex flex-wrap justify-center w-32 ">
                <strong className="text-2xl font-normal">4,5</strong>
                 <img className="mt-2" src="/logs/tripadvisor.svg" alt="logo do tripadvisor" />
            </div>
            <div className="col-span-4 flex flex-wrap justify-center w-24">
                <strong className="text-2xl font-normal">4,7</strong>
                <img className="mt-2" src="/logs/google.svg" alt="logo do google" />
            </div>
            <div className="col-span-4 flex flex-wrap justify-center w-32">
                <strong className="text-2xl font-normal">4,8</strong>
                <img className="-mt-3 ssm:mt-2" src="/logs/facebook.svg" alt="logo do facebook" />
            </div>
        </div>
    )
}