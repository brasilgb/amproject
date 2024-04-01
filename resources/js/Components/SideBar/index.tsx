import { Link } from '@inertiajs/react';
import { IoCaretForward, IoChevronForward, IoCog, IoHome } from "react-icons/io5";
import React, { useState } from 'react'
import SideLink from '../SideLink';
import { LiaCashRegisterSolid } from 'react-icons/lia';
import { GiReceiveMoney } from 'react-icons/gi';
import ApplicationLogo from '../ApplicationLogo';

const SideBar = () => {
    const [openSide, setOpenSide] = useState(true);
    return (
        <aside className={`${openSide ? "md:w-72 " : "w-20"} h-full relative bg-sky-800 duration-500 px-4`}>

            <div className={`${openSide ? "rotate-180 " : "0"} duration-300 absolute cursor-pointer flex items-center justify-center -right-2 w-6 h-6 rounded-full bg-white top-16 `}>
                <IoChevronForward onClick={() => setOpenSide(!openSide)} />
            </div>

            <div className={`h-20 ${openSide ? "flex items-center justify-start" : "flex flex-col items-start justify-center pt-4"} `}>
                <div className="flex flex-col items-center justify-center rounded p-0.5 bg-white">
                    <ApplicationLogo width={`${openSide ? "w-16" : "w-10"} duration-500`} />
                </div>
                <div>
                    <h1 className={`ml-2 text-lg text-white font-bold witespace-pre duration-500 ${!openSide && "opacity-0 translate-x-28 overflow-hidden"}`}>Empresa</h1>
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
                <li>
                    <div className='flex items-center px-3.5 py-2 text-sm font-medium gap-2 rounded-md text-white'>
                        <div>
                            <IoCog size={22} />
                        </div>
                        <div className={`witespace-pre duration-500 ${!openSide && "opacity-0 translate-x-28 overflow-hidden"}`}>Configurações</div>
                    </div>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar