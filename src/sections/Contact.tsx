import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Window from '../components/UI/Window'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target: { name, value }}: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({... form, [name]: value})
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    try {
      await emailjs.send('service_e0zvybb', 'template_z0bu722', {
      from_name: form.name,
      to_name: 'Sebastian',
      from_email: form.email,
      to_email: 'rmsebastian2003@gmail.com',
      message: form.message
    }, "403BQFDUvUA8s1rNb")

    setLoading(false)
    alert("Your message has been sent")
    setForm({
      name: '',
      email: '',
      message: ''
    })
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
    }
  }

  return (
    <section className='c-space my-20' id='contact'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <div className='absolute inset-0 min-h-screen'>
          <Window />
        </div>
        <div className='contact-container'>
          <h3 className='head-text'>Let's talk</h3>
          <p className='x-lg text-white-600 mt-3'>Wether you are looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help!</p>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input type="text" name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='Johnny Appleseed' />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input type="email" name='name' value={form.email} onChange={handleChange} required className='field-input' placeholder='mail@domain.com' />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Your Message</span>
              <textarea name='message' value={form.name} onChange={handleChange} required rows={5} className='field-input' placeholder='What do you have in mind?' />
            </label>
            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
            </button>
          </form>
        </div>
        <h3 className='head-text'>Contact Me</h3>
      </div>
    </section>
  )
}

export default Contact