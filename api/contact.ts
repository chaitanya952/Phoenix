import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Vercel serverless function: /api/contact
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Some runtimes may not auto-parse JSON; support string body
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const {
      name,
      email,
      company,
      phone,
      subject,
      message,
      inquiryType,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Required env vars (set in Vercel Project Settings -> Environment Variables)
    const SMTP_HOST = process.env.SMTP_HOST as string;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER as string;
    const SMTP_PASS = process.env.SMTP_PASS as string;
    const TO_EMAIL = (process.env.TO_EMAIL as string) || 'bda@phoenixplastowares.com';
    const FROM_EMAIL = (process.env.FROM_EMAIL as string) || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({ error: 'Email server not configured' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const html = `
      <div style="font-family:Arial,sans-serif;">
        <h2>New Website Inquiry${inquiryType ? ` (${inquiryType})` : ''}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <hr/>
        <p style="white-space:pre-wrap;">${message}</p>
      </div>
    `;

    const mailOptions = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subject || `New ${inquiryType || 'general'} inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || '-'}\nPhone: ${phone || '-'}\nSubject: ${subject || '-'}\nType: ${inquiryType || 'general'}\n\n${message}`,
      html,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    const reason = err?.message || err?.toString?.() || 'Unknown error';
    return res.status(500).json({ error: `Failed to send message: ${reason}` });
  }
}