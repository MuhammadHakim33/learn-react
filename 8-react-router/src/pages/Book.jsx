import { useParams } from "react-router-dom"

export default function Book() {
    const { title } = useParams()

    return (
        <div className="border p-4">
            <h2 className="text-xl font-bold">Book {title}</h2>
        </div>
    )
}