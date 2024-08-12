import Button from "./Button"

const Card = ( { 
    layout, title, price, featured, animation, spin,
    item1, item2, item3, item4, item5, item6, item7,
    display1, display2, display3, display4, display5, display6, display7
} ) => {
    return (
        <div className={`
            ${ layout } ${ animation } ${ spin }
            h-auto relative pt-4 pb-4 rounded-3xl mt-8
            border-2
            transition-all duration-500 ease-in-out
            `}>
                <div className={`${ featured } absolute -top-5 w-full flex justify-center items-center`}>
                    <p className='text-center -mt-0 py-1 px-4 rounded-full font-bold bg-black dark:bg-white border-2 border-white dark:border-black'><span className='invert'>Most Popular</span></p>
                </div>
                <h3 className='text-6xl font-black absolute top-16 -left-0 opacity-10'>{ title }</h3>
                <p className='pl-4 font-Rubik'>
                    <span className='text-6xl font-semibold'>$</span>
                    <span className='text-6xl font-semibold'>{ price }</span>
                    <span className='text-2xl'>/mo</span></p>
                <p className='pl-4 text-lg pb-8'>{ title } plan</p>
                <ul className='ml-9 list-disc'>
                    <li className={`text-lg ${ display1 }`}>{ item1 }</li>
                    <li className={`text-lg ${ display2 }`}>{ item2 }</li>
                    <li className={`text-lg ${ display3 }`}>{ item3 }</li>
                    <li className={`text-lg ${ display4 }`}>{ item4 }</li>
                    <li className={`text-lg ${ display5 }`}>{ item5 }</li>
                    <li className={`text-lg ${ display6 }`}>{ item6 }</li>
                    <li className={`text-lg ${ display7 }`}>{ item7 }</li>
                </ul>
                <Button text='Buy Now' layout='mt-6 ml-4'/>
            </div>
    )
}

export default Card