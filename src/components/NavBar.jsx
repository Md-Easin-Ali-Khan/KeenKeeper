'use client'


import { ChartLine, Clock3, House, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NavBar = () => {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);


    return (
        <nav className="sticky top-0 bg-white z-50">
            <div className="shadow-sm flex justify-between items-center px-4 md:px-20">

                <div className="flex-1 my-[23.5px]">
                    <Link href={'/'} className="font-extrabold text-[#244D3F] text-2xl">
                        Keen<span className='font-semibold text-[#1F2937]'>Keeper</span>
                    </Link>
                </div>

                <div>
                    <ul className="hidden md:flex menu menu-horizontal p-0">
                        <li><Link className={`${pathname === '/' ? 'text-white bg-[#244D3F]' : ''} btn py-3 px-4 font-semibold text-[16px] text-gray-500`} href={'/'}><House className='w-5 h-5'></House>Home</Link></li>
                        <li><Link className={`${pathname === '/timeline' ? 'text-white bg-[#244D3F]' : ''} btn py-3 px-4 font-semibold text-[16px] text-gray-500`} href={'/timeline'}><Clock3 className='w-5 h-5'></Clock3>Timeline</Link></li>
                        <li><Link className={`${pathname === '/stats' ? 'text-white bg-[#244D3F]' : ''} btn py-3 px-4 font-semibold text-[16px] text-gray-500`} href={'/stats'}><ChartLine className='w-5 h-5'></ChartLine>Stats</Link></li>
                    </ul>

                    <ul className={`md:hidden bg-white shadow-lg p-5 transition-all duration-500 absolute left-0 w-full z-50 flex flex-col items-center space-y-2.5 ${open ? 'top-full opacity-100' : '-top-[400px] opacity-0'}`}>
                        <li className="w-full text-center">
                            <Link className={`${pathname === '/' ? 'text-white bg-[#244D3F]' : ''} block py-3 px-4 font-semibold text-gray-500`} href={'/'}>Home</Link>
                        </li>
                        <li className="w-full text-center">
                            <Link className={`${pathname === '/timeline' ? 'text-white bg-[#244D3F]' : ''} block py-3 px-4 font-semibold text-gray-500`} href={'/timeline'}>Timeline</Link>
                        </li>
                        <li className="w-full text-center">
                            <Link className={`${pathname === '/stats' ? 'text-white bg-[#244D3F]' : ''} block py-3 px-4 font-semibold text-gray-500`} href={'/stats'}>Stats</Link>
                        </li>
                    </ul>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setOpen(!open)}>
                        {open ?
                            <X className="w-6 h-6"></X>
                            : <Menu className="w-6 h-6"></Menu>
                        }
                    </button>
                </div>

            </div>
        </nav>

    );
};

export default NavBar;