import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { from, to, subject, html, reply_to } = req.body

    if (!from || !to || !subject || !html) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      ...(reply_to && { reply_to })
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email', details: error })
    }

    res.status(200).json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
