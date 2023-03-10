import { Button } from '../Button'
import { Text } from '../Footer/Text'

export function Footer() {
    return (
        <div className="bg-ft bg-cover bg-no-repeat bg-center w-full h-[500px] sm:h-[800px] flex flex-col items-center justify-center gap-10">
            <Text />
            <Button />
        </div>
    )
}