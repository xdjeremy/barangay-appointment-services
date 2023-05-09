import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { classNames } from "@/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import pic from "@/assets/images/kineme.jpg";
import Image from "next/image";

interface Props {
  children: ReactNode;
  activePage: string;
}

const navLinks = [{
    title: 'Manage Archive',
    href: '/admin-archive'
}, {
    title: 'View Appointments',
    href: '/admin-appointment'
}, {
    title: 'View Tickets',
    href: '/admin-ticket'
}]

const NavItems = ({title, href, active}: { title: string, href: string, active: boolean }) => {
    return (
        <Link href={href}
              className={classNames(active ? 'bg-white' : 'bg-green-700', 'text-black w-72 text-2xl font-bold text-left px-3.5 py-3')}>
            {title}
        </Link>
    )
}
const AdminLayoutPage: FC<Props>  = ({children, activePage}) => {
    return (
        <div className={"bg-white flex flex-row min-h-screen w-full"}>
            <nav className={"flex flex-col bg-[#A2BD96] justify-between w-[480px]"}>
                <div className={'flex flex-col'}>
                    <div className={"pt-6 pb-4 text-center font-bold text-5xl drop-shadow-2xl text-green-900"}>
                        B.A.S
                    </div>
                    <div className={"top-2 pb-64 text-center font-bold text-3xl drop-shadow-2xl text-green-900 "}>
                        ADMIN DASHBOARD
                    </div>
                    <div className={"flex flex-col gap-10 items-end"}>
                        {
                            navLinks.map((link) => {
                                return (
                                    <NavItems href={link.href} active={activePage === link.title} key={link.title}
                                             title={link.title}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"pb-5"}>
                    <button
                        className={"flex flex-row justify-between bg-green-700 text-black w-80 text-xl text-right px-3.5 py-3"}>
                        <XMarkIcon className={"h-10 w-10 flex-shrink-0"}/>
                        <div className={"pt-1 pl-5"}>
                            sample.brgy1203
                        </div>
                        <div>
                            <div className={"bg-black rounded-full w-10 h-10"}>
                                <Image src={pic} alt={'profile'} width={160} height={160}
                                       className={"rounded-full w-10 h-10 overflow-hidden"}/>
                            </div>
                        </div>
                    </button>
                </div>
            </nav>
            <div className={"w-full"}>
                {children}
            </div>
        </div>
    );
};

export default AdminLayoutPage;