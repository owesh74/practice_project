import React from "react";
import logo from "./logo.png"

const Navbar = () =>{
    return(

         <div className="navbar flex justify-between px-5 w-[100%]   bg-zinc-900 text-[#FED74F] items-center sticky top-0">
            <div className="logo">
<img src={logo} alt="Logo" className="h-16" />
            </div>
            <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar