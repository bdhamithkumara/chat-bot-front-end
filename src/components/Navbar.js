"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaRegMoon } from "react-icons/fa";
import {BsFillVolumeUpFill, BsFillVolumeMuteFill} from 'react-icons/bs'

const Navbar = () => {

    const { theme, setTheme } = useTheme()


    return (
            <nav className="w-full top-0 left-0 border-b border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">DKBoT</span>
                    <div className='flex'>
                        <button className="block border-2 border-black  rounded " onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? <FaSun className='m-2' /> : <FaRegMoon className='m-2' />}
                        </button>
                        <button className="block border-2 border-black  rounded " >
                        {theme === "dark" ? <BsFillVolumeUpFill className='m-2' /> : <BsFillVolumeMuteFill className='m-2' />}
                    </button>
                    </div>
                </div>
            </nav>
       
    )
}

export default Navbar