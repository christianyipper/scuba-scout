import scubaVideo from '../../img/Scuba-Scout-720p.mp4'

const Section1 = ( { view, videoView } ) => {
    return (
        <section className={`
        ${ view }
        absolute w-full h-screen
        grid grid-cols-12 gap-4 
        justify-center items-center
        overflow-hidden pointer-events-none
        `}>
            <video loop autoPlay muted className={`
            ${ videoView }
            col-start-3 col-end-11
            rounded-3xl
            transition-all duration-500 ease-in-out
            -translate-y-1/2 opacity-0
                `}>
                <source src={ scubaVideo } type='video/mp4'/>
            </video>
        </section>
    )
}

export default Section1