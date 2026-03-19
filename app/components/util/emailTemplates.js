// utils/emailTemplates.js

/**
 * Generate HTML content for parent inquiry
 */
export const getParentInquiryHTML = (formData) => {
    return `
    <div style="color:#2c3e50; font-size:16px; font-family: Arial, sans-serif;">
      <h2>New Inquiry from ${formData.contactPerson}</h2>
      <p><strong>Child Name:</strong> ${formData.childName}</p>
      <p><strong>Child Age:</strong> ${formData.childAge}</p>
      <p><strong>Program Interested:</strong> ${formData.program}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobile}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    </div>
  `;
};

/**
 * Generate HTML content for partner inquiry
 */
export const getPartnerInquiryHTML = (formData) => {
    return `
      <h2>Partner Inquiry From: ${formData.companyName}</h2>
      <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobile}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
  `;
};

// emailTemplates.js

export const getReturnMessageHTML = (data) => {
    if (data.type === "parent") {
        return `
      <div style="font-family: Arial, sans-serif; font-size: 14px; color: #2c3e50;">
        <h2>Thank You for Your Inquiry, ${data.contactPerson}!</h2>
        <p>Dear ${data.contactPerson},</p>
        <p>Thank you for reaching out to <strong>Melora Playschool</strong> regarding enrollment for your child <strong>${data.childName}</strong> (Age: ${data.childAge}).</p>
        <p>We have received your message and will get back to you shortly regarding the <strong>${data.program}</strong> program you are interested in.</p>
        <p>Here’s a copy of your message:</p>
        <blockquote style="background: #f5f5f5; padding: 10px; border-left: 4px solid #f97316;">
          ${data.message}
        </blockquote>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        <p>Warm regards,<br/>Melora Playschool Team</p>
      </div>
    `;
    } else if (data.type === "partner") {
 return `
        <h2>Thank You for Your Inquiry, ${data.contactPerson}!</h2>
        <p>Dear ${data.contactPerson},</p>
        <p>Thank you for your interest in partnering with <strong>Melora Playschool</strong>!</p>
        <p>We have received your inquiry from <strong>${data.companyName}</strong> and will contact you shortly to discuss the partnership.</p>
        <p>Here’s a copy of your message:</p>
        <blockquote style="background: #f5f5f5; padding: 10px; border-left: 4px solid #f97316;">
          ${data.message}
        </blockquote>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
        <p>Warm regards,<br/>Melora Playschool Team</p>
    `;
    }
};