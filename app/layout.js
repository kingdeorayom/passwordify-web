import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Passwordify - Simplify Security with Passwordify',
  description: 'Passwordify: Your Simple Solution for Secure Passwords. Effortlessly generate strong, secure passwords with ease. Discover the simplicity of better online security.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
