import { EmailTemplate } from '@/app/_components/Email-Template/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const { firstName, message } = await request.json();
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['ebrahimm.nasser@gmail.com'],
            subject: 'Hello',
            react: EmailTemplate({ firstName, message }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
