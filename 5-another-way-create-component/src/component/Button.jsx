export default function Button(props) {
    const {text, icon} = props
    return (
        <button {...props} className='float-right px-3 py-1 border border-grey-500 rounded-2xl bg-gray-800 text-gray-300 font-light flex gap-x-2'>
            {text}
            {icon}
        </button>
    )
}