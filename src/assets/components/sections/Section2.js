import MapDark from '../../img/map-dark.png';
import MapLight from '../../img/map-light.png';
import AboutTemplate from './AboutTemplate';

const Section2 = ( { 
    photoAnimate, headingAnimate, textAnimate, featured1Animate, featured2Animate, featured3Animate,
} ) => {
    return (
        <AboutTemplate
        photoLight={ MapLight }
        photoDark={ MapDark }
        photoAnimate={ photoAnimate }
        photoPos='col-start-2 col-end-5 row-start-3'

        bodyPos='col-start-5 col-end-9 row-start-3'
        heading='Track Your Route'
        headingAnimate={ headingAnimate }
        text="Scuba Scout's robust route tracking system provides divers with unparalleled underwater navigation and exploration. Utilizing advanced GPS technology, the app meticulously records your dive path from the moment you descend, capturing every twist and turn up to an impressive 1000 meters. Once your dive is complete, relive the adventure with our interactive 3D map, offering a captivating visual representation of your route and the surrounding underwater terrain."
        textAnimate={ textAnimate }

        featured1='Depths Up To'
        featuredText1='1000m'
        featured1Animate={ featured1Animate }

        featured2='Interactive'
        featuredText2='3D Map'
        featured2Animate={ featured2Animate }

        featured3='Cloud Storage'
        featuredText3='32Gb'
        featured3Animate={ featured3Animate }
        />
    );
}

export default Section2;