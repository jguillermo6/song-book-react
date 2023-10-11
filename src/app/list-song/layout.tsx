'use client'

import { useRouter } from 'next/navigation';
import NavButton from "../controls/nav-button"

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter()

  return (
    <>
      <h1>jeje</h1>
      <nav>
        <NavButton title="title" action={() => router.push("/create")} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-indigo-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> 
        </NavButton>
      </nav>
      <main className="container">
        { children }
      </main>
    </>
  )
}
