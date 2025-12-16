import nodemailer from 'nodemailer';

/**
 * Send email for newsletter (Admin Notification or Subscriber Welcome)
 * @param {Object} options - Email options
 * @param {string} type - 'ADMIN' or 'WELCOME'
 */
const sendNewsletterNotification = async (options, type = 'ADMIN') => {
  // Check for credentials
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('CRITICAL: EMAIL_USER or EMAIL_PASS is missing in .env file');
    throw new Error('Email credentials missing');
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let subject = '';
  let recipient = '';
  let htmlContent = '';

  // Common CSS Styles
  const commonStyles = `
    /* Base Resets */
    body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; background-color: #0f172a; color: #334155; }
    img { outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; }
    a { text-decoration: none; color: inherit; }
    table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }

    /* Layout */
    .wrapper { width: 100%; table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #0f172a; }
    .webkit { max-width: 600px; margin: 0 auto; }
    .container { max-width: 600px; margin: 0 auto; width: 100%; background-color: #ffffff; border-radius: 0 0 16px 16px; overflow: hidden; }

    /* Header */
    .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 40px 20px; text-align: center; border-bottom: 6px solid #b91c1c; }
    .header-icon-box { background-color: rgba(255, 255, 255, 0.15); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; line-height: 80px; font-size: 40px; border: 2px solid rgba(255, 255, 255, 0.3); text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
    .header-title { font-size: 28px; font-weight: 800; color: #ffffff; margin: 0; text-transform: uppercase; letter-spacing: 1px; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
    .header-subtitle { font-size: 14px; color: rgba(255, 255, 255, 0.9); margin-top: 8px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase; }

    /* Content */
    .body-content { padding: 40px 30px; }
    .highlight { color: #dc2626; font-weight: 700; }
    
    /* Footer */
    .footer { background-color: #1e293b; padding: 30px; text-align: center; font-size: 12px; color: #94a3b8; }
    .footer-logo { font-size: 20px; font-weight: 700; color: #ffffff; margin-bottom: 15px; display: block; }
    .footer-link { color: #dc2626; text-decoration: none; font-weight: 600; }

    /* Mobile */
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; border-radius: 0; }
      .header { padding: 30px 15px; }
      .header-title { font-size: 24px; }
      .body-content { padding: 30px 20px; }
    }
  `;

  if (type === 'ADMIN') {
    recipient = process.env.EMAIL_USER;
    subject = '📧 New Newsletter Subscription';
    htmlContent = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>New Subscriber Alert</title>
        <style type="text/css">
          ${commonStyles}
          /* Admin Specific Styles */
          .subscriber-card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 30px 0; position: relative; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border-top: 4px solid #dc2626; }
          .label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; letter-spacing: 1px; margin-bottom: 4px; display: block; }
          .email-value { font-size: 20px; font-weight: 700; color: #1e293b; word-break: break-all; padding-bottom: 15px; border-bottom: 1px dashed #e2e8f0; margin-bottom: 20px; display: block; }
          .grid-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .stat-box { font-size: 14px; }
          .stat-value { font-size: 16px; font-weight: 600; color: #0f172a; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .badge-source { background-color: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
          .badge-status { background-color: #dcfce7; color: #166534; border: 1px solid #bbf7d0; }
          .engagement-box { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-top: 30px; }
          .engagement-title { font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 10px; display: flex; align-items: center; }
          @media only screen and (max-width: 600px) { .grid-container { grid-template-columns: 1fr; gap: 15px; } }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="webkit">
            <div class="container">
              <div class="header">
                <div class="header-icon-box">📢</div>
                <div class="header-subtitle">Audience Growth Detected</div>
                <h1 class="header-title">New Subscriber</h1>
              </div>
              <div class="body-content">
                <p style="margin-bottom: 25px; font-size: 16px; color: #475569;">
                  Excellent news! Your digital presence is expanding. A new reader has just joined your community, demonstrating strong interest in your expertise.
                </p>
                <div class="subscriber-card">
                  <span class="label">Primary Contact Email</span>
                  <a href="mailto:${options.email}" class="email-value">${options.email}</a>
                  <div class="grid-container">
                    <div class="stat-box">
                      <span class="label">Acquisition Source</span>
                      <div style="margin-top: 5px;"><span class="badge badge-source">${(options.source || 'Direct Traffic').toUpperCase()}</span></div>
                    </div>
                    <div class="stat-box">
                      <span class="label">Subscription Status</span>
                      <div style="margin-top: 5px;"><span class="badge badge-status">● VERIFIED ACTIVE</span></div>
                    </div>
                    <div class="stat-box">
                      <span class="label">Timestamp</span>
                      <div class="stat-value">${new Date(options.subscribedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    <div class="stat-box">
                      <span class="label">Date</span>
                      <div class="stat-value">${new Date(options.subscribedAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
                <div class="engagement-box">
                  <div class="engagement-title">⚡ Recommended Next Steps</div>
                  <ul style="padding-left: 20px; margin: 0; font-size: 14px; color: #475569;">
                    <li style="margin-bottom: 8px;">Ensure they receive the welcome sequence.</li>
                    <li>Plan your next newsletter blast to keep momentum high.</li>
                  </ul>
                </div>
              </div>
              <div class="footer">
                <span class="footer-logo">KUNAL PORTFOLIO.</span>
                <p>Logged IP: ${options.ipAddress || 'Unknown'} • Device: ${options.userAgent ? 'Identified' : 'Unknown'}</p>
                <p>&copy; ${new Date().getFullYear()} Kunal Verma. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  } else if (type === 'WELCOME') {
    recipient = options.email;
    subject = '🚀 Welcome to the Inner Circle - You\'re In!';
    htmlContent = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Welcome to the Community</title>
        <style type="text/css">
          ${commonStyles}
          /* Welcome Specific Styles */
          .hero-text { font-size: 18px; line-height: 1.8; color: #334155; margin-bottom: 25px; }
          .feature-list { list-style: none; padding: 0; margin: 30px 0; }
          .feature-item { display: flex; align-items: flex-start; margin-bottom: 20px; background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 3px solid #dc2626; }
          .feature-icon { font-size: 20px; margin-right: 15px; margin-top: 2px; }
          .feature-content h4 { margin: 0 0 5px 0; color: #0f172a; font-size: 16px; }
          .feature-content p { margin: 0; font-size: 14px; color: #64748b; }
          .cta-button { display: block; width: 100%; max-width: 250px; margin: 40px auto; background-color: #dc2626; color: #ffffff; text-align: center; padding: 16px 0; border-radius: 8px; font-weight: 700; font-size: 16px; transition: background-color 0.3s; box-shadow: 0 4px 6px rgba(220, 38, 38, 0.25); }
          .divider { height: 1px; background-color: #e2e8f0; margin: 40px 0; }
          .bio-section { display: flex; align-items: center; margin-top: 30px; }
          .bio-avatar { width: 60px; height: 60px; border-radius: 50%; background-color: #e2e8f0; margin-right: 15px; border: 2px solid #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .bio-text h5 { margin: 0 0 4px 0; font-size: 16px; color: #0f172a; }
          .bio-text p { margin: 0; font-size: 13px; color: #64748b; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="webkit">
            <div class="container">
              <div class="header">
                <div class="header-icon-box">✨</div>
                <div class="header-subtitle">Official Confirmation</div>
                <h1 class="header-title">Welcome Aboard!</h1>
              </div>
              <div class="body-content">
                <p class="hero-text">
                  <strong>Hi there,</strong>
                </p>
                <p class="hero-text">
                  I'm absolutely thrilled to welcome you to my personal newsletter! You’ve just taken a significant step towards staying ahead of the curve in the rapidly evolving world of technology.
                </p>
                <p class="hero-text">
                  This isn't just another newsletter. It’s a direct line to my latest experiments, deep-dive technical breakdowns, and honest insights into the world of Full Stack Development and AI that I don't share anywhere else.
                </p>

                <div class="divider"></div>

                <h3 style="text-align: center; font-size: 20px; color: #0f172a; margin-bottom: 25px;">Here's What You Can Expect</h3>

                <ul class="feature-list">
                  <li class="feature-item">
                    <span class="feature-icon">🚀</span>
                    <div class="feature-content">
                      <h4>Cutting-Edge Tech Stacks</h4>
                      <p>Deep dives into React, Node.js, Next.js, and modern architectural patterns that scale.</p>
                    </div>
                  </li>
                  <li class="feature-item">
                    <span class="feature-icon">🤖</span>
                    <div class="feature-content">
                      <h4>AI Integration Strategies</h4>
                      <p>Practical guides on integrating LLMs and AI tools into real-world applications.</p>
                    </div>
                  </li>
                  <li class="feature-item">
                    <span class="feature-icon">💡</span>
                    <div class="feature-content">
                      <h4>Career & Industry Insights</h4>
                      <p>No-fluff advice on navigating the tech career ladder and freelance ecosystem.</p>
                    </div>
                  </li>
                </ul>

                <a href="${process.env.FRONTEND_URL || '#'}" class="cta-button">Explore My Latest Articles</a>

                <p class="hero-text" style="font-size: 15px; background-color: #fef2f2; padding: 20px; border-radius: 8px; color: #7f1d1d;">
                  <strong>🎯 Whitelist Me:</strong> To ensure you never miss an update, please move this email to your "Primary" tab or add me to your contacts. The best content is yet to come.
                </p>

                <div class="divider"></div>

                <div class="bio-section">
                  <!-- Placeholder based on name initials if no image -->
                  <div class="bio-avatar" style="background: #dc2626; color: white; text-align: center; line-height: 60px; font-weight: bold; font-size: 24px;">KV</div>
                  <div class="bio-text">
                    <h5>Kunal Verma</h5>
                    <p>Full Stack Developer & Tech Enthusiast</p>
                  </div>
                </div>
              </div>
              <div class="footer">
                <span class="footer-logo">KUNAL PORTFOLIO.</span>
                <p>You received this email because you subscribed to my newsletter at kunalverma.com.</p>
                <p>
                  <a href="${process.env.FRONTEND_URL || '#'}" class="footer-link">Visit Website</a> • 
                  <a href="#" class="footer-link">Unsubscribe</a>
                </p>
                <p style="margin-top: 20px;">&copy; ${new Date().getFullYear()} Kunal Verma. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  // Define email options
  const mailOptions = {
    from: `"Kunal Verma" <${process.env.EMAIL_USER}>`,
    to: recipient,
    subject: subject,
    html: htmlContent
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

export default sendNewsletterNotification;
