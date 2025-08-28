export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

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

    const emailData = {
      from,
      to,
      subject,
      html,
      ...(reply_to && { reply_to })
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error('Resend API error:', result)
      return res.status(500).json({ error: 'Failed to send email', details: result })
    }

    res.status(200).json({ success: true, messageId: result.id })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
