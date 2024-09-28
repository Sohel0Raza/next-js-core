import { NextResponse } from "next/server";
export default function middleware(request) {
    const user = true;
    const cookies = request.cookies.get("token");

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/about", "/blogs"],
};
