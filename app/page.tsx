'use client'

import Link from "next/link";

export default function Home() {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 1rem' }}>
      {/* Terminal-style header */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid #00ff00',
        borderRadius: '8px',
        padding: '2rem',
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
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            margin: '0 0 1rem 0',
            color: '#00ff00',
            textShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
            fontFamily: 'monospace'
          }}>
            &gt; MAIL_SENDER.exe
          </h1>
          <div style={{
            fontSize: '1.1rem',
            color: '#00ff00',
            opacity: 0.8,
            marginBottom: '1.5rem',
            fontFamily: 'monospace'
          }}>
            [INITIALIZING...] Professional email delivery system
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: '#00ff00',
            opacity: 0.6,
            fontFamily: 'monospace'
          }}>
            Status: READY | Protocol: SMTP | Encryption: ENABLED
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* CashApp Module */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.7)',
          border: '2px solid #00ff00',
          borderRadius: '8px',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 0 25px rgba(0, 255, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 255, 0, 0.4)'
          e.currentTarget.style.transform = 'translateY(-5px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.2)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '0.8rem',
            color: '#00ff00',
            opacity: 0.6,
            fontFamily: 'monospace'
          }}>
            [MODULE_001]
          </div>
          
          <h2 style={{
            color: '#00ff00',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontFamily: 'monospace',
            textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
          }}>
            &gt; CASHAPP_PROTOCOL
          </h2>
          
          <div style={{
            color: '#00ff00',
            opacity: 0.8,
            marginBottom: '1.5rem',
            lineHeight: '1.6',
            fontFamily: 'monospace'
          }}>
            Execute payment notification delivery<br/>
            Target: CashApp infrastructure<br/>
            Encryption: AES-256
          </div>
          
          <Link 
            href="/cashapp" 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #00ff00, #00cc00)',
              color: '#000',
              padding: '0.8rem 2rem',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.6)'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.3)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            [EXECUTE]
          </Link>
        </div>

        {/* Crypto.com Module */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.7)',
          border: '2px solid #00ff00',
          borderRadius: '8px',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 0 25px rgba(0, 255, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 255, 0, 0.4)'
          e.currentTarget.style.transform = 'translateY(-5px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.2)'
          e.currentTarget.style.transform = 'translateY(0)'
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '0.8rem',
            color: '#00ff00',
            opacity: 0.6,
            fontFamily: 'monospace'
          }}>
            [MODULE_002]
          </div>
          
          <h2 style={{
            color: '#00ff00',
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontFamily: 'monospace',
            textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
          }}>
            &gt; CRYPTO_PROTOCOL
          </h2>
          
          <div style={{
            color: '#00ff00',
            opacity: 0.8,
            marginBottom: '1.5rem',
            lineHeight: '1.6',
            fontFamily: 'monospace'
          }}>
            Execute transaction notification delivery<br/>
            Target: Crypto.com infrastructure<br/>
            Encryption: RSA-2048
          </div>
          
          <Link 
            href="/crypto" 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #00ff00, #00cc00)',
              color: '#000',
              padding: '0.8rem 2rem',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 0, 0.6)'
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.3)'
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            [EXECUTE]
          </Link>
        </div>
      </div>

      {/* System info panel */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid #00ff00',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)'
      }}>
        <h3 style={{
          color: '#00ff00',
          marginBottom: '1.5rem',
          fontSize: '1.3rem',
          fontFamily: 'monospace',
          textShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
        }}>
          &gt; SYSTEM_SPECIFICATIONS
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          fontFamily: 'monospace'
        }}>
          <div>
            <div style={{ color: '#00ff00', opacity: 0.8, marginBottom: '0.5rem' }}>PROTOCOLS:</div>
            <div style={{ color: '#00ff00', opacity: 0.6, fontSize: '0.9rem' }}>
              • SMTP/ESMTP<br/>
              • TLS 1.3<br/>
              • OAuth 2.0
            </div>
          </div>
          
          <div>
            <div style={{ color: '#00ff00', opacity: 0.8, marginBottom: '0.5rem' }}>FEATURES:</div>
            <div style={{ color: '#00ff00', opacity: 0.6, fontSize: '0.9rem' }}>
              • Template engine<br/>
              • Variable substitution<br/>
              • Real-time validation
            </div>
          </div>
          
          <div>
            <div style={{ color: '#00ff00', opacity: 0.8, marginBottom: '0.5rem' }}>SECURITY:</div>
            <div style={{ color: '#00ff00', opacity: 0.6, fontSize: '0.9rem' }}>
              • End-to-end encryption<br/>
              • Rate limiting<br/>
              • Input sanitization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
