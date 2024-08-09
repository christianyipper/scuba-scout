import { useState, useEffect } from 'react';
import SetMode from './assets/components/SetMode';
import Logo from './assets/components/Logo';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('displayMode');
        if (savedMode) {
            setDarkMode(savedMode === 'dark');
        } else {
            localStorage.setItem('displayMode', 'light');
        }
    }, []);

    const toggleDisplay = () => {
        const newMode = darkMode ? 'light' : 'dark';
        setDarkMode(!darkMode);
        localStorage.setItem('displayMode', newMode);
    };

    return (
        <main className={`${darkMode ? 'dark' : ''} w-full h-screen`}>
            <div className='fixed w-full h-screen -z-10 bg-white dark:bg-black duration-500 ease-in-out'></div>
            <nav className='w-full h-20 grid grid-cols-12 gap-4 bg-black/10 dark:bg-white/15 white'>
                <a href='' className='h-20 col-start-2 col-end-3 flex justify-start items-center'>
                    <Logo/>
                </a>
                <div className='col-start-4 col-end-10 flex justify-center items-center gap-20'>
                    <a href='' className='text-2xl font-medium hover:text-sky-600 transition-all duration-200 ease-in-out'>Pricing</a>
                    <a href='' className='text-2xl font-medium hover:text-sky-600 transition-all duration-200 ease-in-out'>About</a>
                    <a href='' className='text-2xl font-medium hover:text-sky-600 transition-all duration-200 ease-in-out'>FAQ</a>
                </div>
                <div className='col-start-10 col-end-12 flex justify-between items-center'>
                    {/* <a href='' className='flex justify-center items-center'>
                    <ion-icon name='logo-instagram'></ion-icon>
                    </a> */}
                    <a href='' className='flex justify-center items-center'>
                    <ion-icon name='logo-facebook'></ion-icon>
                    </a>
                    <a href='' className='flex justify-center items-center'>
                    <ion-icon name='logo-twitter'></ion-icon>
                    </a>
                    <button onClick={toggleDisplay} className='relative h-full flex justify-center items-center shake transition-all duration-200 ease-in-out'>
                        <span className='opacity-100 dark:opacity-0 h-full flex justify-center items-center'>
                            <ion-icon name="moon"></ion-icon>
                        </span>
                        <span className='opacity-0 dark:opacity-100 absolute left-0 h-full flex justify-center items-center transition-all duration-200 ease-in-out'>
                            <ion-icon name="sunny"></ion-icon>
                        </span>
                    </button>
                </div>
                {/* <div className='col-start-12 flex justify-center items-center'>
                </div> */}
            </nav>
            <img></img>
        </main>
    );
}

export default App;
