// server.js - Fixed Zoho SMTP Configuration
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// Load server-side env from a dedicated file
try { require('dotenv').config({ path: '.env.server' }); } catch (_) {}

const app = express();
const PORT = process.env.PORT || 5000;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '*')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    if (ALLOWED_ORIGINS.includes('*') || ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'), false);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

// Health check
app.get('/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// POST /api/contact - Fixed Zoho SMTP configuration
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      subject,
      message,
      inquiryType,
    } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const EMAIL_SERVICE = process.env.EMAIL_SERVICE; // e.g., 'gmail'
    const EMAIL_USER = process.env.EMAIL_USER || process.env.SMTP_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS || process.env.SMTP_PASS;
    const TO_EMAIL = process.env.TO_EMAIL || EMAIL_USER;
    const FROM_EMAIL = process.env.FROM_EMAIL || EMAIL_USER;

    if (!EMAIL_USER || !EMAIL_PASS) {
      return res.status(500).json({ error: 'Email not configured' });
    }

    // Email transporter (prefer Gmail via service)
    const transporter = nodemailer.createTransport(
      EMAIL_SERVICE
        ? {
            service: EMAIL_SERVICE,
            auth: { user: EMAIL_USER, pass: EMAIL_PASS },
          }
        : {
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT || 587),
            secure: false, // Use STARTTLS for port 587
            auth: { user: EMAIL_USER, pass: EMAIL_PASS },
          }
    );

    // Test connection before sending
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return res.status(500).json({ 
        error: 'SMTP server connection failed', 
        details: verifyError.message 
      });
    }

    const html = `
      <div style="font-family:Arial,sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Website Inquiry</h1>
          ${inquiryType ? `<p style="color: #f0f0f0; margin: 10px 0 0 0;">Type: ${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)}</p>` : ''}
        </div>
        
        <div style="padding: 30px; background: white;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #555; width: 120px;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></td>
              </tr>
              ${company ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Company:</td>
                  <td style="padding: 10px 0; color: #333;">${company}</td>
                </tr>
              ` : ''}
              ${phone ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
                  <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></td>
                </tr>
              ` : ''}
              ${subject ? `
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 10px 0; font-weight: bold; color: #555;">Subject:</td>
                  <td style="padding: 10px 0; color: #333;">${subject}</td>
                </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
              <p style="white-space: pre-wrap; line-height: 1.6; color: #333; margin: 0;">${message}</p>
            </div>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This inquiry was submitted through the Phoenix Plastowares website contact form.
          </p>
          <p style="margin: 10px 0 0 0; color: #666; font-size: 12px;">
            Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Phoenix Plastowares Website" <${FROM_EMAIL}>`,
      to: TO_EMAIL.split(',').map(email => email.trim()),
      replyTo: email,
      subject: subject || `New ${inquiryType || 'general'} inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\nType: ${inquiryType || 'general'}\n\nMessage:\n${message}\n\n---\nSubmitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
      html,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    
    return res.json({ 
      ok: true, 
      messageId: result.messageId,
      message: 'Email sent successfully' 
    });
    
  } catch (err) {
    console.error('Contact API error:', err);
    const reason = err?.message || String(err);
    
    // Provide more specific error messages
    let userMessage = 'Failed to send message';
    if (reason.includes('Invalid login')) {
      userMessage = 'Email authentication failed. Please check SMTP credentials.';
    } else if (reason.includes('timeout')) {
      userMessage = 'Email server timeout. Please try again.';
    } else if (reason.includes('Network')) {
      userMessage = 'Network error. Please check your connection.';
    }
    
    return res.status(500).json({ 
      error: `${userMessage}: ${reason}`,
      timestamp: new Date().toISOString()
    });
  }
});

// GET /api/fetch - proxy fetch from your deployed site
const PROXY_BASE = (process.env.PROXY_BASE || 'https://phoenix-7xv9.vercel.app').replace(/\/$/, '');

function isSameHost(fullUrl, baseUrl) {
  try {
    const a = new URL(fullUrl);
    const b = new URL(baseUrl);
    return a.host === b.host && a.protocol === b.protocol;
  } catch {
    return false;
  }
}

app.get('/api/fetch', async (req, res) => {
  try {
    const { path: pathParam, url } = req.query;

    let target = PROXY_BASE;
    if (typeof pathParam === 'string') {
      target = PROXY_BASE + (pathParam.startsWith('/') ? pathParam : `/${pathParam}`);
    } else if (typeof url === 'string' && url.trim()) {
      if (!isSameHost(url, PROXY_BASE)) {
        return res.status(400).json({ error: 'Only same-host URLs allowed' });
      }
      target = url;
    }

    const r = await fetch(target, { method: 'GET' });
    const contentType = r.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const data = await r.json();
      return res.status(r.status).json(data);
    } else {
      const text = await r.text();
      res.setHeader('content-type', contentType || 'text/plain; charset=utf-8');
      return res.status(r.status).send(text);
    }
  } catch (err) {
    console.error('Fetch proxy error:', err);
    const reason = err?.message || String(err);
    return res.status(500).json({ error: `Proxy failed: ${reason}` });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
  if (process.env.EMAIL_SERVICE) {
    console.log(`📧 Email Service: ${process.env.EMAIL_SERVICE}`);
  } else {
    console.log(`📧 SMTP Host: ${process.env.SMTP_HOST || 'smtp.gmail.com'}`);
    console.log(`📧 SMTP Port: ${process.env.SMTP_PORT || 587}`);
  }
  console.log(`📧 From Email: ${process.env.FROM_EMAIL || process.env.EMAIL_USER || process.env.SMTP_USER || 'N/A'}`);
});