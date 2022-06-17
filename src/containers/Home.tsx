import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className="w-screen h-screen overflow-hidden bg-gradient-to-br from-gray-900
            to-slate-900 select-none snap-start">
            <Navbar />
            <div className="flex items-center ml-32 h-full pb-36">
                <div className="flex flex-col">
                    <div className="text-gray-700 text-3xl italic">Hello,</div>
                    <div className="text-gray-700 font-bold text-5xl">I'm a</div>
                    <div className="text-gray-100 font-bold text-5xl">
                        Full-Stack 
                        <span className="text-blue-500"> Developer</span>
                    </div>
                    <a href="#about" target="_blank" className="mt-3 text-gray-400 transition-all 
                        duration-300 hover:text-gray-200 animate-bounce">View More</a>
                    <div className="h-px w-20 bg-gray-400"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;