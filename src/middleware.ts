import { NextRequest, NextResponse } from "next/server"
import { URLs } from "./shared/config/urls"

const authRotes = ["/sign_in", "/sign_up", "/landing"]

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const isAuth = request.cookies.get("access-token")

  if (!authRotes.includes(url.pathname) && !isAuth?.value) {
    url.pathname = URLs.SIGN_IN
    return NextResponse.redirect(url)
  } else if (authRotes.includes(url.pathname) && isAuth?.value) {
    url.pathname = URLs.MAIN
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
