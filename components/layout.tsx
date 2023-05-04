import React, {FC, ReactNode} from 'react';
import {XMarkIcon} from "@heroicons/react/24/solid";


interface Props {
    children: ReactNode
}

const navLinks = [{
    title: 'Profile',
    href: '/profile'
}, {
    title: 'Directory',
    href: 'directory'
}, {
    title: 'Archive',
    href: 'archive'
}, {
    title: 'Calendar',
    href: 'calendar'
}, {
    title: 'Appointments',
    href: 'appointments'
}, {
    title: 'Submit a Ticket',
    href: 'ticket'
}]


const NavItem = ({title}: { title: string }) => {
    return (
        <div>
            <button className={"bg-green-700 text-black w-72 text-3xl text-left px-3.5 py-3"}>
                {title}
            </button>
        </div>
    )
}
const Layout: FC<Props> = ({children}) => {
    return (
        <div className={"bg-white flex flex-row min-h-screen"}>
            <nav className={"flex flex-col bg-[#A2BD96] justify-between w-96"}>
                <div className={'flex flex-col'}>
                    <div className={"pt-6 pb-20 text-center font-bold text-5xl text-black drop-shadow-2xl"}>
                        B.A.S
                    </div>
                    <div className={"flex flex-col gap-10 items-end"}>
                        <div>
                            <button className={"bg-white text-black w-72 text-3xl text-left px-2 py-2"}>
                                News
                            </button>
                        </div>

                        {
                            navLinks.map((link) => {
                                return (
                                    <NavItem key={link.title} title={link.title}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"pb-5"}>
                    <button className={"flex flex-row justify-between bg-green-700 text-black w-80 text-xl text-right px-3.5 py-3"}>
                            <XMarkIcon className={"h-10 w-10 flex-shrink-0"}/>
                        <div className={"pt-1 pl-5"}>
                            sample.brgy1203
                        </div>
                        <div>
                            <div className={"bg-black rounded-full w-10 h-10"}>

                            </div>
                        </div>
                    </button>
                </div>
            </nav>
            {children}
        </div>
    );
};

export default Layout;