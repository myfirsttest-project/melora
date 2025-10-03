import sendMail from "../sendMail";

export async function POST(req) {
    try {
        const body = await req.json();
        const data = await sendMail(body, 'contact')
        return new Response(JSON.stringify(data), {status: 200})
    } catch (error) {
        console.error("Email sending error:", error);
        return new Response(
            JSON.stringify({success: false, error: "Failed to send email" + error.message}),
            {status: 500});
    }
}