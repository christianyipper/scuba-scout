import scubaVideo from '../../img/Scuba-Scout-720p.mp4'

const Section1 = ( { view, videoView, arrow } ) => {
    return (
        <section className={`
        ${ view }
        absolute w-full h-screen -z-0
        grid grid-cols-10 gap-4
        justify-center items-center
        
        overflow-hidden pointer-events-none
        `}>
            <video loop autoPlay muted className={`
            ${ videoView }
            col-start-3 col-end-9
            rounded-3xl border-2 border-black dark:border-white
            transition-all duration-500 ease-in-out
                `}>
                <source src={ scubaVideo } type='video/mp4'/>
            </video>
        </section>
    )
}

export default Section1