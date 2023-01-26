import { PlusCircle } from 'phosphor-react'

export function Button() {
    return (
        <button className="w-[140px] h-[50px] sm:w-[340px] sm:h-[100px] rounded-2xl bg-[#FB2F2F] flex items-center justify-center hover:bg-[#DA1414] duration-300">
            <PlusCircle className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]" weight="fill" />
        </button>
    )
}