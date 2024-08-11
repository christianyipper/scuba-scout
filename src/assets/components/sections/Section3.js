
import DiverBelowLight from '../../img/diver-deep-light.png';
import DiverBelowDark from '../../img/diver-deep-dark.png';

import AboutTemplate from './AboutTemplate';

const Section3 = ( { 
    photoAnimate, headingAnimate, textAnimate, featured1Animate, featured2Animate, featured3Animate
} ) => {
    return (
        <AboutTemplate
        photoLight={ DiverBelowLight }
        photoDark={ DiverBelowDark }
        photoAnimate={ photoAnimate }
        photoPos='col-start-6 col-end-9 row-start-3'

        bodyPos='col-start-2 col-end-6 row-start-3'
        heading='Oxygen Monitoring'
        headingAnimate={ headingAnimate }
        text="Safety is paramount for every dive. Scuba Scout meticulously monitors your oxygen levels and consumption, providing real-time data to ensure you stay within safe limits. By accurately calculating your remaining dive time based on oxygen usage, the app empowers you to make informed decisions and extend your underwater exploration with confidence. Additionally, it's intelligent decompression stop calculator utilizes GPS data to determine your depth and automatically calculates the necessary decompression stops based on established dive tables."
        textAnimate={ textAnimate }

        featured1='Digital'
        featuredText1='Rotating Bezel'
        featured1Animate={ featured1Animate }

        featured2='Sync Data With'
        featuredText2='Apple Watch'
        featured2Animate={ featured2Animate }

        featured3='Utilizes'
        featuredText3='Haptic Feedback'
        featured3Animate={ featured3Animate }
        />
    );
}

export default Section3;