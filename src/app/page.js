"use client"
import Mainwindow from "@/components/Mainwindow"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from 'next-themes'


export default function Home() {
  return (
    <>
    <ThemeProvider>
      <Navbar/>
      <Mainwindow/>
      </ThemeProvider>
    </>
  )
}
