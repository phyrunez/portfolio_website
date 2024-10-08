'use client'

import { useState } from 'react'
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import Input from "./ui/input.jsx"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { NextResponse } from 'next/server.js'
import toast from 'react-hot-toast'

const Form = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      console.log(response.body)

      if (response.ok) {
        const result = await response.json();
        toast.success(`${result.message}, I have gotten your message and will reach out to you shortly, Thanks.`)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        toast.error('Failed to send message:', 500);
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