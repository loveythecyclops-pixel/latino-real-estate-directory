export const metadata = {
  title: 'Latino Real Estate Directory',
  description: 'Georgia Real Estate Resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
