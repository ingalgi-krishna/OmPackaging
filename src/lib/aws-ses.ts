import { SESClient, SendEmailCommand, SendEmailCommandInput } from "@aws-sdk/client-ses";

const sesClient = new SESClient({
  region: process.env.REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  subject: string;
  message: string;
  urgency: 'low' | 'normal' | 'high' | 'urgent';
}

export const sendContactNotification = async (contactData: ContactData): Promise<{ success: boolean }> => {
  const { firstName, lastName, email, phone, company, inquiryType, subject, message, urgency } = contactData;

  // Enhanced email template for admin notification
  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
        }
        
        .email-container {
          max-width: 650px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .header {
          background: linear-gradient(135deg, #002B5B 0%, #001a3d 100%);
          color: white;
          padding: 30px 20px;
          position: relative;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .logo {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .logo-text {
          font-weight: bold;
          font-size: 20px;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .company-name {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 5px;
        }
        
        .company-tagline {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .header h2 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .urgency-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .urgency-urgent {
          background: linear-gradient(135deg, #ff4444, #cc0000);
          color: white;
        }
        
        .urgency-high {
          background: linear-gradient(135deg, #ff8800, #e65100);
          color: white;
        }
        
        .urgency-normal {
          background: linear-gradient(135deg, #00aa44, #2e7d32);
          color: white;
        }
        
        .urgency-low {
          background: linear-gradient(135deg, #888, #555);
          color: white;
        }
        
        .content {
          padding: 30px;
          background: #ffffff;
        }
        
        .section {
          margin-bottom: 25px;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 20px;
          border-left: 4px solid #002B5B;
        }
        
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #002B5B;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        
        .section-title::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #002B5B;
          border-radius: 50%;
          margin-right: 10px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .info-item {
          background: white;
          padding: 15px;
          border-radius: 6px;
          border: 1px solid #e9ecef;
        }
        
        .info-label {
          font-weight: 600;
          color: #002B5B;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 5px;
        }
        
        .info-value {
          color: #333;
          font-size: 14px;
        }
        
        .info-value a {
          color: #002B5B;
          text-decoration: none;
          font-weight: 500;
        }
        
        .info-value a:hover {
          text-decoration: underline;
        }
        
        .message-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          white-space: pre-wrap;
          font-size: 14px;
          line-height: 1.6;
          color: #444;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        
        .footer {
          background: linear-gradient(135deg, #002B5B 0%, #001a3d 100%);
          color: white;
          padding: 20px;
          text-align: center;
        }
        
        .footer-text {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 10px;
        }
        
        .timestamp {
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 11px;
          display: inline-block;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
            border-radius: 8px;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
          
          .header {
            padding: 20px 15px;
          }
          
          .content {
            padding: 20px 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo-section">
            <div class="logo">
              <div class="logo-text">OM</div>
            </div>
            <div>
              <div class="company-name">Om India Packaging</div>
              <div class="company-tagline">Industrial Packaging Solutions</div>
            </div>
          </div>
          <h2>New Contact Form Submission</h2>
          <span class="urgency-badge urgency-${urgency}">${urgency} Priority</span>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">Contact Information</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${firstName} ${lastName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${email}">${email}</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone Number</div>
                <div class="info-value">
                  <a href="tel:${phone}">${phone}</a>
                </div>
              </div>
              ${company ? `
              <div class="info-item">
                <div class="info-label">Company</div>
                <div class="info-value">${company}</div>
              </div>
              ` : ''}
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Inquiry Details</div>
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Inquiry Type</div>
                <div class="info-value">${inquiryType}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Subject</div>
                <div class="info-value">${subject}</div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">Message</div>
            <div class="message-box">${message}</div>
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-text">
            This is an automated notification from Om India Packaging website contact form
          </div>
          <div class="timestamp">
            Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Enhanced customer confirmation email
  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Om India Packaging</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f4;
        }
        
        .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .header {
          background: linear-gradient(135deg, #002B5B 0%, #001a3d 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .logo {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .logo-text {
          font-weight: bold;
          font-size: 24px;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .company-info {
          text-align: left;
        }
        
        .company-name {
          font-size: 18px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 5px;
        }
        
        .company-tagline {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .header h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .content {
          padding: 40px 30px;
          background: #ffffff;
        }
        
        .greeting {
          font-size: 18px;
          color: #002B5B;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .main-text {
          font-size: 16px;
          color: #444;
          margin-bottom: 25px;
          line-height: 1.7;
        }
        
        .summary-box {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 10px;
          padding: 25px;
          margin: 25px 0;
          border-left: 5px solid #002B5B;
        }
        
        .summary-title {
          font-size: 16px;
          font-weight: 600;
          color: #002B5B;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }
        
        .summary-title::before {
          content: '📋';
          margin-right: 8px;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 43, 91, 0.1);
        }
        
        .summary-item:last-child {
          border-bottom: none;
        }
        
        .summary-label {
          font-weight: 600;
          color: #002B5B;
          font-size: 14px;
        }
        
        .summary-value {
          color: #666;
          font-size: 14px;
          text-align: right;
          max-width: 60%;
        }
        
        .cta-section {
          background: #002B5B;
          color: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          margin: 25px 0;
        }
        
        .cta-text {
          font-size: 16px;
          margin-bottom: 15px;
        }
        
        .contact-info {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .footer {
          background: linear-gradient(135deg, #002B5B 0%, #001a3d 100%);
          color: white;
          padding: 25px 20px;
          text-align: center;
        }
        
        .footer-text {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 10px;
        }
        
        .footer-branding {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 15px;
          margin-top: 15px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 10px;
            border-radius: 8px;
          }
          
          .header {
            padding: 25px 15px;
          }
          
          .content {
            padding: 30px 20px;
          }
          
          .logo-section {
            flex-direction: column;
            text-align: center;
          }
          
          .logo {
            margin-right: 0;
            margin-bottom: 15px;
          }
          
          .summary-item {
            flex-direction: column;
            gap: 5px;
          }
          
          .summary-value {
            text-align: left;
            max-width: 100%;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo-section">
            <div class="logo">
              <div class="logo-text">OM</div>
            </div>
            <div class="company-info">
              <div class="company-name">Om India Packaging</div>
              <div class="company-tagline">Industrial Packaging Solutions</div>
            </div>
          </div>
          <h2>Thank You for Contacting Us!</h2>
        </div>
        
        <div class="content">
          <div class="greeting">Dear ${firstName},</div>
          
          <div class="main-text">
            We have received your inquiry and truly appreciate you reaching out to Om India Packaging. 
            Our team of packaging experts will review your requirements and get back to you within 24 hours 
            with a comprehensive response.
          </div>
          
          <div class="summary-box">
            <div class="summary-title">Your Inquiry Summary</div>
            <div class="summary-item">
              <span class="summary-label">Subject:</span>
              <span class="summary-value">${subject}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Inquiry Type:</span>
              <span class="summary-value">${inquiryType}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Priority Level:</span>
              <span class="summary-value">${urgency.charAt(0).toUpperCase() + urgency.slice(1)}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Submitted:</span>
              <span class="summary-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
            </div>
          </div>
          
          <div class="main-text">
            As a leading provider of industrial packaging solutions since our establishment, 
            we're committed to delivering quality, reliability, and sustainability in every package we create.
          </div>
          
          <div class="cta-section">
            <div class="cta-text">
              <strong>Need Immediate Assistance?</strong>
            </div>
            <div class="contact-info">
              Feel free to call us directly for urgent inquiries.<br>
              We're here to help with all your packaging needs.
            </div>
          </div>
          
          <div class="main-text">
            Thank you for considering Om India Packaging for your industrial packaging requirements. 
            We look forward to the opportunity to serve you and exceed your expectations.
          </div>
        </div>
        
        <div class="footer">
          <div class="footer-text">
            This is an automated confirmation email from Om India Packaging.
          </div>
          <div class="footer-branding">
            © ${new Date().getFullYear()} Om India Packaging - Industrial Packaging Solutions<br>
            Leading provider of innovative packaging solutions since establishment.
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    // Send notification to admin
    const adminEmailParams: SendEmailCommandInput = {
      Source: process.env.FROM_EMAIL!,
      Destination: {
        ToAddresses: [process.env.TO_EMAIL!],
      },
      Message: {
        Subject: {
          Data: `[${urgency.toUpperCase()}] Om India Packaging - New Contact: ${subject}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: adminEmailHtml,
            Charset: "UTF-8",
          },
        },
      },
    };

    // Send confirmation to customer
    const customerEmailParams: SendEmailCommandInput = {
      Source: process.env.FROM_EMAIL!,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: "Thank you for contacting Om India Packaging - We'll be in touch soon!",
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: customerEmailHtml,
            Charset: "UTF-8",
          },
        },
      },
    };

    // Send both emails
    await Promise.all([
      sesClient.send(new SendEmailCommand(adminEmailParams)),
      sesClient.send(new SendEmailCommand(customerEmailParams))
    ]);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};