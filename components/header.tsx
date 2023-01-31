import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Header() {
    const [isScrolled, setIsScorlling] = useState(false)

    useEffect(() => {
        const handleScrolle = () => {
            if (window.scrollY > 0) {
                setIsScorlling(true)
            } else {
                setIsScorlling(false)
            }
        }

        window.addEventListener('scroll', handleScrolle)
        return () => {
            window.removeEventListener('scroll', handleScrolle)
        }
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink cursor-default font-semibold text-white hover:text-white">
                        Home
                    </li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 text-sm font-light '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
                <p className='hidden lg:inline'>kids</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
                <Link href="/account">
                    <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header
