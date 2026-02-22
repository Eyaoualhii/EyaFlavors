import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        const { name, email, subject, message } = formData
        const bodyContent = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

        // Use a direct Gmail Compose link since mailto: is causing issues
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=oualhieya02@gmail.com&su=${encodeURIComponent(subject || 'Contact from Eya Flavors')}&body=${encodeURIComponent(bodyContent)}`

        window.open(gmailLink, '_blank')

        setStatus('sent')
        setFormData({ name: '', email: '', subject: '', message: '' })

        // Reset status after a few seconds
        setTimeout(() => setStatus(''), 5000)
    }

    return (
        <div className="bg-white text-brand-dark font-sans antialiased overflow-x-hidden selection:bg-brand-accentLight selection:text-brand-dark" >
            <Navigation />
            <Header />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 md:py-24">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted mb-12">
                    <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-brand-dark">Contact</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <div>
                        <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-brand-muted block mb-3">
                            Get in touch
                        </span>
                        <h1 className="font-serif italic text-5xl md:text-6xl text-brand-dark font-light mb-8">
                            Let's Connect
                        </h1>
                        <div className="h-[1px] w-16 bg-brand-accent mb-8" />

                        <p className="text-brand-muted leading-loose mb-10">
                            Have a question about a recipe? Want to collaborate or just say hi?
                            I'd love to hear from you! Fill out the form or reach out through my social media.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-accent shrink-0">
                                    <Icon icon="lucide:mail" width={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-1">Email</h3>
                                    <p className="text-brand-muted text-sm tracking-wide">oualhieya02@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-accent shrink-0">
                                    <Icon icon="lucide:instagram" width={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-1">Instagram</h3>
                                    <p className="text-brand-muted text-sm tracking-wide">@eya_flavors</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-accentLight flex items-center justify-center text-brand-accent shrink-0">
                                    <Icon icon="lucide:youtube" width={20} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-1">YouTube</h3>
                                    <p className="text-brand-muted text-sm tracking-wide">Eya Flavors</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-brand-grayBg border border-brand-border p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark block mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark block mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark block mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors"
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark block mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-brand-border px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full text-[10px] font-bold tracking-[0.3em] uppercase py-4 transition-colors duration-300 ${status === 'sent' ? 'bg-green-600 text-white' : 'bg-brand-dark text-white hover:bg-brand-accent'}`}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
