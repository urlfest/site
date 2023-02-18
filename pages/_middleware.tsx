import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parse } from "tldts";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname =
    req.headers.get("x-vercel-deployment-url") || req.headers.get("host");
  const Domain = parse(hostname);
  const currentHost = Domain.subdomain;

  if (url.pathname.startsWith(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (hostname === "urlfe.st" || hostname === "discordapp.io")
    return NextResponse.next();

  if (!url.pathname.includes(".") || !url.pathname.includes("/api") || !url.pathname.includes('_next')) {
    //   //   url.pathname = `/_sites/${hostname}${url.pathname}`;
    if (Domain.domain == "implant.cam" && currentHost == "urlfest.cortex") return
    if (Domain.domain == "implant.cam" && currentHost == "party.cortex") return NextResponse.rewrite(`https://urlfest.cortex.implant.cam/event/${currentHost}`);

    else return NextResponse.rewrite(`http://${Domain.domain}/event/${currentHost}`);
  }
}
