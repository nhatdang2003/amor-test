"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    const isAboutPage = pathname === '/about'

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`h-[50px] md:h-[80px] fixed top-0 z-50 w-full flex justify-between items-center px-[20px] md:px-[40px] transition-colors duration-300 
        ${isScrolled ? `${isAboutPage ? 'bg-white/20' : 'bg-black/40'} backdrop-blur-[75px] shadow-[0_4px_4px_0_rgba(0,0,0,0.04)]` : 'bg-transparent'}`}>
            <Image src={isAboutPage ? '/amor-logo-light.png' : '/amor-logo.png'} alt="logo" width={119} height={32} />
            <div className='hidden md:flex items-center gap-[60px]'>
                <Link href="/" className={`text-sm font-bold ${isAboutPage ? 'text-black' : 'text-white'}`}>TRANG CHỦ</Link>
                <Link href="/about" className={`text-sm ${isAboutPage ? 'text-black' : 'text-white'}`}>VỀ AMOR</Link>
                <Link href="/contact" className={`text-sm ${isAboutPage ? 'text-black' : 'text-white'}`}>MENU</Link>
                <Link href="/contact" className={`text-sm ${isAboutPage ? 'text-black' : 'text-white'}`}>KHỞI NGHIỆP</Link>
            </div>
            <div className='hidden md:flex' />
            <div className='md:hidden'>
                <Button variant='ghost' className='p-0' onClick={() => setIsOpen(!isOpen)}>
                    <Image src={isAboutPage ? '/ic_hamburger_menu-light.png' : '/ic_hamburger_menu.png'} alt="menu" width={24} height={24} />
                </Button>
            </div>
            <Dialog
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <DialogContent
                    className={`!h-screen !w-screen !max-w-none !top-0 !left-0 !translate-x-0 !translate-y-0 !rounded-none !border-none !p-0 !m-0
                    ${isAboutPage ? 'bg-white/20' : 'bg-[#00000033]'} backdrop-blur-[75px] shadow-[0_4px_4px_0_rgba(0,0,0,0.04)] inset-0`}
                    showCloseButton={false}
                >
                    <div className='flex flex-col gap-4 p-6'>
                        <div className="flex items-center justify-between">
                            <Image src={isAboutPage ? '/amor-logo-light.png' : '/amor-logo.png'} alt="logo" width={89} height={24} />
                            <button className='flex items-center gap-2 p-2' onClick={() => setIsOpen(false)}>
                                <X className={`w-[24px] h-[24px] ${isAboutPage ? 'text-black' : 'text-white'}`} />
                            </button>
                        </div>
                        <div className='flex flex-col gap-7 mt-4'>
                            <Link href="/" className={`text-sm font-bold ${isAboutPage ? 'text-black' : 'text-white'} text-center`}>TRANG CHỦ</Link>
                            <Link href="/about" className={`text-sm ${isAboutPage ? 'text-black' : 'text-white'} text-center`}>VỀ AMOR</Link>
                            <Link href="/contact" className={`text-sm ${isAboutPage ? 'text-black' : 'text-white'} text-center`}>MENU</Link>
                            <Link href="/contact" className={`text-sm ${isAboutPage ? 'text-black' : 'text-white'} text-center`}>KHỞI NGHIỆP</Link>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </header>
    )
}

export default Navbar