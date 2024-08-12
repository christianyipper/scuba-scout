import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ( { position, animation, itemAnimation } ) => {
    const [ activeIndex, setActiveIndex ] = useState( null );
    const [ height, setHeight ] = useState({});
    const itemRef = useRef([]);

    const faq = [
        { question: 'What devices are compatible with Scuba Scout?', answer: 'Currently, Scuba Scout is fully supported on Apple Watch Ultra, Descent G1, Descent Mk3, and Descent Mk3i series. Scuba Scout has limited support on Apple Watch Series 6, Suunto Ocean Dive, Suunto Smart Watch, Garmin Instinct Solar Tactical, and LIGE Millitary Smart Watch.' },
        { question: 'How do I connect my dive watch to Scuba Scout Live?', answer: 'You can download our Scuba Scout Live app on MacOS through the app store or Windows 10/11 through the Microsoft store. Scuba Scout Live uses bluetooth to connect your dive watch to your system. Once a secure connection has been established, start a new dive session on your watch and your live transmission will update on Scuba Scout Live.' },
        { question: 'Can I downgrade to a lower package?', answer: 'Yes, you will be able to downgrade to a lower package at any time. Note: you will still have access to all features in the previous package until your billing period resets.' },
        { question: 'Will I keep my data if my subscription is cancelled?', answer: "All cloud storage data will be erased once your account is inactive. You can set up Scuba Scout's cloud-link with any cloud storage provider to backup your data. Additionally, you can download your dive data to your local storage on your personal device. Note: downloaded data will not carry over Scuba Scout's interactive 3D map." },
        { question: 'How can I access the 3D map?', answer: 'You can view your dive statistics through the Scuba Scout app for iOS and Android by logging into your account. Once logged in, you will be able to access and download your 3D interactive maps and other data from your cloud storage.' },
        { question: 'How do I track my oxygen levels?', answer: "Before each dive, input your oxygen tank capacity into the session data and analytics tab. Once set, Scuba Scout enables Apple Watch Ultra's blood oxygen sensors to manage your O2 levels." },
    ];

    const handleClick = ( index ) => {
        setActiveIndex( index );
    };

    // useEffect(() => {
    //     setHeight(itemRef.current.scrollHeight);
    // });
    useEffect(() => {
        const itemHeight = {};
        itemRef.current.forEach(( ref, index ) => {
            if ( ref )  {
                itemHeight[ index ] = ref.scrollHeight;
            }
            });
        setHeight( itemHeight );
    }, [ faq ]);

    return (
        <div className={`${ position } ${ animation }
        dropdown-container relative
        flex flex-col justify-start items-start gap-4
        w-full
        transition-all duration-500 ease-in-out
        `}>
            { faq.map( ( item, index ) => (
                <a
                    key={ index }
                    ref={(el) => (itemRef.current[index] = el)}
                    className={`${ activeIndex === index ? 'invert bg-white dark:bg-black border-white dark:border-black' : '' }
                    ${ itemAnimation }
                    flex flex-col justify-start items-start
                    w-full opacity-0
                    overflow-hidden cursor-pointer rounded-3xl
                    border-2 border-black/20 dark:border-white/20
                    transition-all duration-500 ease-in-out                 
                    `}
                    onClick={ () => handleClick( index ) }
                    style={{
                        height: activeIndex === index ? `${ height[ index ] }px` : '48px',
                    }}
                >
                    <article className={`
                    w-full py-2 px-4
                    
                    `}>
                        <h3 className='font-Rubik text-2xl pb-2'>{ item.question }</h3>
                        <p>{ item.answer }</p>
                    </article>
                </a>
            ))}
        </div>
    )
}

export default Dropdown