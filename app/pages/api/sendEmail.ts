import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { name, email, phone, subject, message } = req.body;

            const params = {
                apiKey: process.env.ELASTIC_EMAIL_API_KEY,
                subject,
                from: process.env.EMAIL_FROM,
                to: email,
                bodyText: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
            };

            // Make sure to use the correct Elastic Email API endpoint
            const response = await axios.post("https://api.elasticemail.com/v2/email/send", params);

            // Handle success or failure
            console.log("Email sent:", response.data);
            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Failed to send email" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
