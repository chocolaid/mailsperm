'use client'

import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      color: '#00ff00',
      fontFamily: '"Courier New", "Monaco", "Menlo", monospace'
    }}>
      {/* Matrix-style background effect */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 20% 50%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 255, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)
        `,
        zIndex: -1
      }} />
      
      <nav style={{
        padding: '1rem 2rem',
        borderBottom: '2px solid #00ff00',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link 
              href="/" 
              style={{ 
                color: '#00ff00', 
                textDecoration: 'none', 
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow = '0 0 20px rgba(0, 255, 0, 0.8)'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.5)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              &gt; MAIL_SENDER.exe
            </Link>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link 
                href="/cashapp" 
                style={{ 
                  color: '#00ff00', 
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  border: '1px solid #00ff00',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(0, 255, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 0, 0.2)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 0, 0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                [CASHAPP]
              </Link>
              <Link 
                href="/crypto" 
                style={{ 
                  color: '#00ff00', 
                  textDecoration: 'none',
                  padding: '0.5rem 1rem',
                  border: '1px solid #00ff00',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  background: 'rgba(0, 255, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 0, 0.2)'
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 0, 0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                [CRYPTO]
              </Link>
            </div>
          </div>
          <div style={{ 
            fontSize: '0.8rem', 
            color: '#00ff00', 
            opacity: 0.7,
            fontFamily: 'monospace'
          }}>
            STATUS: ONLINE
          </div>
        </div>
      </nav>
      
      <main style={{ 
        padding: '2rem',
        minHeight: 'calc(100vh - 80px)',
        position: 'relative',
        zIndex: 1,
        maxWidth: '100vw',
        overflow: 'hidden'
      }}>
        {children}
      </main>
    </div>
  )
}
