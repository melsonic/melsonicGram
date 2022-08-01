import React from "react";

function Story({ avatar, username }) {
	return (
	    <div className="h-15 w-12 m-3" >
			<img 
				src={avatar} 
				className="h-12 w-12 rounded-full object-contain p-px border-red-600 border-2 hover:scale-110 transition-transform" 
				alt="user_avatar"
			/>
			<p className="w-12 text-sm truncate">{username}</p>
		</div>
	)
}

export default Story;


      
