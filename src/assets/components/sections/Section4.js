import DiverAboveLight from '../../img/diver-above-light.png';
import DiverAboveDark from '../../img/diver-above-dark.png';
import AboutTemplate from './AboutTemplate';

const Section4 = ( { 
    photoAnimate, headingAnimate, textAnimate, featured1Animate, featured2Animate, featured3Animate
} ) => {
    return (
        <AboutTemplate
        photoLight={ DiverAboveLight }
        photoDark={ DiverAboveDark }
        photoAnimate={ photoAnimate }
        photoPos='col-start-2 col-end-5 row-start-3'

        bodyPos='col-start-5 col-end-9 row-start-3'
        heading='Live Data Transmission'
        headingAnimate={ headingAnimate }
        text="Scuba Scout ensures diver safety by providing real-time communication between the underwater world and the surface. The app's live transmission feed enables continuous monitoring of vital dive data, including depth, temperature, and oxygen levels. This crucial information is transmitted directly to a surface computer or compatible device, allowing dive buddies or support teams to track a diver's status and respond to any potential emergencies promptly."
        textAnimate={ textAnimate }

        featured1='Worldwide'
        featuredText1='5G Network'
        featured1Animate={ featured1Animate }

        featured2='Sync Up To'
        featuredText2='4 Devices'
        featured2Animate={ featured2Animate }

        featured3='Ping Updates'
        featuredText3='3 Times / sec'
        featured3Animate={ featured3Animate }
        />
    );
}

export default Section4;