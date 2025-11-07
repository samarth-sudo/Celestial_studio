import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Add your email service integration here
    // Examples:
    // - Send to Mailchimp
    // - Store in database
    // - Send confirmation email via SendGrid/Resend
    // - Add to waiting list in Airtable/Notion

    console.log('Beta signup:', { email, name })

    // For now, just return success
    return NextResponse.json(
      { message: 'Successfully signed up for beta!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Beta signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
