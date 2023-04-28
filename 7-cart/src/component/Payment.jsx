function Payment(props) {
    const {getAmount, getPrice, getTotal} = props

    return (
        <div className="border-b px-4 space-y-4">
            <div className="w-full flex justify-between">
                <h1 className="text-base font-semibold capitalize text-black/60">Item</h1>
                <h1 className="text-base font-semibold capitalize mb-1">{getAmount} x ${getPrice}</h1>
            </div>
            <div className="w-full border-t py-4 flex justify-between">
                <h1 className="text-lg font-semibold capitalize text-black/60">Total</h1>
                <h1 className="text-lg font-semibold capitalize mb-1">$ {getTotal}</h1>
            </div>
        </div>
    )
}

export default Payment