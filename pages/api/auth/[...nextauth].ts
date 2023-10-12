import { FirestoreAdapter, initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import NextAuth, { Account, AuthOptions, ISODateString, Session, TokenSet, User } from "next-auth"
import { Adapter, AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { OAuthConfig } from "next-auth/providers/oauth";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile, tokens) {
        //console.log(profile)
        //console.log(tokens)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          tokens: tokens
        }
      }
    })
  ]  
  ,adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n')
    })
  }) as Adapter,
  callbacks:{   
    async session ({session, user}){      
      return { ...session, user: user }
    },
  }
}  as AuthOptions


export default NextAuth(authOptions)