import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import './contactForm.scss';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        from_email: "",
        subject: "",
        message: ""
    })
    const [error, setError] = useState({
        from_email: "",
        subject: "",
        message: ""
      });
    const formSchema = yup.object({
        from_email: yup.string().min(1, 'must be at least 1 character long').required().matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, { message: 'email cannot be empty and must includer @ email provider dot com', excludeEmptyString: true }),
        subject: yup.string().min(1, 'must be at least 1 character long').required(),
        message: yup.string().min(1, 'must be at least 1 character long').max(1500, 'must not exceed 1500 characters')
    })
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [wasSubmitted, setWasSubmitted] = useState(false);

    useEffect(() => {
        setError({
            from_email: "fields cannot be empty, please type a message to enable button",
            subject: "fields cannot be empty, please type a message to enable button",
            message: "fields cannot be empty, please type a message to enable button"
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            ...formData
        };
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_PUBLIC_KEY)
        .then((res) => {
            setWasSubmitted(true);
            console.log('SUCCESS!', res.status, res.text)
            if(res.status === 200) {
                setIsSuccessful(true);
            }
        })
        .catch(err => {
            setWasSubmitted(true);
            setIsSuccessful(false);
            console.log('FAILED...', err)
        });
    };

    const validateChange = (e) => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            setError({
              ...error,
              [e.target.name]: "",
            });
          })
          .catch((err) => {
            setError({
              ...error,
              [e.target.name]: err.errors[0],
            });
          });
      };

    const handleChange = (e) => {
        validateChange(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
          });
    }

    if(wasSubmitted === false && isSuccessful === false){
        return <>
            <form 
                className="formContainer" 
                onSubmit={handleSubmit} 
                >
                    {error.from_email.length > 0 ? (
                        <p className="error">{error.from_email}</p>
                    ) : null}
                    <input
                        className="textInput"
                        type='text' 
                        placeholder='return email address'
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        />
                    {error.subject.length > 0 ? (
                        <p className="error">{error.subject}</p>
                    ) : null}
                    <input
                        className="textInput"
                        type='text'
                        placeholder='subject'
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        />
                    {error.message.length > 0 ? (
                        <p className="error">{error.message}</p>
                    ) : null}
                    <textarea
                        className="textAreaInput"
                        cols={5}
                        wrap="hard"
                        placeholder='your message here...'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    /> 
                    {error.message.length > 0 || error.from_email.length > 0 || error.subject.length > 0 ?
                        <button className='disabled-btn' disabled={true}>Submit</button> 
                        : 
                        <button className='enabled-btn' type="submit" onClick={handleSubmit}>Submit</button>
                    }
                </form>
        </>
    }

    if(wasSubmitted === true && isSuccessful === false) {
       return (
        <div className='formContainer'>
            <h1>Sorry an error occurred. Please, send me an email directly to SamuelTorres7539@gmail.com</h1>
        </div>
       ) 
    }

    if(wasSubmitted === true && isSuccessful === true) {
        return (
            <div className='formContainer'>
                <h1>Thank you for reaching out! I will be in contact with you as soon as possible! I look forward to chatting!</h1>
            </div>
        )
    }
}