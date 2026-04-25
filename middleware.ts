// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Export the middleware function (required)
export default function middleware(request: NextRequest) {
  // You can add your custom logic here if needed
  return NextResponse.next();
}

// Export your config as you already do
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

