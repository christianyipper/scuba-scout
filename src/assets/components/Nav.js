import Logo from './Logo';
import Link from './Link';

const Nav = ( { action, pricing, about, faq } ) => {
    return (
        <nav className='
        fixed w-full h-16 z-50 pr-6
        grid grid-cols-12 gap-4 
        bg-black/10 dark:bg-white/15 white
        pointer-events-none
        '>
            <a href='' className='
            col-start-2 col-end-3 
            flex justify-start items-center
            '>
                <Logo/>
            </a>
            <div className='
            col-start-4 col-end-10 
            flex justify-center items-center gap-20
            '>
                <div className='flex flex-col justify-center items-center'>
                    <Link
                        attr="text-2xl font-medium"
                        text="Pricing"
                        path="#section5"
                    />
                    <div className={`${ pricing } w-1 h-1 bg-white rounded-xl bottom-2 absolute transition-all duration-500 ease-in-out`}></div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Link
                        attr="text-2xl font-medium"
                        text="About"
                        path="#section2"
                    />
                    <div className={`${ about } w-1 h-1 bg-white rounded-xl bottom-2 absolute transition-all duration-500 ease-in-out`}></div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Link
                        attr="text-2xl font-medium"
                        text="FAQ"
                        path="#section6"
                    />
                    <div className={`${ faq } w-1 h-1 bg-white rounded-xl bottom-2 absolute transition-all duration-500 ease-in-out`}></div>
                </div>
            </div>
            <div className='
            col-start-10 col-end-12 
            flex justify-end items-center gap-8
            '>
                <a href='' className='flex justify-center items-center'>
                    <ion-icon name='logo-facebook'></ion-icon>
                </a>
                <a href='' className='flex justify-center items-center'>
                    <ion-icon name='logo-twitter'></ion-icon>
                </a>
                <button onClick={action} className='
                relative h-full 
                flex justify-center items-center 
                pointer-events-auto
                transition-all duration-200 ease-in-out
                animate-shake
                '>
                    <span className='
                    h-full 
                    opacity-100 dark:opacity-0 
                    flex justify-center items-center
                    '>
                        <ion-icon name="moon"></ion-icon>
                    </span>
                    <span className='
                    opacity-0 dark:opacity-100 
                    -z-10 dark:z-0
                    absolute left-0 h-full 
                    flex justify-center items-center 
                    '>
                        <ion-icon name="sunny"></ion-icon>
                    </span>
                </button>
            </div>
        </nav>
    );
}

export default Nav;