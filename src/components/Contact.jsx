import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import './Contact.css'

export default function Contact() {
    const formRef = useRef(null)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [captchaOk, setCaptchaOk] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleCaptchaChange = (token) => {
        setCaptchaOk(!!token)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                alert('Mensaje enviado correctamente ✅')
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
            })
            .catch((error) => {
                console.error('Error al enviar:', error)
                alert('Hubo un error al enviar el mensaje ❌')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div id="contact" className="contact">
            <h2>Contacto</h2>
            <p>¿Quieres que trabajemos juntos? ¡Hablemos!</p>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    value={form.phone}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Mensaje"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                />

                <button type="submit" disabled={loading || !captchaOk}>
                    {loading ? 'Enviando...' : !captchaOk ? 'Verificar' : 'Enviar'}
                </button>
            </form>
        </div>
    )
}
