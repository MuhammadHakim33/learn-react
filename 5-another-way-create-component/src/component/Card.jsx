function Card({ children }) {
    return <div className="border p-4 space-y-3">{children}</div>
}

function Title({children}) {
    return <h1 className="text-lg font-bold capitalize">{children}</h1>
}

function Body({children}) {
    return <p className="text-base font-normal">{children}</p>
}

Card.Title = Title
Card.Body = Body

export default Card