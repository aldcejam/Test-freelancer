import Image from 'next/image'
import Modal from 'react-modal'
import Slide from './Galery'

interface ModalForGaleryProps{
    isOpenGalery: boolean
    handleCloseGalery: ()=>void
    groupImages?: Array<{
        srcImg: string
        altImg?: string,
        titleImg?: string
    }>
}

export default function ModalForGalery({handleCloseGalery,isOpenGalery,groupImages}:ModalForGaleryProps) {
    return (
        <Modal
            isOpen={isOpenGalery}
            onRequestClose={handleCloseGalery}
            className='absolute bg-white inset-x-0 mx-auto overflow-y-scroll  w-full h-full'>
            <div
                onClick={handleCloseGalery}
                className="flex items-center bg-white w-full py-2 pl-2  cursor-pointer max-w-[1200px] mx-auto">
                <div 
                className="bg-[#e8e8e8] rounded-lg flex items-center mr-2 ">
                    <Image src="/icons/icon-close.svg" width={40} height={35} />
                </div>
                <div className="font-semibold">Galeria</div>
            </div>
            <Slide groupImages={groupImages} />
        </Modal>
    )
}