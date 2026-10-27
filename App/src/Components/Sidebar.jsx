
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiInvoiceninja } from "react-icons/si";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
    const [darkMode, setDarkMode] = useState(false);

    const navItems = [
        { to: "/dashboard", name: "Dashboard", icon: <MdDashboard /> },
        { to: "/client", name: "Clients", icon: <FaUserAlt /> },
        { to: "/project", name: "Project", icon: <GoProjectSymlink /> },
        { to: "/invoices", name: "Invoices", icon: <SiInvoiceninja /> },
        { to: "/secure-exchange", name: "Secure exchange", icon: <RiSecurePaymentFill /> },
        { to: "/messages", name: "Messages", icon: <AiOutlineMessage /> },
        { to: "/logout", name: "Log out", icon: <IoIosLogOut /> },
    ];

    return (
        <aside className={`w-64 shrink-0 min-h-screen shadow ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}>
            <div className="p-4 text-xl font-bold">Logo</div>

            <nav className="p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.to}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="pl-20">
                <button
                    className="p-2 rounded-full bg-black text-white"
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀" : "🌙"}
                </button>
            </div>
        </aside>
    );
}
