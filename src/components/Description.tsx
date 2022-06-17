const Description = () => {
    return (
        <div id="about">
            <div className="text-gray-900 font-bold text-5xl">
                About <span className="text-blue-600">Me</span>
            </div>

            <div className="text-blue-600 my-3 text-2xl">Hi! I'm Olivér</div>

            <div className="text-gray-900 font-bold text-xl">Full-Stack Web Developer</div>

            <div className="text-gray-800 font-thin text-justify">
                Hi, my name is Olivér, it's nice to e-meet you!<br />
                I'm a passionate Full-Stack Developer from Hungary, who mostly works with Java, 
                Go, and JavaScript. I build web servers, web applications, 
                and REST APIs using Spring and Spring Boot. <br />
                I also make client-side applications using mainly JavaScript and Svelte, 
                but I'm familiar with React as well.
            </div>
        </div>
    );
};

export default Description;