import pkg from 'nodemailer';
const nodemailer = pkg
import toast from 'react-hot-toast';

export default async function handler(req, res) {
    console.log(req.method)
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Create Nodemailer transporter
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,  
            port: process.env.EMAIL_PORT,  
            secure: false, 
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS
            },
        });

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email, 
                subject: "Eze Ebuka Jude - Web Developer", 
                // text: `Hello ${name},\n\nWe have received your message: ${message}`, // plain text body
                html: `<p>Hello ${name},</p><p>We have received your message:</p><blockquote>${message}</blockquote>`, 
            });

            res.status(200).json({ message: 'Email sent successfully!' });
            // toast.success('Email send Successfully')
        } catch (error) {
            // toast.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
