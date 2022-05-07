import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

interface SlideProps {
    groupImages: Array<{ srcImg: string }> | undefined
}
export default function Slide({ groupImages }: SlideProps) {

    return (
        <AwesomeSlider bullets={true} animation="cubeAnimation">
            {
                groupImages ?
                    groupImages.map((image) => {
                        return (
                            <div key={image.srcImg}>
                                <Image src={image.srcImg} layout='fill' objectFit='contain' />
                            </div>
                        )
                    }) : null
            }

        </AwesomeSlider>
    )
}