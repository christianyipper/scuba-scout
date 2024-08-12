import Dropdown from "../Dropdown";

const Section6 = ( { 
    view, animation, itemAnimation
} ) => {
    return (
        <section className={`
        ${ view }
        absolute w-full h-screen -z-0
        grid grid-cols-12 gap-4
        justify-center items-center
        
        overflow-hidden pointer-events-none
        `}>
            <Dropdown
            position='col-start-4 col-end-10 w-full'
            animation={ animation }
            itemAnimation={ itemAnimation }
            />
        </section>
    );
}

export default Section6;