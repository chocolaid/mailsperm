import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { from, to, subject, html, reply_to } = await request.json()

    if (!from || !to || !subject || !html) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'Mail Sender System',
        'List-Unsubscribe': '<mailto:unsubscribe@rapidtrade.org>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
      },
      tags: [
        {
          name: 'category',
          value: 'transactional'
        },
        {
          name: 'type',
          value: 'notification'
        }
      ],
      ...(reply_to && { reply_to })
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}