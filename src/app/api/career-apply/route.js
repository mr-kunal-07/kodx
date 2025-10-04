import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        // Parse multipart form data
        const formData = await req.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const position = formData.get("position");
        const linkedin = formData.get("linkedin");
        const coverLetter = formData.get("coverLetter");
        const resumeFile = formData.get("resume");

        // Validate required fields
        if (!name || !email || !phone || !position || !coverLetter || !resumeFile) {
            return new Response(JSON.stringify({ success: false, error: "Missing required fields." }), { status: 400 });
        }

        // Validate file type and size (max 5MB)
        const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (!allowedTypes.includes(resumeFile.type)) {
            return new Response(JSON.stringify({ success: false, error: "Invalid file type. Only PDF, DOC, DOCX allowed." }), { status: 400 });
        }
        if (resumeFile.size > 5 * 1024 * 1024) {
            return new Response(JSON.stringify({ success: false, error: "File too large. Max 5MB allowed." }), { status: 400 });
        }

        // Read file buffer
        const arrayBuffer = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Create transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Email to Admin
        const adminMailOptions = {
            from: `"KodX Media Careers" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `📝 New Career Application - ${name} (${position})`,
            html: `
                <h2>New Career Application</h2>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Position:</strong> ${position}</li>
                    <li><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></li>
                </ul>
                <p><strong>Cover Letter:</strong></p>
                <p>${coverLetter.replace(/\n/g, '<br>')}</p>
                <p>Resume is attached to this email.</p>
            `,
            attachments: [
                {
                    filename: resumeFile.name,
                    content: buffer,
                    contentType: resumeFile.type
                }
            ]
        };

        await transporter.sendMail(adminMailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Career application error:", error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
