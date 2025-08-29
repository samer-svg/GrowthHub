// middleware.ts
export { default } from "next-auth/middleware";

// Tell Next which routes need auth
export const config = {
  matcher: [
    "/dashboard/:path*",
  ],
};
