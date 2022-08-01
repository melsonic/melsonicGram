import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import RightComp from "./RightComp";
function UserFeed() {
	return (
		<div className="grid grid-cols-[auto_auto] justify-center mt-2 mx-auto pb-2 grid-flow-col lg:gap-3" >
			
			<section>
				<Stories />
				<Posts />
			</section>

			<RightComp />
		
		</div>
	)
}

export default UserFeed;
