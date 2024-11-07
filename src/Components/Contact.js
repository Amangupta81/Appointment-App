import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message Sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <div className="contact-contact">
        <div className='container-conatct'>
            <h2 className='contact-h2'>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Name:</label>
                    <input
                        className='contact-input-contact'
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group-contact'>
                    <label>Email:</label>
                    <input
                        className='contact-input'
                        type="email"
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group-contact'>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        placeholder='Message'
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='submit-button-contact'>Send Message</button>
            </form>
        </div>
        </div>
    );
};

export default Contact;
