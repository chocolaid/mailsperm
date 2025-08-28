import { Link } from 'react-router'

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Mail Sender Application</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
        Send professional emails using CashApp and Coinbase templates
      </p>
      
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ 
          border: '1px solid #00D632', 
          borderRadius: '8px', 
          padding: '2rem', 
          minWidth: '250px',
          backgroundColor: '#f8fff8'
        }}>
          <h2 style={{ color: '#00D632', marginBottom: '1rem' }}>CashApp</h2>
          <p style={{ marginBottom: '1.5rem' }}>Send CashApp payment notifications with custom messages</p>
          <Link 
            to="/about" 
            style={{ 
              display: 'inline-block',
              backgroundColor: '#00D632', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              textDecoration: 'none', 
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Send CashApp Mail
          </Link>
        </div>
        
        <div style={{ 
          border: '1px solid #00D4AA', 
          borderRadius: '8px', 
          padding: '2rem', 
          minWidth: '250px',
          backgroundColor: '#f8fffe'
        }}>
          <h2 style={{ color: '#00D4AA', marginBottom: '1rem' }}>Crypto.com</h2>
          <p style={{ marginBottom: '1.5rem' }}>Send Crypto.com transaction notifications with crypto details</p>
          <Link 
            to="/contact" 
            style={{ 
              display: 'inline-block',
              backgroundColor: '#00D4AA', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              textDecoration: 'none', 
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Send Crypto.com Mail
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Features</h3>
        <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          <li>Professional email templates</li>
          <li>Variable substitution ($name, $message, $amount, $currency)</li>
          <li>Responsive design</li>
          <li>Real-time form validation</li>
          <li>Success/error notifications</li>
        </ul>
      </div>
    </div>
  )
}