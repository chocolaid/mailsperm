import { Resend } from 'resend'
import { cryptoTemplate } from '../templates/crypto-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message, amount, currency, subject } = req.body

    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const emailContent = cryptoTemplate
      .replace(/\$name/g, name)
      .replace(/\$message/g, message)
      .replace(/\$amount/g, amount || '0.00')
      .replace(/\$currency/g, currency || 'BTC')

    const { data, error } = await resend.emails.send({
      from: 'Crypto.com <noreply@mail.rapidtrade.org',
      to: [email],
      subject: subject,
      html: emailContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    res.status(200).json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
