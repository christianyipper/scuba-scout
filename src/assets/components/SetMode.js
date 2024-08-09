import { useState, useEffect } from 'react';

const SetMode = () => {
    const [colorMode, setMode] = useState('light');

    useEffect(() => {
        const saveMode = localStorage.getItem('colorMode');
        if (saveMode) {
            setMode(saveMode);
        }
    }, []);

    const switchMode = () => {
        const newTheme = colorMode === 'light' ? 'dark' : 'light';
        setMode(newTheme);
        localStorage.setItem('colorMode', newTheme);
    };

    useEffect(() => {
        document.documentElement.className = colorMode;
    }, [colorMode]);

    // const [darkMode, setDarkMode] = useState( false )

    // useEffect( () => {
    //     let savedMode = localStorage.getItem( "displayMode" )
    //     if( !savedMode ) {
    //         savedMode = "light"
    //         setDarkMode( false )
    //         localStorage.setItem( "displayMode", savedMode )
    //     }
    //     setDarkMode( savedMode === 'dark' ? true : false )
    // }, [])

    // const toggleDisplay = () => {
    //     setDarkMode(!darkMode)
    // }

    return (
        <div onClick={switchMode}>
            Change
        </div>
    );
};

export default SetMode;