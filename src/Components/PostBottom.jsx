import React from "react";
import {
	HeartIcon,
	ChatIcon,
	PaperAirplaneIcon,
	BookmarkIcon,
	EmojiHappyIcon
} from "@heroicons/react/outline";

function PostBottom({ username, caption }) {

	const [clickedMore, setclickedMore] = React.useState(false);

	function handleMoreClick() {
		setclickedMore(true);
	}

	return (
		<div>
			<section className="p-3 flex flex-row justify-between">
				<section className="flex flex-row">
					<HeartIcon className="w-6 text-gray-500 cursor-pointer" />
					<ChatIcon className="w-6 ml-2 text-gray-500 cursor-pointer" />
					<PaperAirplaneIcon className="w-6 ml-2 text-gray-500 cursor-pointer" />
				</section>
				<section>
					<BookmarkIcon className="w-6 text-gray-500 cursor-pointer" />
				</section>
			</section>
			<section>
				{ /* likes */}
				<p className="pl-3 my-0 py-0 text-sm">3 likes</p>
			</section>
			{ /* caption + date */}
			<section className="p-3">
				<p
					className={`text-sm leading-4 ${clickedMore ? "" : "truncate"}`}
				>
					<span className="font-bold">{username}</span>
					<span className="text-xs pl-2">{caption}</span>
				</p>
				<p
					className="text-xs text-blue-900 cursor-pointer hover:underline"
					onClick={handleMoreClick}
					style={{ display: clickedMore ? "none" : "block" }}
				>more...</p>
				<p className="text-[9px] text-gray-400 py-2">10 HOURS AGO</p>
			</section>
			{ /* comment */}
			<div className="p-3 border-gray-300 border-t">
				<form className="flex flex-row">
					<EmojiHappyIcon className="h-6 cursor-pointer text-gray-500"/>
					<textarea name="comment"
						placeholder="add a comment..."
						className="flex-1 mx-3 h-6 resize-none text-sm focus:outline-0"
					>

					</textarea>
					<button type="submit" className="text-sky-500 text-sm" >Post</button>
				</form>
			</div>
		</div>
	)
}

export default PostBottom;
