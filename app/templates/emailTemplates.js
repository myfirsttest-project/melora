// src/services/emailTemplates.js

export function contactUsHtmlTemplate({ parentName, email, mobile, program, childAge, message }) {
    return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background: #fafafa;">
    <h2 style="color: #4CAF50; text-align: center;">🌸 New Inquiry from Melora Playschool Website</h2>
    <p style="font-size: 16px;">You received a new message via the contact form:</p>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Sender</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${parentName}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${email}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${mobile}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Program</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${program}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Child Age</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${childAge}</td></tr>
      <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${message}</td></tr>
    </table>
    <p style="font-size: 14px; color: #555;">Please reply directly to this email or click "Reply" to contact the sender.</p>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
    <p style="font-size: 12px; text-align: center; color: #888;">© ${new Date().getFullYear()} Melora Playschool. All rights reserved.</p>
  </div>
  `;
}

export function adminAdmissionTemplate({ parentName, email, mobile, program, childAge, message }) {
    return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background: #fafafa;">
    <h2 style="color: #4CAF50; text-align: center;">🎓 New Admission Application</h2>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Parent</strong></td><td style="padding:10px;border:1px solid #ddd;">${parentName}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd;">${email}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd;">${mobile}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Program</strong></td><td style="padding:10px;border:1px solid #ddd;">${program}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Child Age</strong></td><td style="padding:10px;border:1px solid #ddd;">${childAge}</td></tr>
      <tr><td style="padding:10px;border:1px solid #ddd;"><strong>Message</strong></td><td style="padding:10px;border:1px solid #ddd;">${message}</td></tr>
    </table>
    <p style="font-size: 14px; color: #555;">📌 You can reply directly to this email to contact the parent.</p>
    <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />
    <p style="font-size:12px;text-align:center;color:#888;">© ${new Date().getFullYear()} Melora Playschool. All rights reserved.</p>
  </div>
  `;
}

export function parentConfirmationTemplate({ parentName }) {
    return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background: #fdfdfd;">
    <h2 style="color: #4CAF50; text-align: center;">Thank You for Applying!</h2>
    <p>Dear ${parentName},</p>
    <p>Thank you for submitting an admission application for your child.</p>
    <p>We have received your details and our team will get back to you shortly.</p>
    <p style="margin-top:20px;">📞 Call us: +91 96671 17642<br/>📧 Email: info@meloraplayschool.in</p>
    <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />
    <p style="font-size:12px;text-align:center;color:#888;">This is an automated confirmation email.</p>
  </div>
  `;
}
