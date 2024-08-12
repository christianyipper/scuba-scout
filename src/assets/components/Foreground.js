import Progress from "./Progress"

const Foreground = ( { 
    step1, step2, step3, step4, step5, step6,
    step2mark, step3mark, step4mark, step5mark, step6mark,
    link2, link3, link4, link5, link6
} ) => {
    return (
        <div className='
        fixed w-full h-screen z-50 
        grid grid-cols-12 gap-4 
        duration-500 ease-in-out
        pointer-events-none
        '>
            <div className={`
            col-start-11 col-end-13 h-screen
            flex flex-col justify-center items-start
            `}>
                <a href='#section1' className='relative w-full'>
                    <ul className={`ml-4 list-none absolute transition-all duration-200 ease-in-out hover:opacity-100 hover:text-sky-500 dark:hover:text-orange-400 ${ step1 }`}>
                        <li className='font-bold'>Home</li>
                    </ul>
                    <ul className='ml-4 list-disc transition-all duration-500 ease-in-out'>
                        <li className='font-bold'></li>
                    </ul>
                </a>
                <Progress
                text='3D Mapping'
                step={ step2 }
                stepMark={ step2mark }
                link={ link2 }
                />
                <Progress
                text='Oxygen Data'
                step={ step3 }
                stepMark={ step3mark }
                link={ link3 }
                />
                <Progress
                text='Live Feed'
                step={ step4 }
                stepMark={ step4mark }
                link={ link4 }
                />
                <Progress
                text='Pricing'
                step={ step5 }
                stepMark={ step5mark }
                link={ link5 }
                />
                <Progress
                text='FAQ'
                step={ step6 }
                stepMark={ step6mark }
                link={ link6 }
                />
            </div>
        </div>
    )
}

export default Foreground