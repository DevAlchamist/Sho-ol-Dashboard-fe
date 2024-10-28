// middleware.js

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
  if (token && isAuthPage && req.nextUrl.pathname.startsWith("/sign-in")) {
    return NextResponse.redirect(new URL("/Dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/dashboard/:path*", "/profile/:path*"], // Protected paths
};
