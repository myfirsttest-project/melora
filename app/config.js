module.exports = {
    httpPort: process.env.PORT || 9080,
    httpsSecurePort: process.env.SECURE_PORT || 9443,
    nodeEnv: process.env.NODE_ENV || 'dev',
    //EMAIL_USER: process.env.EMAIL_USER || 'melorakindergarten@gmail.com',
    //EMAIL_PASS: process.env.EMAIL_PASS || 'mguk cgan xscs wkjy'
    password: process.env.EMAIL_USER || '88@Melora',
    emailAddress: process.env.EMAIL_PASS || 'info@meloraplayschool.in',
    smtpHost: process.env.SMTP_HOST || 'smtp.hostinger.com',
    smtpPort: process.env.EMAIL_PORT || 465,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-9N2DS1RYLG'
}
