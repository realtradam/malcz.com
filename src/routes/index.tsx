import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Blogs from "../components/Blogs";
import Games from "../components/Games";
import UploadGame from "../components/UploadGame";
import Game from "../components/Game";
import Apps from "../components/Apps";
import Layout from "../components/Layout";
import CloseWindow from "../components/CloseWindow";

export default function Index()
{
	const [userData, setUserData] = useState({ name: '' });
	useEffect(() => {
		const update_login_status = () => {
			console.log("Triggered by login");
			//localStorage.removeItem("logged in trigger");
			const url = `${import.meta.env.VITE_API_TITLE}/api/v1/auth/data`;
			try { fetch(url, {
				credentials: "include"
			}).then((response) => {
				if(response.ok) {
					return response.json();
				}
				//throw new Error("Network response was not ok.");
			}).then((response) => response && setUserData(response.user_data)).catch((err) => { console.log(err); });}
			catch(err) { console.log(err); }
		};
		window.addEventListener('storage', update_login_status );
		update_login_status();
		return () => { window.removeEventListener('storage', update_login_status); };
	}, []);



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
			<Route path="/game/:game" element={<Game />} />
			<Route path="/apps" element={<Apps />} />
			<Route path="/closewindow" element={<CloseWindow />} />
			</Route>
			</Routes>
			</Router>
			</>);
}
