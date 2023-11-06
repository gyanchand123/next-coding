import { NextResponse } from "next/server";
export default function middleware(request) {
  console.log("middleware");
  if (request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

/* this will be use if we wanna restrict for a particular route */
export const config = {
    //matcher: "/about/:path*"  OR 
    matcher: [ "/about/:path*","/studentlist/:path*"]
}