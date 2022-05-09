import Image from 'next/image';
import { motion } from "framer-motion"

interface SlideProps {
    groupImages: Array<{
        srcImg: string,
        altImg?: string,
        titleImg?:string
    }> | undefined
}
export default function Slide({ groupImages }: SlideProps) {

    return (
        <motion.div
            className="absolute inset-x-0 mx-auto items-center overflow-y-scroll h-screen overflow bg-black"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "tween" }}
        >
            <div className="flex-1 overflow-y-auto ">
                <div className="xl:content xl:mx-auto">
                    {
                        groupImages ?
                            groupImages.map((image) => {
                                return (
                                    <div key={image.srcImg} className="col-span-6 row-span-6 relative">
                                        <Image src={image.srcImg} alt={image.altImg} title={image.titleImg} width={1200} height={700} layout="responsive" objectFit="cover" quality={100} />
                                    </div>
                                )
                            }) : null
                    }

                </div>
            </div>
        </motion.div>

    )
}