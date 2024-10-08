import pkg from 'nodemailer';
const nodemailer = pkg

export async function POST(request) {
    
        const data = await request.json()
        console.log(data)

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
                to: process.env.EMAIL_USER, 
                subject: `PortFolio Website Message from ${data?.email}`, 
                html: `<p>Hi Jude, My name is ${data?.name},</p><p>Kindly find below the purpose for the message:</p><blockquote>${data?.message}</blockquote>`, 
            });

            console.log('Email sent Successfully')
            return new Response(JSON.stringify({ message: 'Form submitted successfully' }), { status: 200 });
            
        } catch (error) {
            console.log('Error sending email:', error);
            return new Response(JSON.stringify({ message: 'Failed to send message' }), { status: 500 });
        }
}
