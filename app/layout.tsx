import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from "@next/font/google";

export const metadata={
  title:"TodoApp",
  description:"TodoApp is a simple todo app built with Next.js and TailwindCSS",
}
const poppins=Poppins(
  {
    weight:'300',
    subsets:['latin']
    }
)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar  />
        <div className='md:max-w-4xl md:mx-auto flex flex-col mt-5 items-center w-full md:block'>
        {children}

        </div>
        
        </body>
    </html>
  )
}
