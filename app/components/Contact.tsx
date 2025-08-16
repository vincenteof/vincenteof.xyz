'use client'

import React, { useState } from 'react'
import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { LuSend } from 'react-icons/lu'
import { Tooltip } from 'react-tooltip'

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Implement your email sending logic here
      console.log('Form submitted:', formData)
      // Reset form after successful submission
      setFormData({ email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                data-tooltip-id="github-tooltip"
              >
                <AiOutlineGithub size={24} />
              </a>
              <Tooltip id="github-tooltip" content="GitHub" place="top" />
              
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                data-tooltip-id="twitter-tooltip"
              >
                <RiTwitterXLine size={24} />
              </a>
              <Tooltip id="twitter-tooltip" content="Twitter" place="top" />
              
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                data-tooltip-id="linkedin-tooltip"
              >
                <AiOutlineLinkedin size={24} />
              </a>
              <Tooltip id="linkedin-tooltip" content="LinkedIn" place="top" />
              
              <a
                href="mailto:your-email@example.com"
                className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                data-tooltip-id="email-tooltip"
              >
                <AiOutlineMail size={24} />
              </a>
              <Tooltip id="email-tooltip" content="Email" place="top" />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-sm rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:cursor-pointer text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <LuSend className="text-white" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
