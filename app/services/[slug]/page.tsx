import { redirect } from "next/navigation";

const REDIRECTS: Record<string, string> = {
  "n8n-automation": "/services/automation",
  "website-development": "/",
  "software-development": "/",
  "ai-consulting": "/",
};

export function generateStaticParams() {
  return Object.keys(REDIRECTS).map((slug) => ({ slug }));
}

export default async function ServiceRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const target = REDIRECTS[slug] ?? "/";
  redirect(target);
}
