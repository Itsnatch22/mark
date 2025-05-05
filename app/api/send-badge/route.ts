// app/api/send-badge/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import BadgeAward from '@/emails/BadgeAward';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, userName, badgeName, badgeImage, trainingTitle } = await request.json();

    if (!email || !badgeName) {
      return NextResponse.json(
        { error: 'Email and badge name are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Training Platform <training@yourdomain.com>',
      to: email,
      subject: `You earned the ${badgeName} badge!`,
      react: BadgeAward({
        userName,
        badgeName,
        badgeImage: badgeImage || `${process.env.NEXT_PUBLIC_SITE_URL}/images/default-badge.png`,
        trainingTitle: trainingTitle || 'our training program'
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}