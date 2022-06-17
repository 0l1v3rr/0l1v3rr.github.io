const Logo = require("../assets/logo.png");

const Navbar = () => {
    return (
        <div className="w-full px-32 py-5 flex items-center justify-between">
            <div>
                <img src={Logo} alt="logo" title="logo" className="mt-3 w-10 cursor-pointer" />
            </div>

            <div>
                <a href="#home" className="text-gray-100 hover:text-gray-100
                    transition-all duration-300 cursor-pointer mx-5">
                    Home
                </a>
                <a href="#about" className="text-gray-400 hover:text-gray-100
                    transition-all duration-300 cursor-pointer mx-5">
                    About Me
                </a>
                <a href="#portfolio" className="text-gray-400 hover:text-gray-100
                    transition-all duration-300 cursor-pointer mx-5">
                    Portfolio
                </a>
                <a href="#portfolio" className="text-gray-400 hover:text-gray-100
                    transition-all duration-300 cursor-pointer mx-5">
                    Skills
                </a>
                <a href="#contact" className="bg-blue-600 rounded-md px-3 py-1.5 text-white 
                    hover:bg-blue-500 transition-all duration-500 cursor-pointer mx-5">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Navbar;