import React, {FC, ReactNode, useState} from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import pic from "@/assets/images/kineme.jpg";
import Image from "next/image";
import { classNames } from "@/utils";
import Link from "next/link";
import { useUser } from "@/context";
import ConfirmButton from "@/components/confirm.button";
import CancelButton from "@/components/cancel.button";

interface Props {
  children: ReactNode;
  activePage: string;
}

const navLinks = [
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Directory",
    href: "directory",
  },
  {
    title: "Archive",
    href: "archive",
  },
  {
    title: "Calendar",
    href: "calendar",
  },
  {
    title: "Appointments",
    href: "appointments",
  },
  {
    title: "Submit a Ticket",
    href: "ticket",
  },
];

const NavItem = ({
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
        "w-72 px-3.5 py-3 text-left text-3xl text-black"
      )}
    >
      {title}
    </Link>
  );
};
const Layout: FC<Props> = ({ children, activePage }) => {
  const { user } = useUser();
  const [openLogout, setOpenLogout] = useState(false)
  return (
      <>
        {
          openLogout && (
                <div className={"absolute top-1/3 left-1/3 w-[776px] z-10 text-black text-center bg-[#D9D9D9] rounded-lg"}>
                  <div className={"font-medium text-2xl pt-12 pb-40"}>
                    Logout Notice
                  </div>
                  <div className={"text-2xl"}>
                    Are you sure you want to logout?
                  </div>
                  <div className={"flex flex-row justify-between pt-40 px-24 pb-20"}>
                    <ConfirmButton/>
                    <CancelButton clickHandler={() => setOpenLogout(false)}/>
                  </div>

                </div>
            )
        }
        <div className={"flex min-h-screen w-full flex-row bg-white"}>
          <nav className={"flex w-[480px] flex-col justify-between bg-[#A2BD96]"}>
            <div className={"flex flex-col"}>
              <div
                  className={
                    "pb-20 pt-6 text-center text-5xl font-bold text-black drop-shadow-2xl"
                  }
              >
                B.A.S
              </div>
              <div className={"flex flex-col items-end gap-10"}>
                {navLinks.map((link) => {
                  return (
                      <NavItem
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
                <XMarkIcon className={"h-10 w-10 flex-shrink-0"} onClick={() => setOpenLogout(true)}/>
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
      </>
  );
};

export default Layout;