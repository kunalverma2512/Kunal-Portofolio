import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
  // Check for credentials
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('CRITICAL: GMAIL_USER or GMAIL_APP_PASSWORD is missing in .env file');
    throw new Error('Email credentials missing');
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  // Define email options
  const mailOptions = {
    from: `"${options.name}" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: options.email,
    subject: `🚀 Portfolio Contact: ${options.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .header { background: linear-gradient(135deg, #020617 0%, #1e293b 100%); padding: 30px; text-align: center; border-bottom: 4px solid #dc2626; }
          .header h1 { color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; }
          .content { padding: 40px 30px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
          .info-item { margin-bottom: 15px; }
          .label { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 4px; display: block; }
          .value { font-size: 16px; color: #0f172a; font-weight: 500; }
          .message-box { background-color: #f8fafc; border-left: 4px solid #dc2626; padding: 20px; border-radius: 4px; margin-top: 20px; }
          .message-header { font-size: 14px; font-weight: 700; color: #334155; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
          .message-content { color: #334155; font-size: 16px; white-space: pre-wrap; }
          .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
          .tag { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; }
          .tag-general { background-color: #e2e8f0; color: #475569; }
          .tag-project { background-color: #dbeafe; color: #1e40af; }
          .tag-freelance { background-color: #dcfce7; color: #166534; }
          .details-section { margin-top: 30px; padding-top: 20px; border-top: 1px dashed #cbd5e1; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Connection Request</h1>
          </div>
          
          <div class="content">
            <div style="text-align: center; margin-bottom: 30px;">
              <span class="label">Reason for Contact</span>
              <span class="tag tag-${options.reason || 'general'}">${(options.reason || 'General').toUpperCase()}</span>
            </div>

            <div class="info-grid">
              <div class="info-item">
                <span class="label">Name</span>
                <span class="value">${options.name}</span>
              </div>
              <div class="info-item">
                <span class="label">Email</span>
                <a href="mailto:${options.email}" class="value" style="color: #dc2626; text-decoration: none;">${options.email}</a>
              </div>
              <div class="info-item">
                <span class="label">Phone</span>
                <span class="value">${options.phone || '—'}</span>
              </div>
              <div class="info-item">
                <span class="label">Location</span>
                <span class="value">${options.location || '—'}</span>
              </div>
            </div>

            <div class="details-section">
              <span class="label" style="margin-bottom: 10px;">Professional Details</span>
              <div class="info-grid">
                <div class="info-item">
                  <span class="label">Job Title</span>
                  <span class="value">${options.jobTitle || '—'}</span>
                </div>
                <div class="info-item">
                  <span class="label">Company</span>
                  <span class="value">${options.company || '—'}</span>
                </div>
              </div>
            </div>

            <div class="message-box">
              <div class="message-header">
                MESSAGE
              </div>
              <div class="message-content">${options.message}</div>
            </div>
          </div>

          <div class="footer">
            <p>Sent from Kunal Verma Portfolio • IP: ${options.ipAddress}</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;
