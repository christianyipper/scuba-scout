import Progress from "./Progress"

const Background = ( { arrow } ) => {
    return (
        <div className='
        fixed w-full h-screen -z-10 
        grid grid-cols-12 gap-4 
        bg-white dark:bg-black 
        duration-500 ease-in-out
        '>
            <div className={`
            ${ arrow }
            col-start-1 col-end-3
            flex flex-col justify-center items-center
            arrow-down
            transition-all duration-500 ease-in-out
            `}>
                <span className='animate-bob'>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
                <span className='animate-bob animation-delay-200'>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
                <span className='animate-bob animation-delay-400'>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default Background