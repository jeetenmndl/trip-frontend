import { useState } from 'react'
import { Mail } from 'lucide-react'
import api from '@/api/axios'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await api.post("/contacts", formData);
      console.log(response);
      if(response.status === 201){
        toast.success("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      }else{
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message || "An error occurred while sending message. Please try again.");
    } finally{
        setIsSubmitting(false)
    }
    
  }

  return (
    <section className="w-full bg-blue-50/50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-contact-heading mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-contact-subtext font-light">
            Have questions about our trips? We&apos;d love to hear from you.
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors"
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2.5 text-sm bg-white border rounded-md focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-md hover:bg-primary/60 disabled:opacity-50"
            >
              <Mail size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
