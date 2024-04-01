import { Link } from '@inertiajs/react'
import React from 'react'

interface LinkProps {
    url?: any;
    openSide: any;
    icon: any;
    label: string;
    active: boolean;
}
const SideLink = (props: LinkProps) => {
    return (
        <li>
            <Link
                className={`flex items-center px-3.5 py-2 text-sm font-medium gap-2 rounded-md
                ${props.active ? "bg-white text-blue-700" : "text-white"}`}
                href={props.url}
            >
                <div>
                    {props.icon}
                </div>
                <div className={`witespace-pre duration-500 ${!props.openSide && "opacity-0 translate-x-28 overflow-hidden"}`}>{props.label}</div>
            </Link>
        </li>
    )
}

export default SideLink