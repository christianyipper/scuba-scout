const AboutTemplate = ( { 
    view, description,
    photoLight, photoDark, photoAnimate, photoPos,
    heading, headingAnimate,
    text, textAnimate, bodyPos,
    featured1, featuredText1, featured2, featuredText2, featured3, featuredText3,
    featured1Animate, featured2Animate, featured3Animate
} ) => {
    return (
        <section className={`
        ${ view }
        absolute w-full h-screen
        grid grid-cols-10 grid-rows-12 gap-6
        justify-center items-start
        overflow-hidden pointer-events-none 
        `}>
            <div className={`
            ${ photoPos } ${ photoAnimate }
            relative
            border-2 border-black dark:border-white rounded-3xl overflow-hidden
            transition-all duration-500 ease-in-out
            `}>
                <img className={`transition-all duration-500 ease-in-out absolute dark:opacity-0`} src={ photoLight } alt={ description } />
                <img className={`transition-all duration-500 ease-in-out`} src={ photoDark } alt={ description } />
            </div>
            <article className={`
            ${ bodyPos }
            relative
            `}>
                <h2 className={`${ headingAnimate } pb-4 transition-all duration-500 ease-in-out`}>{ heading }</h2>
                <p className={`${ textAnimate } text-lg transition-all duration-500 ease-in-out`}>{ text }</p>
                <div className='flex flex-row justify-between items-center w-full h-full mt-12 px-4'>
                    <div className={`flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${ featured1Animate }`}>
                        <h3 className=''>{ featured1 }</h3>
                        <p className='font-bold text-lg'>{ featuredText1 }</p>
                    </div>
                    <div className={`flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${ featured2Animate }`}>
                        <h3 className=''>{ featured2 }</h3>
                        <p className='font-bold text-lg'>{ featuredText2 }</p>
                    </div>
                    <div className={`flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${ featured3Animate }`}>
                        <h3 className=''>{ featured3 }</h3>
                        <p className='font-bold text-lg'>{ featuredText3 }</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default AboutTemplate;