import React from "react";
import Header from "./Components/Header";
import UserFeed from "./Components/UserFeed";

function App() {
	return (
		<div className="bg-gray-200" >
			{/* Header */}
			<Header />
			{/* UserFeed */}
			<UserFeed />
		</div>
	)
}

export default App;
