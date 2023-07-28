import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";

import bcrypt from "bcrypt"

import User from "@/models/User"

import  { signJwtToken } from "@/lib/jwt"

import db from "@/lib/db"


const handler = NextAuth({
    providers : [
        CredentialsProvider({
            type : "credentials",
            credentials : {
                username  : {
                    label : "email",
                    type : "text",
                    placeholder : "Jhon Doe"
                },
                password : {
                    label : "password",
                    type : "password"
                }
            },
            async authorize(credentials , req){
                const { email, password } = credentials

                await db.connect()

                const user = await User.findOne({email})

                if(!user){
                    throw new Error("Invalid input")
                }

                const comparePassword = await bcrypt.compare(password, user.password)

                if(!comparePassword){
                    throw new Error("Invalid Input")
                }
                else{
                    const { password, ...currentUser} = user._doc

                    const accessToken = signJwtToken(currentUser, {
                        expiresIn : "5d"
                    })

                    return  {
                        ...currentUser,
                        accessToken
                    }

                }
            }
        })
    ],
    pages : {
        signIn : "/login"
    },
    callbacks : {
        async jwt({token, user}){
            if(user) {
                token.accessToken = user.accessToken
                token._id = user._id
            }

            return token
        },
        async session({session, token}){
            if(token){
                session.user._id = token._id
                session.user.accessToken = token.accessToken
            }
        }
    }
})

export { 
    handler as GET,
    handler as POST   
}