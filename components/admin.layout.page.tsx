import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { classNames } from "@/utils";
import { XMarkIcon } from "@heroicons/react/24/solid";
import pic from "@/assets/images/kineme.jpg";
import Image from "next/image";
import { useUser } from "@/context";

interface Props {
  children: ReactNode;
  activePage: string;
}

const navLinks = [
  {
    title: "Manage Archive",
    href: "/admin-archive",
  },
  {
    title: "View Appointments",
    href: "/admin-appointment",
  },
  {
    title: "View Tickets",
    href: "/admin-ticket",
  },
  {
    title: "Admin Deleted",
    href: "/admin-deleted",
  }
];

const NavItems = ({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        active ? "bg-white" : "bg-green-700",
        "w-72 px-3.5 py-3 text-left text-2xl font-bold text-black"
      )}
    >
      {title}
    </Link>
  );
};
const AdminLayoutPage: FC<Props> = ({ children, activePage }) => {
  const { user } = useUser();

  return (
    <div className={"flex min-h-screen w-full flex-row bg-white"}>
      <nav className={"flex w-[480px] flex-col justify-between bg-[#A2BD96]"}>
        <div className={"flex flex-col"}>
          <div
            className={
              "pb-4 pt-6 text-center text-5xl font-bold text-green-900 drop-shadow-2xl"
            }
          >
            B.A.S
          </div>
          <div
            className={
              "top-2 pb-64 text-center text-3xl font-bold text-green-900 drop-shadow-2xl "
            }
          >
            ADMIN DASHBOARD
          </div>
          <div className={"flex flex-col items-end gap-10"}>
            {navLinks.map((link) => {
              return (
                <NavItems
                  href={link.href}
                  active={activePage === link.title}
                  key={link.title}
                  title={link.title}
                />
              );
            })}
          </div>
        </div>
        <div className={"pb-5"}>
          <button
            className={
              "flex w-80 flex-row justify-between bg-green-700 px-3.5 py-3 text-right text-xl text-black"
            }
          >
            <XMarkIcon className={"h-10 w-10 flex-shrink-0"} />
            <div className={"pl-5 pt-1"}>{user?.name}</div>
            <div>
              <div className={"h-10 w-10 rounded-full bg-black"}>
                <Image
                  src={pic}
                  alt={"profile"}
                  width={160}
                  height={160}
                  className={"h-10 w-10 overflow-hidden rounded-full"}
                />
              </div>
            </div>
          </button>
        </div>
      </nav>
      <div className={"w-full"}>{children}</div>
    </div>
  );
};

export default AdminLayoutPage;