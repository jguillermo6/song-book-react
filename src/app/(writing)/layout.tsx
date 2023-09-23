export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-indigo-500 container">     
      { children }
    </main>
  )
}
