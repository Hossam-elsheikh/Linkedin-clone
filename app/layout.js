import NavBar from '@/components/Navbar/NavBar';
import './globals.css'
import { inter } from '@/app/ui/fonts';


export const metadata = {
  title: 'Linkedin',
  description: 'clone made by Hossam Elsheikh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
    </html>
  )
}
