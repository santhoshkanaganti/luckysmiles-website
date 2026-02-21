import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, service, message } = await req.json()

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const contactEmail = process.env.CONTACT_EMAIL
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'

    if (!contactEmail) {
      console.error('CONTACT_EMAIL environment variable is not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // Send notification to the dental office
    await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `New Appointment Request – ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px;">
          <div style="background: #0a2540; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #c9a84c; font-size: 22px; margin: 0;">Lucky Smiles Dentistry</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px;">New Contact Form Submission</p>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #0a2540; font-size: 18px; margin-top: 0;">Patient Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #111827;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #1a8fa0;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #111827;">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Service</td><td style="padding: 8px 0; color: #111827;">${service || 'Not specified'}</td></tr>
            </table>
            ${message ? `
            <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 6px; border-left: 3px solid #1a8fa0;">
              <p style="margin: 0 0 6px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6;">${message}</p>
            </div>` : ''}
            <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${email}" style="background: #1a8fa0; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 13px;">Reply to Patient</a>
            </div>
          </div>
        </div>
      `,
    })

    // Send confirmation to the patient
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'We received your message – Lucky Smiles Dentistry',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px;">
          <div style="background: #0a2540; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #c9a84c; font-size: 22px; margin: 0;">Lucky Smiles Dentistry</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px;">Lewisville, TX</p>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #0a2540;">Hi ${firstName}, we got your message! 👋</h2>
            <p style="color: #6b7280; line-height: 1.7;">Thank you for reaching out to Lucky Smiles Dentistry. We've received your request and a member of our team will be in touch with you within one business day.</p>
            <p style="color: #6b7280; line-height: 1.7;">If you need to reach us sooner, feel free to call us directly:</p>
            <p style="font-size: 20px; font-weight: bold; color: #0a2540;">📞 (972) 315-9214</p>
            <div style="margin-top: 24px; padding: 16px; background: #e6f7f9; border-radius: 6px;">
              <p style="margin: 0; font-size: 13px; color: #0e6e7d;"><strong>Office Hours:</strong> Monday–Friday 9:00am–5:00pm | Saturday by appointment</p>
            </div>
            <p style="color: #9ca3af; font-size: 13px; margin-top: 28px;">We look forward to seeing you soon!</p>
            <p style="color: #9ca3af; font-size: 13px; margin: 4px 0;">— The Lucky Smiles Team</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
