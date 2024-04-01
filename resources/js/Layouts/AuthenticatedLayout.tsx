import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import { PropsWithChildren, ReactNode } from 'react';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import SideBar from '@/Components/SideBar';

interface LayoutProps {
    children: ReactNode;
}

const Authenticated = ({ children }: LayoutProps) => {
    return (
        <main className="bg-gray-100">
            <div className='flex'>
                <div>
                    <SideBar/>
                </div>
                <div className='min-h-screen flex flex-1 flex-col bg-slate-100'>
                    <Header />
                    <div className='flex-grow'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    );
}
export default Authenticated;
