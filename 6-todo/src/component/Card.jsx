function Card({ children }) {
    return (
        <div className="border p-4 flex items-center justify-between">
            {children}
        </div>
    )
}

function Name({children}) {
    return <h1 className="text-lg font-bold capitalize">{children}</h1>
}

function Remove(props) {
    const {children} = props
    return <button {...props} className='p-2 border'>{children}</button>
}

Card.Name = Name
Card.Remove = Remove

export default Card