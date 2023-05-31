import React, { useState } from 'react';
import './contactForm.scss';
import { useForm, useFormState  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

export default function ContactForm() {


    const schema = yup.object({
        email: yup.string().min(1, 'must be at least 1 character long').required().matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, { message: 'email cannot be empty and must includer @ email provider dot com', excludeEmptyString: true }),
        subject: yup.string().min(1, 'must be at least 1 character long').required(),
        message: yup.string().min(1, 'must be at least 1 character long').max(1500, 'must not exceed 1500 characters')
    })
    
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema)}); 
    const { isSubmitting, isSubmitSuccessful, isSubmitted } = useFormState({ control });

    const onSubmit = handleSubmit((data) => {
        console.log("DATA: ", data)
        const templateParams = {
            from_name: "",
            from_email: "",
            message: ""
        };
        
    });

    // if(isSubmitting){
    //     return <>
    //         <p>Attempting to send your email...</p>
    //     </>
    // }
    
    // if (isSubmitSuccessful && isSubmitted === true) {
    //     return <>
    //         <div className="formContainer">
    //             <p>
    //                 Thanks for your email. I will reply within a few business days. I look
    //                 forward to chatting.
    //             </p>
    //             <button type='submit' onClick={() => reset()}>Send Another Message</button>
    //         </div>
    //     </>
    // }
    
    // if (isSubmitSuccessful === false && isSubmitted === true) {
    //     return <>
    //             <div className="formContainer">
    //                 <p>
    //                     Sorry an error occurred but you can email me at
    //                     SamuelTorres7539@gmail.com.
    //                 </p>
    //                 <button type='submit' onClick={() => reset()}>Send Another Message</button>
    //             </div>
    //     </>
    // }

    if(isSubmitted === false) {
        return<>
                <form 
                    className="formContainer" 
                    onSubmit={handleSubmit(onSubmit)} 
                    action="/api/sendEmail" 
                    method='post'
                >
                    {errors.email?.message}   
                    <input
                        className="textInput"
                        type='text' 
                        placeholder='return email address'
                        {...register("email")}
                    />
                    {errors.subject?.message}
                    <input
                        className="textInput"
                        type='text'
                        placeholder='subject'

                        {...register("subject")}
                    />
                    {errors.message?.message}
                    <textarea
                        className="textAreaInput"
                        cols={5}
                        wrap="hard"
                        placeholder='your message here...'
                        {...register("message")}
                    /> 
                    <button type='submit' onClick={onSubmit}>Submit</button>
                </form>
            </>
    } 
}