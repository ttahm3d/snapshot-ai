import Github from "next-auth/providers/github";

export const authConfig = {
  providers: [
    Github({
      clientId: "Ov23liijtpLZLBpDlBYr",
      clientSecret: "f3688fd6bd43ddb47ac685328aca3a83ee0e6f41",
    }),
  ],
};
