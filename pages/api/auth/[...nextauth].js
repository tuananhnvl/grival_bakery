import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  debug: false,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // ...add more providers here
  ],
 /*  callbacks: {
    session: async (session, token) => {
      session.user.id = token.id;
      return session;
    },
  }, */
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g,'\n')
    }),
  }),

  secret: process.env.SECRET  // SECRET env variable 
}

export default NextAuth(authOptions)