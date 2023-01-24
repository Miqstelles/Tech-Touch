import { PlusCircle } from 'phosphor-react'

export function Button() {
    return (
        <button className="w-[340px] h-[100px] rounded-2xl bg-[#FB2F2F] flex items-center justify-center">
            <PlusCircle size={50} weight="fill" />
        </button>
    )
}