import Terminal from "./containers/Terminal";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
    const [divClasses, setDivClasses] = useState('w-full h-full translate-y-full scale-0 transition-all duration-300');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        setTimeout(() => {
            setDivClasses('w-full h-full scale-1 translate-y-0 transition-all duration-300');
        }, 200);
    });

    return (
        <div className="overflow-hidden select-none w-screen h-screen sm:px-6 sm:py-4 
            md:px-16 md:py-8 lg:px-32 lg:py-14 bg-sur">
            <Router>
                <div className={divClasses}>
                    {isLoaded && <Terminal />}
                </div>
            </Router>
        </div>
    );
}

export default App;