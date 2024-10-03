import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret : process.env.NEXT_PUBLIC_SECRET_KEY,
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        credentials: {
          email: {
            label: "Email",
            type: "email",
            required: true,
            placeholder: "Your Email",
          },
          password: {
            label: "Password",
            type: "password",
            required: true,
            placeholder: "Your Password",
          },
        },
        async authorize(credentials) {
          if (!credentials) {
            return null;
          }
        
  
          return true; 
        },
      }),
    ],
  }
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
