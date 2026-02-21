export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="w-full max-w-full min-h-screen m-0 p-0 overflow-x-hidden antialiased">
        {children}
        {/* Temporary debug outline to find overflow issues - remove when done */}
        <style>{`
          * { outline: 1px solid red !important; }
        `}</style>
      </body>
    </html>
  )
}
