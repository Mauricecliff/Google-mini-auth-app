"use client";

import { SessionProvider } from 'next-auth/react'


export default function Home(session: any) {
  return (
    <SessionProvider session={session}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          hello world
        </main>
    </SessionProvider>
    
  )
}
