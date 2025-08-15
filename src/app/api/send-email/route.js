import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, budget, requirement, message } = await req.json();

        if (!name || !email || !phone || !budget || !requirement || !message) {
            return new Response(JSON.stringify({ success: false, error: "Missing fields" }), { status: 400 });
        }

        // Create transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Email to YOU (Admin)
        const adminMailOptions = {
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `📩 New Contact Form Submission - ${name}`,
            html: `
        <h2>New Inquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Requirement:</strong> ${requirement}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

      // Email to CLIENT (Confirmation)
      const clientMailOptions = {
        from: `"KodX Media" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "✅ We've Received Your Inquiry – KodX Media",
        html: `
            <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 20px; border-radius: 10px; max-width: 600px; margin: auto; border: 1px solid #ddd;">
                
                <!-- Header -->
                <div style="text-align: center; padding-bottom: 10px; border-bottom: 2px solid #050012;">
                    <h1 style="margin: 0; font-size: 28px; color: #AA14F0;">
                        KodX Media
                    </h1>
                    <p style="margin: 5px 0; color: #050012;">Where Creativity Meets Technology</p>
                </div>
                
                <!-- Greeting -->
                <h2 style="margin-top: 20px; font-size: 20px; color: #AA14F0;">
                    Hello ${name},
                </h2>
                <p style="color: #050012; font-size: 15px;">
                    Thank you for reaching out to <strong style="color: #AA14F0;">KodX Media</strong>! 
                    We’ve received your inquiry and our team will get back to you within the next 24 hours.
                </p>

                <!-- Submitted Details -->
                <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #eee; margin-top: 15px;">
                    <h3 style="margin-top: 0; font-size: 18px; color: #AA14F0;">
                        Your Submitted Details
                    </h3>
                    <ul style="list-style: none; padding: 0; margin: 0; color: #050012; font-size: 14px;">
                        <li><strong>Name:</strong> ${name}</li>
                        <li><strong>Email:</strong> ${email}</li>
                        <li><strong>Phone:</strong> ${phone}</li>
                        <li><strong>Budget:</strong> ${budget}</li>
                        <li><strong>Requirement:</strong> ${requirement}</li>
                        <li><strong>Message:</strong> ${message}</li>
                    </ul>
                </div>


        <!-- Closing -->
        <p style="color: #333; font-size: 14px; margin-top: 20px;">
            Our creative team is excited to collaborate with you and turn your vision into reality.
        </p>

        <p style="margin-top: 20px; font-size: 14px; color: #555;">
            Best Regards,<br>
            <strong>Kunal Jadhav</strong><br>
            Founder & CTO – KodX Media
        </p>
        
        <!-- Footer -->
        <div style="text-align: center; font-size: 12px; color: #888; margin-top: 25px; border-top: 1px solid #ddd; padding-top: 10px;">
            © ${new Date().getFullYear()} KodX Media. All Rights Reserved.
        </div>
    </div>
    `,
};


        // Send both emails
        // Send both emails in parallel instead of sequentially using Promise.all
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
