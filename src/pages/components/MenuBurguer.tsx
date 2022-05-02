import Link from "next/link"

type MenuBurguer = {
    isActive: boolean
}
export default function MenuBurguer({ isActive }: MenuBurguer) {
    return (
        <div className={`${isActive ? 'animationMenuBurguer' : null} bg-white absolute right-0 top-12 text-lg pt-2 rounded-md`} >
            <Link href={'/'}>
                <div className={`${isActive ? 'block itenMenuBurguer' : 'none'} flex items-center opacity-0 w-[200px] h-[50px] pl-4 cursor-pointer`}>OPÇÃO1</div>
            </Link>
            <Link href={'/'}>
                <div className={`${isActive ? 'block itenMenuBurguer' : 'none'} flex items-center opacity-0 w-[200px] h-[50px] pl-4 cursor-pointer`}>OPÇÃO2</div>
            </Link>
        </div>
    )
}