import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const users = [
  {
    email: "jane.doe@example.com",
    name: "Jane Doe",
    password: "adminPassword123",
    type: "admin",
  },
  {
    email: "john.smith@example.com",
    name: "John Smith",
    password: "userPassword456",
    type: "user",
  },
  {
    email: "emily.jones@example.com",
    name: "Emily Jones",
    password: "adminPassword789",
    type: "admin",
  },
  {
    email: "michael.brown@example.com",
    name: "Michael Brown",
    password: "userPassword012",
    type: "user",
  },
];

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET_KEY,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
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
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser) {
            if (currentUser.password === password) {
              return currentUser;
            }
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, user, token }) {
      session.user.type = token.type;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
