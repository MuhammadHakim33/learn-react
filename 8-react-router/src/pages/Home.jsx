import { useOutletContext } from "react-router-dom"

export default function Home() {
    const context = useOutletContext()

    return (
        <div className="border p-4">
            <h2 className="text-base font-light mb-1">Hello, {context.name}</h2>
            <h2 className="text-xl font-bold">Home</h2>
        </div>
    )
}