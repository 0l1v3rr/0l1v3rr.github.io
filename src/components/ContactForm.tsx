import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = () => {
        axios.post('https://discord.com/api/webhooks/987716233690484779/8PAgX-gq81c6QJ7vToUyXrhZQWR32r3J1P9ji-eHIBaDJ1i33697hnecT0YUSUF_uDBc', {
            content: `**${name}**:\`\`\`${message}\`\`\``
        }).then(_ => {
            setErrorMessage('');
            setSuccessMessage('Your message has been sent successfully.');
        }).catch(err => {
            setErrorMessage('An unknown error happend.');
            setSuccessMessage('');
        });

        setName('');
        setMessage('');
    };
    
    return (
        <div className="mt-2">
            <div className="flex flex-col indent-1">
                <span className="text-emerald-400">Name or Email:</span>
                <input placeholder="John Doe" className="text-gray-400 outline-none 
                    bg-white/[0.1] placeholder:text-gray-700 px-2 py-1 rounded-md w-56
                    border border-solid border-transparent active:border-emerald-400/[0.5] 
                    focus:border-emerald-400/[0.5] transition-all duration-300" type="text" 
                    value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div className="flex flex-col indent-1 mt-2">
                <span className="text-emerald-400">Message:</span>
                <textarea placeholder="This is my extremely important message. :D" 
                    className="text-gray-400 outline-none 
                    bg-white/[0.1] placeholder:text-gray-700 px-2 py-1 rounded-md w-56
                    border border-solid border-transparent active:border-emerald-400/[0.5] 
                    focus:border-emerald-400/[0.5] transition-all duration-300" rows={4} 
                    value={message} onChange={e => setMessage(e.target.value)} />
            </div>

            <button type="button" className="rounded-md text-gray-200 mt-2 
                transition-all duration-300 hover:underline" onClick={handleSubmit}>Submit</button>

            {successMessage !== '' && <div className="text-green-400">{successMessage}</div>}
            {errorMessage !== '' && <div className="text-red-400">{errorMessage}</div>}
        </div>
    );
}

export default ContactForm;