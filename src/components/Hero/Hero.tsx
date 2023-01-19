import { Navbar } from './Navbar';
import { Slogan } from './Slogan';
import { Hexagonal } from './Hexagonal';

export function Hero() {
    return (
        <div className="bg-phone bg-center bg-cover bg-no-repeat h-[900px]">
            <div className="w-full h-[100px] flex items-center justify-center">
                <Navbar
                    items={['HOME', 'CONTACT', 'ABOUT']}
                />
            </div>
            <div className="flex items-center justify-center">
                <Slogan />
            </div>
            <div className="flex items-center justify-center">
                <Hexagonal />
            </div>
        </div>
    )
}