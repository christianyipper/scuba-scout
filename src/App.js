import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import Nav from './assets/components/Nav';
import Background from './assets/components/Background';
import Section1 from './assets/components/sections/Section1';
import Section5 from './assets/components/sections/Section5';
import ScrollSnap from './assets/components/ScrollSnap';

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
            <Background arrow={ inView1 ? '' : 'opacity-0'}/>
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
            videoView={ inView1 ? 'translate-y-0 opacity-100' : ''}
            />
            <Section5 
            view={ inView5 ? 'z-50' : 'z-0' }
            heading={ inView5 ? 'opacity-100' : 'opacity-0' }
            animation1={ inView5 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' }
            animation2={ inView5 ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-10 opacity-0 delay-150' }
            animation3={ inView5 ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-10 opacity-0 delay-300' }
            />
        </main>
    );
}

export default App;
