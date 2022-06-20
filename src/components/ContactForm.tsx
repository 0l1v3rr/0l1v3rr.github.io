const ContactForm = () => {
    return (
        <div className="mt-2">
            <div className="flex flex-col indent-1">
                <span className="text-emerald-400">Name or Email:</span>
                <input placeholder="John Doe" className="text-gray-400 outline-none 
                    bg-white/[0.1] placeholder:text-gray-700 px-2 py-1 rounded-md w-56
                    border border-solid border-transparent active:border-emerald-400/[0.5] 
                    focus:border-emerald-400/[0.5] transition-all duration-300" type="text" />
            </div>

            <div className="flex flex-col indent-1 mt-2">
                <span className="text-emerald-400">Message:</span>
                <textarea placeholder="This is my extremely important message. :D" 
                    className="text-gray-400 outline-none 
                    bg-white/[0.1] placeholder:text-gray-700 px-2 py-1 rounded-md w-56
                    border border-solid border-transparent active:border-emerald-400/[0.5] 
                    focus:border-emerald-400/[0.5] transition-all duration-300" rows={4}>

                </textarea>
            </div>

            <button type="button" className="rounded-md text-gray-200 mt-2 
                transition-all duration-300 hover:underline">Submit</button>

            {/*<div className="text-green-400">Your message has been sent successfully.</div>
            <div className="text-red-400">An unknown error happend.</div>*/}
        </div>
    );
}

export default ContactForm;