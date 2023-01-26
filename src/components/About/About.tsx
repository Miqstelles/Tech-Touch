import iphone from '../../../public/iphone.jpg'
import { Button } from '../Button'

export function About() {
    return (
        <div className="h-[500px] sm:h-[600px] sm:w-[1000px] md:w-[1200px] sm:flex items-center justify-between">
            <img src={iphone} className="w-[300px] mt-5 sm:w-[500px] sm:h-[340px] rounded-xl sm:rounded-tl-[210px] sm:rounded-tr-[44px] sm:rounded-br-[210px] sm:rounded-bl-[44px]" />

            <div className="flex flex-col items-center justify-center gap-[30px] m-10 sm:gap-[70px] ">
                <h1 className="w-[200px] sm:w-[500px] text-[20px] text-center sm:text-[45px] font-extrabold">
                    With <span className="text-red-600">HEXA</span> you can fix anything in your phone for the best prices
                </h1>
                <Button />
            </div>
        </div>
    )
}