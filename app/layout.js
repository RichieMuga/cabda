import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | CABDA',
  description: "COMMUNITY ASSET BUILDING AND DEVELOPMENT ACTION, (CABDA) is a nonprofit organization that empowers families, through creating wealth and fostering community growth.Join us in supporting the vulnerable through sustainable businesses for a brighter future.",
  icons: {
    icon: 'favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
