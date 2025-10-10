import sendMail from "../sendMail";

export async function POST(req) {
    try {
        const body = await req.json();
        const data = await sendMail(body, 'admission')
        return new Response(JSON.stringify(data), {status: 200})
    } catch (error) {
        return new Response(
            JSON.stringify({success: false, error: "Failed to send email" + error.message}),
            {status: 500});
    }
}