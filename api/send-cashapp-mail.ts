import { Resend } from 'resend'
import { cashappTemplate } from '../templates/cashapp-template.js'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, replyto, message } = req.body

    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const emailContent = cashappTemplate
      .replace(/\$name/g, name)
      .replace(/\$message/g, message)

    const emailOptions: any = {
      from: 'CashApp <noreply@mail.rapidtrade.org>',
      to: [email],
      subject: subject,
      html: emailContent,
    }

    if (replyto) {
      emailOptions.reply_to = replyto
    }

    const { data, error } = await resend.emails.send(emailOptions)

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
