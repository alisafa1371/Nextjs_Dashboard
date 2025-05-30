import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default function middleware(request: NextRequest) {
  const country =
    (request as any).geo?.country || request.headers.get("x-vercel-ip-country");

  const isFromIran = country === "IR";
  const locale = isFromIran ? "fa" : routing.defaultLocale;

  if (request.nextUrl.pathname === "/") {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${locale}`;
    return NextResponse.redirect(newUrl);
  }

  return createMiddleware(routing)(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
