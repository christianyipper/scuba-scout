import Card from '../Card'
import Ocean from '../../img/ocean.jpg'

const Section5 = ( { view, heading, animation1, animation2, animation3 } ) => {
    return (
        <section className={`
        ${ view }
        absolute w-full h-screen
        grid grid-cols-10 grid-rows-12 gap-4
        justify-center items-start
        overflow-hidden pointer-events-none
        `}>
            <h2
            className={`
            ${ heading }
            col-start-1 col-end-11 row-start-3
            text-4xl text-center
            transition-all duration-500 ease-in-out
            `}>Pricing
            </h2>
            <Card
            layout='
            col-start-3 col-end-5 row-start-5 
            border-black/15 dark:border-white/15'
            animation={ animation1 }
            featured='hidden'
            title='basic'
            price='10'
            item1='Up to 100m distance'
            item2='3D route mapping'
            item3='GPS and time tracking'
            item4='Oxygen data'
            item5='4Gb cloud storage'
            display6='hidden'
            display7='hidden'
            />
            <Card
            layout='
            col-start-5 col-end-7 row-start-5 
            bg-sky-500/20 dark:bg-orange-400/20 border-sky-500 dark:border-orange-400'
            animation={ animation2 }
            title='pro'
            price='16'
            item1='Up to 250m distance'
            item2='3D route mapping'
            item3='GPS and time tracking'
            item4='Oxygen data'
            item5='Decompression analytics'
            item6='16Gb cloud storage'
            display7='hidden'
            />
            <Card
            layout='
            col-start-7 col-end-9 row-start-5
            border-black/15 dark:border-white/15'
            animation={ animation3 }
            featured='hidden'
            title='ultimate'
            price='24'
            item1='Up to 1,000m distance'
            item2='3D route mapping'
            item3='GPS and time tracking'
            item4='Oxygen data'
            item5='Decompression analytics'
            item6='Live surface transmission'
            item7='32Gb cloud storage'
            />
        </section>
    )
}

export default Section5