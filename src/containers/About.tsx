import Description from "../components/Description";

const About = () => {
    return (
        <section className="bg-gray-200 w-screen h-screen overflow-hidden relative">
            <div className="flex items-center ml-32 h-full max-w-lg relative z-10 snap-start">
                <Description />
            </div>

            <div className="absolute -bottom-44 -left-20 text-[30rem] text-gray-300 
                font-bold opacity-40">About</div>
        </section>
    );
}

export default About;