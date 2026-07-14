import { NextResponse, after } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { put } from '@vercel/blob';
import { randomUUID } from 'crypto';

const SLUGS = [
  'beauty-cosmetics',
  'fashion-apparel',
  'food-beverage',
  'health-nutrition-wellness',
  'home-furniture-decor',
] as const;

export const runtime = 'nodejs';

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!SLUGS.includes(slug as (typeof SLUGS)[number])) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'public', 'pdfs', `${slug}.pdf`);
  const file = await readFile(filePath);

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const headers = req.headers;
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      industry: slug,
      ip: headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
      country: headers.get('x-vercel-ip-country'),
      region: headers.get('x-vercel-ip-country-region'),
      city: headers.get('x-vercel-ip-city'),
      user_agent: headers.get('user-agent'),
      referrer: headers.get('referer'),
    };

    after(() =>
      put(`downloads/${slug}/${timestamp}-${randomUUID()}.json`, JSON.stringify(payload), {
        access: 'private',
        addRandomSuffix: false,
      }).catch(() => {})
    );
  }

  return new NextResponse(new Uint8Array(file), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${slug}-top-7-automations-lead-magnet.pdf"`,
      'Cache-Control': 'no-store',
    },
  });
}
