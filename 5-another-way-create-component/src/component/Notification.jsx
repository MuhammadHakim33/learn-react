export default function Notification(props) {
    const {body, time} = props

    return (
        <div className="border bg-blue-100 text-blue-500 p-4 flex justify-between">
            <p className="font-semibold">{body}</p>
            <p className="font-light">{time} min ago</p>
        </div>
    )
}