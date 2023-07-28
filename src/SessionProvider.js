"use client"

const { SessionProvider } = require("next-auth/react")


const Provider = ({chidlren, session}) => {
    <SessionProvider session={session}>
        {chidlren}
    </SessionProvider>
}

export default Provider;