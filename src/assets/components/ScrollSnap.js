const ScrollSnap = ( { 
    id1, reference1, display1,
    id2, reference2, display2,
    id3, reference3, display3,
    id4, reference4, display4,
    id5, reference5, display5,
    id6, reference6, display6,
    id7, reference7, display7,
    id8, reference8, display8,
    id9, reference9, display9
    } ) => {

    return (
        <section className='
        absolute w-full h-screen top-0 z-50
        snap-mandatory snap-y overflow-y-scroll overflow-x-hidden
        '>
            <div id={ id1 } className='block relative w-full h-screen min-h-screen snap-start' ref={ reference1 }></div>
            <div id={ id2 } className='block relative w-full h-screen min-h-screen snap-start' ref={ reference2 }></div>
            <div id={ id3 } className='block relative w-full h-screen min-h-screen snap-start' ref={ reference3 }></div>
            <div id={ id4 } className='block relative w-full h-screen min-h-screen snap-start' ref={ reference4 }></div>
            <div id={ id5 } className='block relative w-full h-screen min-h-screen snap-start' ref={ reference5 }></div>
            <div id={ id6 } className='block relative w-full h-screen min-h-screen snap-start' ref={ reference6 }></div>
        </section>
    );
};

export default ScrollSnap;