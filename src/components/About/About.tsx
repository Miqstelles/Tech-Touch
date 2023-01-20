import iphone from '../../../public/iphone.jpg'
import { PlusCircle } from 'phosphor-react'

export function About() {
    return (
        <div className="w-[1000] h-[500px] flex items-center justify-between m-10 gap-7">
            <img src={iphone} className="w-[600px] h-[400px] rounded-tl-[210px] rounded-tr-[44px] rounded-br-[210px] rounded-bl-[44px]" />
            <div className="flex flex-wrap items-center justify-center gap-[70px]">
                <h1 className="text-[30px] text-center font-extrabold">
                    With <span className="text-red-600">HEXA</span> you can fix anything in your phone for the best prices
                </h1>

                <button className="w-[260px] h-[70px] rounded-2xl bg-[#FB2F2F] flex items-center justify-center">
                    <PlusCircle size={50} weight="fill" />
                </button>
            </div>
        </div>
    )
}