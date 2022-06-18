import Terminal from "./containers/Terminal";

const App = () => {
    return (
        <div className="overflow-hidden select-none w-screen h-screen sm:px-6 sm:py-4 
            md:px-16 md:py-8 lg:px-32 lg:py-14 bg-sur">
            <Terminal />
        </div>
    );
}

export default App;