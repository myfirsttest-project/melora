import emailjs from "@emailjs/browser";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/**
 * sendEmail - generic function to send email via EmailJS
 * @param {Object} templateParams - key-value pairs for EmailJS template
 * @param {String} templateId - EmailJS template ID
 */
export const sendEmail = async (templateParams, templateId) => {
    return emailjs.send(SERVICE_ID, templateId, templateParams, PUBLIC_KEY);
};
