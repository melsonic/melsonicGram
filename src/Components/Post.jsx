import React from "react";
import {
	DotsHorizontalIcon,
} from "@heroicons/react/outline";
import PostBottom from "./PostBottom";

function Post({username, address, avatar, postImg, caption}) {
	
	return(
		<div className="mb-2 bg-white max-w-xl shadow-md">
			{ /* PostHeader */ }
			
			<div className="flex flex-row justify-between items-center p-5">
				<section className="flex flex-row items-center" >
					<img src={avatar} className="w-10 h-10 rounded-full p-px border-red-600 border-2" alt="avatar" />
					<section className="text-sm text-gray-600 pl-3">
						<p className="font-bold">{username}</p>
						<p className="text-xs">{address}</p>
					</section>
				</section>
				<section>
					<DotsHorizontalIcon className="w-5" />
				</section>
			</div>

			{ /* PostImage */ }

			<section>
				<img src={postImg} alt="post-image" className="" />
			</section>

			{ /* PostCaption + Comments */ }

			<PostBottom 
				username = {username}
				caption = {caption}
			/>

		</div>
	)
}

export default Post;
