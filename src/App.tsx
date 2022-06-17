import About from "./containers/About";
import Home from "./containers/Home";

const App = () => {
    return (
        <div className="overflow-x-hidden scroll-smooth select-none snap-mandatory snap-y">
            <Home />
            <About />
        </div>
    );
}

export default App;