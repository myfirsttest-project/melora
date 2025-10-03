import nodemailer from "nodemailer";
import config from "../config.js";
import {adminAdmissionTemplate, parentConfirmationTemplate,contactUsHtmlTemplate} from "../templates/emailTemplates.js";

const {smtpHost, smtpPort, emailAddress, password} = config;
const hostName = process.env.SMTP_HOST || smtpHost;
const hostPort = process.env.SMTP_PORT || smtpPort;
const hostEmail = process.env.EMAIL_USER || emailAddress;
const HostPassword = process.env.EMAIL_PASS || password;

export default async function sendMail(req, type) {
    const {parentName, email, message, program, childAge, mobile} = await req;
    let template;
    let parentTemp;
    if (type === 'contact') {
        template = contactUsHtmlTemplate({parentName, email, message, program, childAge, mobile});
    }
    if (type === 'admission') {
        template = adminAdmissionTemplate({ parentName, email, mobile, program, childAge, message });

    }
    parentTemp = parentConfirmationTemplate(parentName);
    const transporter = nodemailer.createTransport({
        host: hostName,
        port: hostPort,
        secure: true,
        auth: {
            user: hostEmail,
            pass: HostPassword,
        },
    });

    const mailOptions = {
        from: `"Melora Playschool Website"  <${hostEmail}>`,
        replyTo: email,
        to: "info@meloraplayschool.in",
        subject: `New contact form message from ${parentName}`,
        html: `${template}`,
    };

    const parentMail = {
        from: `"Melora Playschool" <${hostEmail}>`,
        to: email,
        subject: "✅ Your Admission Application Received",
        html: parentTemp,
    };

    await Promise.all([transporter.sendMail(mailOptions), transporter.sendMail(parentMail)]);
    return new Response(JSON.stringify({success: true}), {status: 200});
}