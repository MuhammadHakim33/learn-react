function Button(props) {
    const {text} = props
    return <button {...props} className='p-2 text-lg font-black'>{text}</button>
}

export default Button