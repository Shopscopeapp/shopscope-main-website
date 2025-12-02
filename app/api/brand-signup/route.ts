import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const {
      firstName,
      lastName,
      email,
      brandName,
      phoneNumber,
      onShopify,
      numberOfProducts,
      styleOfClothing,
      message,
    } = formData;

    if (!email || !firstName || !lastName || !brandName) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Mailchimp environment variables are not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Add brand to Mailchimp with merge fields
    const response = await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
            PHONE: phoneNumber || '',
          },
          tags: ['Brand Partner', 'Waitlist'],
          // Store additional info in notes
          interests: {},
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Check if email already exists
      if (data.title === 'Member Exists') {
        return NextResponse.json(
          { message: 'Your brand application is already submitted!' },
          { status: 200 }
        );
      }

      console.error('Mailchimp error:', data);
      return NextResponse.json(
        { error: data.detail || 'Failed to submit application' },
        { status: response.status }
      );
    }

    // Add note with additional brand information
    const memberId = data.id;
    await fetch(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${memberId}/notes`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          note: `Brand: ${brandName}
On Shopify: ${onShopify}
Products: ${numberOfProducts}
Style: ${styleOfClothing}
Message: ${message || 'N/A'}`,
        }),
      }
    );

    return NextResponse.json(
      { message: 'Brand application submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting brand application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

