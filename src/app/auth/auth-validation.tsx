'use client'

import { useSession } from "next-auth/react"
import Login from "./login";


export default function AuthValidation({children}:{children: React.ReactNode}) {
    const { status } = useSession()
    if (status != "authenticated") {
        return (
            <>
                <h1>AuthClient</h1>
                <Login />
            </>)
    }

    return children;
}