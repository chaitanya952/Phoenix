const nodemailer = require('nodemailer');

// Vercel serverless function: /api/contact (CommonJS for local dev stability)
/** @param {import('@vercel/node').VercelRequest} req @param {import('@vercel/node').VercelResponse} res */
module.exports = async function handler(req, res) {
  // CORS headers (allow all origins and requested headers)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  const requestHeaders = (req.headers['access-control-request-headers'] || '*');
  res.setHeader('Access-Control-Allow-Headers', requestHeaders);
  res.setHeader('Access-Control-Max-Age', '86400'); // cache preflight 24h
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

    // Get email configuration from env
    const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail';
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const TO_EMAIL = process.env.TO_EMAIL || 'karchaitanya69@gmail.com';
    const FROM_EMAIL = process.env.FROM_EMAIL || EMAIL_USER;

    if (!EMAIL_USER || !EMAIL_PASS) {
      return res.status(500).json({ error: 'Email server not configured' });
    }

    // Create transporter based on EMAIL_SERVICE
    let transporter;
    if (EMAIL_SERVICE === 'gmail') {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      });
    } else {
      // Fallback to SMTP configuration if needed
      const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
      const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      });
    }

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
    console.log('Email sent successfully');
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    const reason = (err && err.message) || (err && err.toString && err.toString()) || 'Unknown error';
    return res.status(500).json({ error: `Failed to send message: ${reason}` });
  }
};