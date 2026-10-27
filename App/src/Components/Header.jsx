
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white flex items-center justify-between p-4 shadow ">
            <button className="p-2 text-xl lg:hidden">
                <CiMenuBurger />
            </button>
            <h1 className="text-2xl font-bold pl-">Dashboard</h1>
            <input
                className= "bg-gray-100 h-8 w-100 rounded "
                type="text" 
                placeholder="🔍 search.. "   />
            <div className="ml-150 flex items-center"> 
                🔔 
            <Link
                className="text-black px-4 py-1.5 rounded-lg text-sm font-medium"
                to="/admin/login"
            >
                Login
            </Link>

            <div className="bg-gray-300 rounded-full w-10 h-10" />
            </div>
        </header>
    );
}
