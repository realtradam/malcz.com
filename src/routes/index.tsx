import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import Games from "../components/Games";
import UploadGame from "../components/UploadGame";
import Game from "../components/Game";
import Layout from "../components/Layout";

export default function Index()
{
	const [userData, setUserData] = useState({});
	useEffect(() => {
		const url = `${import.meta.env.VITE_API_TITLE}/api/v1/auth/data`;
		fetch(url, {
  credentials: "include"
}).then((response) => {
		if(response.ok) {
			return response.json();
		}
		throw new Error("Network response was not ok.");
	}).then((response) => setUserData(response.user_data));}, []);
		// get user data here
		// then pass it in as 'props' into the components
	return (<>
		{/*<h1>{userData.login}</h1>*/}
		<Router>
			<Routes>
				<Route path="/" element = {<Layout userData={userData}/>}>
					<Route index element={<Home />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/games" element={<Games />} />
					<Route path="/games/upload" element={<UploadGame />} />
					{/*<Route path="/games/upload" element={<GamesUpload />} />*/}
					<Route path="/game/:game" element={<Game />} />
				</Route>
			</Routes>
		</Router>
	</>);
}
