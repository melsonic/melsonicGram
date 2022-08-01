import {faker} from "@faker-js/faker";
import React from "react";
import {useState, useEffect} from "react";
import Story from "./Story";

function Stories() {
	
	const [userStories, setUserStories] = useState([]);

	useEffect(() => {
		let userStories = [...Array(15)].map((_, i) => ({
			id: i,
			name: faker.name.findName(),
			username: faker.internet.userName(),
			avatar: faker.image.avatar(),			
			email: faker.internet.email(),
			phone: faker.phone.phoneNumber("##### #####"),
			address: faker.address.country(),
			dob: faker.date.birthdate({min: 18, max: 45, mode: 'age'})
		}));
		setUserStories(userStories);
	}, []);


	return (
		<div className="flex flex-row max-w-xl justify-start items-center overflow-x-scroll scrollbar bg-white shadow-md cursor-pointer pt-3">
			{ userStories.map((user) => (
				<Story 
					key = {user.id} 
					avatar = {user.avatar} 
					username = {user.username}
				/>
			)) }
		</div>
	)

}

export default Stories;
