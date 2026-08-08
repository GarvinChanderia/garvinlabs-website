import { NextResponse, after } from 'next/server';
import { put } from '@vercel/blob';
import { randomUUID } from 'crypto';
import { resolveMx } from 'dns/promises';
import { isResourceSlug } from '@/lib/resourceSlugs';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@([^\s@.]+\.)+[^\s@.]{2,}$/;

async function hasMxRecord(domain: string): Promise<boolean> {
  try {
    const records = await resolveMx(domain);
    return records.length > 0;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
  const slug = typeof body?.slug === 'string' ? body.slug : '';

  if (!isResourceSlug(slug)) {
    return NextResponse.json({ error: 'invalid_slug' }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 422 });
  }

  const domain = email.split('@')[1];
  if (!(await hasMxRecord(domain))) {
    return NextResponse.json({ error: 'undeliverable_domain' }, { status: 422 });
  }

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const headers = req.headers;
    const timestamp = new Date().toISOString();
    const payload = {
      timestamp,
      email,
      industry: slug,
      ip: headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null,
      country: headers.get('x-vercel-ip-country'),
      region: headers.get('x-vercel-ip-country-region'),
      city: headers.get('x-vercel-ip-city'),
      user_agent: headers.get('user-agent'),
      referrer: headers.get('referer'),
    };

    after(() =>
      put(`leads/${slug}/${timestamp}-${randomUUID()}.json`, JSON.stringify(payload), {
        access: 'private',
        addRandomSuffix: false,
      }).catch(() => {})
    );
  }

  return NextResponse.json({ ok: true });
}
