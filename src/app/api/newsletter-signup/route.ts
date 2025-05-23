// app/api/newsletter-signup/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = 'app-promo-site' } = body;

    // Get webhook URL from environment variable
    const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

    // Check if webhook URL is defined
    if (!webhookUrl) {
      console.error('NEXT_PUBLIC_MAKE_WEBHOOK_URL is not defined');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Validiere Email-Format
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email ist erforderlich' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Ungültiges Email-Format' },
        { status: 400 }
      );
    }

    // E-Mail an Make.com Webhook senden
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: source,
          timestamp: new Date().toISOString(),
          // Optionale zusätzliche Informationen
          metadata: {
            page: 'app-promo-site',
          },
        }),
      });

      if (!response.ok) {
        console.error('Webhook response status:', response.status);
        throw new Error('Newsletter service returned an error');
      }

      // Optionale Verarbeitung der Antwort
      const responseData = await response.json().catch(() => ({}));
      console.log('Newsletter signup successful:', email);

      // Erfolgsmeldung
      return NextResponse.json({
        success: true,
        message: 'Vielen Dank für Ihre Anmeldung!',
        data: responseData,
      });
    } catch (error) {
      console.error('Error sending to newsletter service:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'Fehler bei der Verbindung zum Newsletter-Dienst',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ success: false, message: 'Serverfehler' }, { status: 500 });
  }
}
