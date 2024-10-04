'use client'

import { useState } from 'react'
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import Input from "./ui/input.jsx"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { NextResponse } from 'next/server.js'

const Form = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [responseMessage, setResponseMessage] = useState('')

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setName(value);
//     setEmail(value);
//     setMessage(value);
//     console.log(name)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const data = await fetch('/api/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name: 'Judee', email: 'ebukajudee302@gmail.com', message: 'Hey, i am Jude' }),
//     });
    
//     const res = await data.json()
//     console.log(res)
//     setResponseMessage(res.message || 'Something went wrong');
//     setName('')
//     setEmail('')
//     setMessage('')
//   };

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log(data); // Success
        } else {
          console.error('Response was not JSON');
        }
      } else {
        console.error('Failed to send request', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <div className="relative flex items-center">
            <Input 
                type='name' 
                id='name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name' 
            />
            <User className="absolute right-6" size={20} />
        </div>

        <div className="relative flex items-center">
            <Input 
                type='email' 
                id='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' 
            />
            <MailIcon className="absolute right-6" size={20} />
        </div>

        <div className="relative flex items-center">
            <Textarea 
                type='text' 
                id='message' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Your Message' 
            />
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>

        <Button type="submit" className='flex items-center gap-x-1 max-w-[166px]'>
            Send Message
            <ArrowRightIcon size={20} />
        </Button>
    </form>
  )
}

export default Form