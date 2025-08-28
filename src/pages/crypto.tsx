import { useState } from 'react'
import { cryptoTemplate } from '../../templates/crypto-template'

export default function Crypto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    replyto: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      // Prepare email content with template
      const emailContent = cryptoTemplate
        .replace(/\$name/g, formData.name)
        .replace(/\$message/g, formData.message)

      // Prepare email data for Resend API
      const emailData = {
        from: 'Crypto.com <noreply@mail.rapidtrade.org>',
        to: [formData.email],
        subject: formData.subject,
        html: emailContent,
        ...(formData.replyto && { reply_to: formData.replyto })
      }

      // Call Resend API directly
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', replyto: '', message: '' })
      } else {
        console.error('Resend API error:', result)
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 1rem' }}>
      {/* Terminal header */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid #00ff00',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          gap: '8px'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27ca3f' }}></div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <h1 style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            margin: '0 0 0.5rem 0',
            color: '#00ff00',
            textShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
            fontFamily: 'monospace'
          }}>
            &gt; CRYPTO_PROTOCOL.exe
          </h1>
          <div style={{
            fontSize: '1rem',
            color: '#00ff00',
            opacity: 0.8,
            fontFamily: 'monospace'
          }}>
            [INITIALIZING...] Cryptocurrency transaction delivery system
          </div>
        </div>
      </div>

      {/* Form container */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.7)',
        border: '2px solid #00ff00',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 0 25px rgba(0, 255, 0, 0.2)'
      }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="name" style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(0, 255, 0, 0.3)'
            }}>
              &gt; RECIPIENT_NAME:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                border: '2px solid #00ff00', 
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#00ff00',
                fontFamily: 'monospace',
                fontSize: '1rem',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(0, 255, 0, 0.3)'
            }}>
              &gt; RECIPIENT_EMAIL:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                border: '2px solid #00ff00', 
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#00ff00',
                fontFamily: 'monospace',
                fontSize: '1rem',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
              }}
            />
          </div>

          <div>
            <label htmlFor="subject" style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(0, 255, 0, 0.3)'
            }}>
              &gt; EMAIL_SUBJECT:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Crypto.com Transaction Notification"
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                border: '2px solid #00ff00', 
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#00ff00',
                fontFamily: 'monospace',
                fontSize: '1rem',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
              }}
            />
          </div>

          <div>
            <label htmlFor="replyto" style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(0, 255, 0, 0.3)'
            }}>
              &gt; REPLY_TO_EMAIL [OPTIONAL]:
            </label>
            <input
              type="email"
              id="replyto"
              name="replyto"
              value={formData.replyto}
              onChange={handleChange}
              placeholder="reply@example.com"
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                border: '2px solid #00ff00', 
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#00ff00',
                fontFamily: 'monospace',
                fontSize: '1rem',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              color: '#00ff00',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(0, 255, 0, 0.3)'
            }}>
              &gt; MESSAGE_CONTENT:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Enter your message here..."
              style={{ 
                width: '100%', 
                padding: '0.8rem', 
                border: '2px solid #00ff00', 
                borderRadius: '4px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: '#00ff00',
                fontFamily: 'monospace',
                fontSize: '1rem',
                resize: 'vertical',
                boxShadow: '0 0 10px rgba(0, 255, 0, 0.2)'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              padding: '1rem 2rem',
              background: isLoading 
                ? 'rgba(0, 255, 0, 0.3)' 
                : 'linear-gradient(45deg, #00ff00, #00cc00)',
              color: isLoading ? '#00ff00' : '#000',
              border: '2px solid #00ff00',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.6)'
                e.currentTarget.style.transform = 'scale(1.02)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.3)'
                e.currentTarget.style.transform = 'scale(1)'
              }
            }}
          >
            {isLoading ? '[PROCESSING...]' : '[EXECUTE_DELIVERY]'}
          </button>
        </form>

        {status === 'success' && (
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            background: 'rgba(0, 255, 0, 0.1)', 
            color: '#00ff00', 
            borderRadius: '4px',
            border: '1px solid #00ff00',
            fontFamily: 'monospace',
            textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
            boxShadow: '0 0 15px rgba(0, 255, 0, 0.2)'
          }}>
            ✓ [SUCCESS] Mail delivery completed successfully!
          </div>
        )}

        {status === 'error' && (
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            background: 'rgba(255, 0, 0, 0.1)', 
            color: '#ff0000', 
            borderRadius: '4px',
            border: '1px solid #ff0000',
            fontFamily: 'monospace',
            textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
            boxShadow: '0 0 15px rgba(255, 0, 0, 0.2)'
          }}>
            ✗ [ERROR] Mail delivery failed. Please retry operation.
          </div>
        )}
      </div>
    </div>
  )
}