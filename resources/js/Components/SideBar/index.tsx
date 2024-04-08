import { Link } from '@inertiajs/react';
import { IoCaretForward, IoChevronForward, IoCog, IoHome } from "react-icons/io5";
import React, { useState } from 'react'
import SideLink from '../SideLink';
import { LiaCashRegisterSolid } from 'react-icons/lia';
import { GiReceiveMoney } from 'react-icons/gi';
import ApplicationLogo from '../ApplicationLogo';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

const SideBar = () => {
    const [openSide, setOpenSide] = useState(true);
    const [dropdowOpen, setDropdowOpen] = useState(false);
    return (
        <aside className={`${openSide ? "md:w-72 " : "w-20"} h-full relative bg-sky-800 duration-300 p-5 pt-8 shadow-lg`}>

            <div onClick={() => setOpenSide(!openSide)} className={`${openSide ? "rotate-180 " : "0"} duration-300 absolute cursor-pointer flex items-center justify-center -right-2 w-7 h-7 rounded-full bg-white top-16 shadow-sm border-2 border-sky-800 text-sky-800 `}>
                <IoChevronForward />
            </div>

            {/* <div className={`${openSide ? "flex items-center justify-start" : "flex flex-col items-start justify-center pt-4"} `}> */}
            <div className={``}>
                <div className="flex items-center gap-x-4">
                    <img src="/logo/automahost.png" alt="Logo" className='w-10' />
                    {/* <ApplicationLogo width={`${openSide ? "w-16" : "w-10"} duration-500`} /> */}

                    <h1 className={`text-xl text-white font-bold duration-300 origin-left ${!openSide && "scale-0"}`}>Empresa</h1>
                </div>

            </div>
            <ul className='mt-4 flex flex-col gap-4'>
                <SideLink
                    url={route('dashboard')}
                    icon={<IoHome size={22} />}
                    openSide={openSide}
                    active={route().current('dashboard')}
                    label="Dashboard"
                />
                <SideLink
                    url={route('sales')}
                    icon={<GiReceiveMoney size={22} />}
                    openSide={openSide}
                    active={route().current('sales')}
                    label="Vendas"
                />
                <li className="">
                    <div className={`flex items-center p-2 text-base font-medium gap-2 rounded-t-md w-full cursor-pointer hover:rounded-t-md  ${dropdowOpen ? "bg-white text-gray-700 border-b" : "text-white"}`} onClick={() => setDropdowOpen(!dropdowOpen)}>
                        <div>
                            <IoCog size={22} />
                        </div>
                        <div className={`flex-1 witespace-pre duration-500 ${!openSide && "hidden"}`}>Configurações</div>
                        <div className={`witespace-pre duration-500 ${!openSide && "hidden"}`}>
                            <MdOutlineKeyboardArrowDown size={22} className={`duration-300 ${!dropdowOpen ? '-rotate-180' : 'rotate-0'}`} />
                        </div>
                    </div>
                    {dropdowOpen &&
                        <div className={`text-gray-600 ${!openSide && 'absolute rounded-r-md'} rounded-b-md ${!dropdowOpen ? 'w-full' : 'w-[248px]'} bg-white flex items-center pl-5 `}>
                            <ul className='w-full'>
                                <li className='w-full py-2 flex items-center '>
                                    <MdOutlineKeyboardArrowRight size={20} />
                                    <Link
                                        className='block hover:underline origin-left text-base'
                                        href="/empresa"
                                    >
                                        Dados da empresa
                                    </Link>
                                </li>
                                <li className='w-full py-2 flex items-center '>
                                    <MdOutlineKeyboardArrowRight size={20} />
                                    <Link
                                        className='block hover:underline origin-left text-base'
                                        href="/empresa"
                                    >
                                        Usuários
                                    </Link>
                                </li>
                                <li className='w-full py-2 flex items-center '>
                                    <MdOutlineKeyboardArrowRight size={20} />
                                    <Link
                                        className='block hover:underline origin-left text-base'
                                        href="/empresa"
                                    >
                                        Aparência
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }

                </li>
            </ul>
        </aside>
    )
}

export default SideBar