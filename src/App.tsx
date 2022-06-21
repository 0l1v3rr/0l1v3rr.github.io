import Terminal from "./containers/Terminal";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
    const [currentBottom, setCurrentBottom] = useState(1000);
    const [currentScale, setCurrentScale] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setCurrentBottom(0);
            setCurrentScale(100);
        }, 500);
    });

    return (
        <div className="overflow-hidden select-none w-screen h-screen sm:px-6 sm:py-4 
            md:px-16 md:py-8 lg:px-32 lg:py-14 bg-sur">
            <Router>
                <div className={`translate-y-[${currentBottom}px] scale-${currentScale} 
                    transition-all duration-[400ms] w-full h-full`}>
                    <Terminal />
                </div>
            </Router>
        </div>
    );
}

export default App;