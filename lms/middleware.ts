// import { clerkMiddleware } from "@clerk/nextjs/server";
// export default clerkMiddleware();
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// export default authMiddleware({
//   // publicRoutes: ["/test"],
// });

import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
