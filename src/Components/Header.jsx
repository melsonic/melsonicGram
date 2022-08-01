import React from "react";
import insta_logo from "../assets/instagram_logo.svg";
import {
	SearchIcon,
	ChatAltIcon,
	PlusCircleIcon,
	WifiIcon,
	HeartIcon
} from "@heroicons/react/outline";
import { 
	HomeIcon as HomeIconSolid,
} from "@heroicons/react/solid";


function Header() {
	return (
		<div className="py-3 px-5 bg-white shadow-md sticky z-10 top-0">
			<div className="max-w-4xl flex flex-row justify-between items-center mx-auto" >
				

				{/* logo */}
				<img src={insta_logo} className="h-10" alt="instagram logo"/>		



				{/* search space */}
				<div className="w-64 h-10 rounded-lg bg-gray-200 flex-row items-center hidden sm:flex">
					<SearchIcon className="absolute text-gray-500 h-5 pl-3 pointer-events-none" />
					<input placeholder="Search" className="pl-10 w-full h-full leading-tight bg-gray-100 rounded-lg focus:outline-gray-300 border-gray-200 border-2" />
				</div>
			
				

				{/* Right Side Icons */}
				<div className="h-10 flex flex-row items-center">
					<HomeIconSolid className="h-iconStyle" />
					<ChatAltIcon className="h-iconStyle" />
					<PlusCircleIcon className="h-iconStyle" />
					<WifiIcon className="h-iconStyle" />
					<HeartIcon className="h-iconStyle" />
					
					{/* Avatar */}
					<div className="h-7 w-7 ml-2 rounded-full bg-blue-500 border-orange-700 border-2"></div>
				</div>
			
			</div>
		</div>
	)
}

export default Header;

