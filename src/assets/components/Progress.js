const Progress = ( { 
    step, stepMark, text, link
} ) => {
    return (
        <div className='relative'>
            <div className={`w-1 h-12 rounded-full bg-black dark:bg-white transition-all duration-500 ease-in-out ${ stepMark }`}></div>
            <a href={ link } className='relative'>
                <ul className={`ml-4 list-none absolute transition-all duration-200 ease-in-out hover:opacity-100 hover:text-sky-500 dark:hover:text-orange-400 ${ step }`}>
                    <li className='font-bold text-nowrap'>{ text }</li>
                </ul>
                <ul className={`ml-4 list-disc transition-all duration-500 ease-in-out ${ stepMark }`}>
                    <li className='font-bold'></li>
                </ul>
            </a>
        </div>
    )
}

export default Progress