import React from "react";
import Post from "./Post";

function Posts() {

	let UserPosts = [
		{
			id: 7,
			name: "Nobita Nobi",
			username: "nnnobita_7",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTfl5GzET3rKShmUYf4YDHgo_qt4cxhXzw&usqp=CAU",
			postImg: "https://img1.ak.crunchyroll.com/i/spire1/8825494dc11a6104649711bb63edde2f1647688923_main.jpg",
			address: "guwahati",
			caption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			id: 8,
			name: "Nobita Nobi",
			username: "nnnobita_7",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTfl5GzET3rKShmUYf4YDHgo_qt4cxhXzw&usqp=CAU",
			postImg: "https://img1.ak.crunchyroll.com/i/spire1/8825494dc11a6104649711bb63edde2f1647688923_main.jpg",
			address: "guwahati",
			caption: "it's me and doraemon chillin... lunchin!!!"
		},
		{
			id: 9,
			name: "Nobita Nobi",
			username: "nnnobita_7",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTfl5GzET3rKShmUYf4YDHgo_qt4cxhXzw&usqp=CAU",
			postImg: "https://img1.ak.crunchyroll.com/i/spire1/8825494dc11a6104649711bb63edde2f1647688923_main.jpg",
			address: "guwahati",
			caption: "it's me and doraemon chillin... lunchin!!!"
		},
		{
			id: 10,
			name: "Nobita Nobi",
			username: "nnnobita_7",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTfl5GzET3rKShmUYf4YDHgo_qt4cxhXzw&usqp=CAU",
			postImg: "https://img1.ak.crunchyroll.com/i/spire1/8825494dc11a6104649711bb63edde2f1647688923_main.jpg",
			address: "guwahati",
			caption: "it's me and doraemon chillin... lunchin!!!"
		},
		{
			id: 11,
			name: "Nobita Nobi",
			username: "nnnobita_7",
			avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTfl5GzET3rKShmUYf4YDHgo_qt4cxhXzw&usqp=CAU",
			postImg: "https://img1.ak.crunchyroll.com/i/spire1/8825494dc11a6104649711bb63edde2f1647688923_main.jpg",
			address: "guwahati",
			caption: "it's me and doraemon chillin... lunchin!!!"
		},

	]

	return(
		<div className="max-w-xl mt-3" > 
			{UserPosts.map( (uPost) => (
				<Post 
					{...uPost}
				/>
			) )}
		</div>
	)
}

export default Posts;
