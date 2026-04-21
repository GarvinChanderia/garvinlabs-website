import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { session } = body || {};

    if (!session) {
      return NextResponse.json({ error: 'Session not provided.' }, { status: 400 });
    }

    const EMAIL_TO = process.env.EMAIL_TO || 'labs.garvin@gmail.com';

    const createTransporter = async () => {
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        return nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });
      }
      const testAccount = await nodemailer.createTestAccount();
      return nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    };

    const transporter = await createTransporter();
    const mail = {
      from: '"GarvinLabs Bot" <bot@garvinlabs.com>',
      to: EMAIL_TO,
      subject: 'New GarvinLabs booking request',
      text: `New booking confirmed by ${session.name || 'unknown'}.
Service: ${session.service_request || 'unspecified'}
Preferred time: ${session.preferred_time || 'unspecified'}
Conversation summary: ${session.name || 'Name not provided'} requested ${session.service_request || 'a service'} for ${session.preferred_time || 'unspecified'}.`,
      html: `<p><strong>Name:</strong> ${session.name || 'N/A'}</p><p><strong>Service:</strong> ${session.service_request || 'N/A'}</p><p><strong>Preferred time:</strong> ${session.preferred_time || 'N/A'}</p><p><strong>Note:</strong> Booking link clicked from GarvinLabs booking assistant.</p>`
    };

    const info = await transporter.sendMail(mail);
    const preview = nodemailer.getTestMessageUrl(info);
    
    return NextResponse.json({ success: true, previewUrl: preview || null });
  } catch (error) {
    console.error('Email error', error);
    return NextResponse.json({ error: 'Email send failed.' }, { status: 500 });
  }
}
