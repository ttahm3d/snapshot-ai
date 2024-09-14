import Github from "next-auth/providers/github";

import NextAuth from "next-auth";
const authConfig = {
  providers: [
    Github({
      clientId: "Ov23liijtpLZLBpDlBYr",
      clientSecret: "f3688fd6bd43ddb47ac685328aca3a83ee0e6f41",
    }),
  ],
};
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
