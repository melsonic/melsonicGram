import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Footer from "./Footer";
function RightComp() {

	const [userSuggestions, setUserSuggestions] = useState([]);

	const userDetails = {
		username: "nnnobita_7",
		avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTfl5GzET3rKShmUYf4YDHgo_qt4cxhXzw&usqp=CAU",
		brand: "personal"
	}

	useEffect(function() {
		let userSugg = [...Array(5)].map((_, i) => {
			return ({
				id: i,
				name: faker.name.findName(),
				username: faker.internet.userName(),
				avatar: faker.image.avatar(),
				email: faker.internet.email(),
				phone: faker.phone.phoneNumber("##### #####"),
				address: faker.address.country(),
				dob: faker.date.birthdate({ min: 18, max: 45, mode: 'age' })
			})
		})
		setUserSuggestions(userSugg);
	}, [])

	return (
		<div className="w-72 pt-3 hidden lg:block sticky top-0">

			{/* my details */}
			<div className="flex flex-row items-center p-3">

				<section>
					<img src={userDetails.avatar} className="w-14 h-14 rounded-full shadow-md" />
				</section>

				<section className="text-sm flex-1 pl-4">
					<p className="text-gray-900">{userDetails.username}</p>
					<p className="text-xs text-gray-400">{userDetails.brand}</p>
				</section>

				<button type="button" className="text-xs text-blue-600 font-bold">
					Switch
				</button>
			</div>

			{/* suggestions for you + see all */}
			<div>
				<div className="flex flex-row justify-between items-center text-sm p-3 text-gray-600">
					<p>Suggestions for you</p>
					<p>See All</p>
				</div>
				{userSuggestions.map(user => (
					<div className="flex flex-row items-center px-3 py-2">

						<section>
							<img src={user.avatar} className="w-8 h-8 rounded-full object-contain shadow-md" />
						</section>

						<section className="text-xs flex-1 pl-4">
							<p className="text-gray-900">{user.username}</p>
							<p className="text-gray-400 text-[9px] pt-1">suggested for you</p>
						</section>

						<button type="button" className="text-xs text-blue-600 font-bold">
							Follow
						</button>

					</div>
				))
				}
			</div>
			{/* footer */}
			<Footer />
		</div>
	)
}

export default RightComp;
