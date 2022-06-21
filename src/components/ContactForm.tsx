import { useState } from "react";

const ContactForm = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    return (
        <div className="mt-2">
            <div className="flex flex-col indent-1">
                <span className="text-emerald-400">Subject:</span>
                <input placeholder="Job Opportunity" className="text-gray-400 outline-none 
                    bg-white/[0.1] placeholder:text-gray-700 px-2 py-1 rounded-md w-56
                    border border-solid border-transparent active:border-emerald-400/[0.5] 
                    focus:border-emerald-400/[0.5] transition-all duration-300" type="text" 
                    value={subject} onChange={e => setSubject(e.target.value)} />
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

            <a target="_blank" href={`https://mail.google.com/mail/?view=cm&fs=1&to=oliver.mrakovics@gmail.com&su=${subject}&body=${message}`} type="button" className="rounded-md text-gray-200 mt-2 
                transition-all duration-300 hover:underline">Submit</a>
        </div>
    );
}

export default ContactForm;