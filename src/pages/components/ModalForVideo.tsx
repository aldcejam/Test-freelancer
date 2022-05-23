import Image from 'next/image'
import Modal from 'react-modal' 

interface ModalForVideoProps {
    isOpenVideo: boolean
    handleCloseVideo: () => void
    linkIframeVideo: string | undefined
}

export default function ModalForVideo({ handleCloseVideo, isOpenVideo, linkIframeVideo}: ModalForVideoProps) {
    return (
        <Modal
            isOpen={isOpenVideo}
            onRequestClose={handleCloseVideo}
            className='relative w-full h-[92vh]'>
            <div
                onClick={handleCloseVideo}
                className="flex items-center w-full py-2 pl-2 bg-white cursor-pointer">
                <div className="bg-[#e8e8e8] rounded-lg flex items-center mr-2 border-2 ">
                    <Image src="/icons/icon-close.svg" width={40} height={35} />
                </div>
                <div className="font-semibold">Video</div>
            </div>
            <div className="flex items-center h-full w-full">
                <iframe width="100%" height="100%" src={linkIframeVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </Modal>
    )
}