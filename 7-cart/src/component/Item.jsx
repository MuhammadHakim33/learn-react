import Button from './Button'
import { IconPlus, IconMinus } from '@tabler/icons-react'

function Item(props) {
    const {img, title, price, handleAmount, getAmount} = props

    function handleIncrease() {
        handleAmount(getAmount + 1)
    }

    function handleDecrease() {
        if(getAmount > 1) {
            handleAmount(getAmount - 1)
        }
    }
    
    return (
        <div className="border-b p-4 flex items-center gap-x-4">
            <div>
                <img src={img} alt="" width={80}/>
            </div>
            <div className="w-full">
                <h1 className="text-lg font-bold capitalize mb-1">{title}</h1>
                <h1 className="text-base font-bold capitalize text-black/60">${price}</h1>
            </div>
            <div className="flex border items-center gap-x-3">
                <Button onClick={handleDecrease} text={<IconMinus size={16}/>} />
                <p className="font-semibold">{getAmount}</p>
                <Button onClick={handleIncrease} text={<IconPlus size={16}/>} />
            </div>
        </div>
    )
}

export default Item