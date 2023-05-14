import MyProfile from "./components/MyProfile"
import Navbar from "./components/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "boggy patch",
  description:
    "trying out dave gray's next.js blog website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-slate-800x`}
      >
        <Navbar />
        <MyProfile />
        {children}
      </body>
    </html>
  )
}

// 22:46 blog posts starts in 06 - next.js Blog Website
// everything up to there is header etc

// line 18 was className={inter.className} but now updated
// to show how to combine classes such as an object reference
// with a string. The result doesn't look good so x added to disable.
