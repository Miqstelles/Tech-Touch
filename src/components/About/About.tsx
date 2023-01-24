import iphone from '../../../public/iphone.jpg'
import { Button } from '../Button'

export function About() {
    return (
        <div className="w-[1300] h-[600px] flex items-center m-10 justify-between">
            <img src={iphone} className="w-[700px] h-[500px] rounded-tl-[210px] rounded-tr-[44px] rounded-br-[210px] rounded-bl-[44px]" />

            <div className="flex flex-col items-center justify-center gap-[70px] w-[760px]">
                <h1 className="text-[55px] text-center font-extrabold">
                    With <span className="text-red-600">HEXA</span> you can fix anything in your phone for the best prices
                </h1>
                <Button />
            </div>
        </div>
    )
}