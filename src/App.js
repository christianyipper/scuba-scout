import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Nav from './assets/components/Nav';
import Section1 from './assets/components/sections/Section1';
import Section2 from './assets/components/sections/Section2';
import Section3 from './assets/components/sections/Section3';
import Section4 from './assets/components/sections/Section4';
import Section5 from './assets/components/sections/Section5';
import ScrollSnap from './assets/components/ScrollSnap';
import Background from './assets/components/Background';

const App = () => {
    // === INTERSECTION OBSERVER ===
    const { ref: snap1, inView: inView1 } = useInView( { threshold: 0.5 } );
    const { ref: snap2, inView: inView2 } = useInView( { threshold: 0.5 } );
    const { ref: snap3, inView: inView3 } = useInView( { threshold: 0.5 } );
    const { ref: snap4, inView: inView4 } = useInView( { threshold: 0.5 } );
    const { ref: snap5, inView: inView5 } = useInView( { threshold: 0.5 } );
    const { ref: snap6, inView: inView6 } = useInView( { threshold: 0.5 } );

    // === DARK MODE ===
    const [ darkMode, setDarkMode ] = useState( false );

    useEffect(() => {
        const savedMode = localStorage.getItem( 'displayMode' );
        if ( savedMode ) {
            setDarkMode( savedMode === 'dark' );
        } else {
            localStorage.setItem( 'displayMode', 'light' );
        }
    }, []);

    const toggleDisplay = () => {
        const newMode = darkMode ? 'light' : 'dark';
        setDarkMode( !darkMode );
        localStorage.setItem( 'displayMode', newMode );
    };

    return (
        <main className={ `${darkMode ? 'dark' : ''} w-full h-screen` }>
            <Background
            arrow={ inView1 ? '' : 'opacity-0'}
            />
            <ScrollSnap
                id1="section1"
                reference1={ snap1 }

                id2="section2"
                reference2={ snap2 }

                id3="section3"
                reference3={ snap3 }

                id4="section4"
                reference4={ snap4 }

                id5="section5"
                reference5={ snap5 }

                id6="section6"
                reference6={ snap6 }
            />
            <Nav 
            action={ toggleDisplay }
            about={`${ inView2 || inView3 || inView4 ? '' : 'opacity-0'}`}
            pricing={ inView5 ? '' : 'opacity-0' }
            faq={ inView6 ? '' : 'opacity-0' }
            />
            <Section1 
            view={ inView1 ? 'z-50' : 'z-0' }
            videoView={ inView1 ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}
            />
            <Section2 
            view={ inView2 ? 'z-50' : 'z-0' }
            photoAnimate={ inView2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0' }
            headingAnimate={ inView2 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0' }
            textAnimate={ inView2 ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-10 opacity-0' }
            featured1Animate={ inView2 ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0' }
            featured2Animate={ inView2 ? 'translate-y-0 opacity-100 delay-400' : 'translate-y-10 opacity-0' }
            featured3Animate={ inView2 ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-10 opacity-0' }
            />
            <Section3 
            view={ inView3 ? 'z-50' : 'z-0' }
            photoAnimate={ inView3 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0' }
            headingAnimate={ inView3 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0' }
            textAnimate={ inView3 ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-10 opacity-0' }
            featured1Animate={ inView3 ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0' }
            featured2Animate={ inView3 ? 'translate-y-0 opacity-100 delay-400' : 'translate-y-10 opacity-0' }
            featured3Animate={ inView3 ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-10 opacity-0' }
            />
            <Section4 
            view={ inView4 ? 'z-50' : 'z-0' }
            photoAnimate={ inView4 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0' }
            headingAnimate={ inView4 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0' }
            textAnimate={ inView4 ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-10 opacity-0' }
            featured1Animate={ inView4 ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0' }
            featured2Animate={ inView4 ? 'translate-y-0 opacity-100 delay-400' : 'translate-y-10 opacity-0' }
            featured3Animate={ inView4 ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-10 opacity-0' }
            />
            <Section5 
            view={ inView5 ? 'z-50' : 'z-0' }
            heading={ inView5 ? 'opacity-100' : 'opacity-0' }
            animation1={ inView5 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }
            animation2={ inView5 ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-10 opacity-0 delay-150' }
            animation3={ inView5 ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0 delay-300' }
            spin1={ darkMode ? 'animate-spin' : ''}
            spin2={ darkMode ? 'animate-spin animation-delay-150' : ''}
            spin3={ darkMode ? 'animate-spin animation-delay-300' : ''}
            />
        </main>
    );
}

export default App;
