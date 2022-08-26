import React, { useState } from 'react';
import '../styles/Contact.css'
import {validateEmail} from '../utils/helpers'

export default function Contact() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleInputChange = (e) => {
        const {target} = e
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(!validateEmail(email)) {
            setError("Email is invalid")
            return
        }

        console.log(`values`,name, message)

        if(!name && !message) {
            setError("Please fill in missing inputs")
            return
        }

        alert(`Message saved`)
        setEmail('')
        setName('')
        setMessage('')
        setError("")
    }

    const emptyInputCheck = (e) => {
        const inputType = e.target.name

        if(inputType === "name" && !name){
            setError('Please fill in the name field')
            return
        }
        if(inputType === "message" && !message){
            setError('Please fill in the message field')
            return
        }
        if(inputType === "email" && !email){
            setError('Please fill in the email field')
            return
        }
        setError("")
    }

    return (
        <div id="contact-container">
            <form>
                <h2>Enter name:</h2>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    onBlur={emptyInputCheck}
                    type="text"
                    placeholder="name"
                    />
                <h2>Enter email:</h2>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={emptyInputCheck}
                    type="email"
                    placeholder="email"
                    />
                <h2>Enter message:</h2>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={emptyInputCheck}
                    type="text"
                    placeholder="message"
                    id="message"
                    />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {error && (
                <div>
                <p className="error-text">{error}</p>
                </div>
            )}
        </div>
    )
}