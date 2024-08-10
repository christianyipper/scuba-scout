const Button = ( { 
    text, layout
} ) => {
    return (
        <button className={`
        ${ layout }
        px-6 py-2 rounded-md
        border-black dark:border-white border-2
        font-medium
        hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black
        transition-all duration-200 ease-in-out
        `}>
        { text }
        </button>
    )
}

export default Button