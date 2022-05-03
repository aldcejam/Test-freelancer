import Link from "next/link"

type MenuBurguer = {
    isActive: boolean
}
const styleBotton = 'flex items-center opacity-0 w-[60vw] h-[50px] pl-4 py-2 cursor-pointer border-b-[1px] border-grayBorder'
export default function MenuBurguer({ isActive }: MenuBurguer) {
    return (
        <div className={`${isActive ? 'animationMenuBurguer' : null} bg-white absolute right-0 top-12 text-lg rounded-md`} >
            <Link href={'/'}>
                <div className={`${isActive ? 'block itenMenuBurguer' : 'none'} ${styleBotton} `}>OPÇÃO1</div>
            </Link>
            <Link href={'/'}>
                <div className={`${isActive ? 'block itenMenuBurguer' : 'none'} ${styleBotton}`}>OPÇÃO2</div>
            </Link>
        </div>
    )
}