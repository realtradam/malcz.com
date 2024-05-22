import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from "./Button";
export default function Layout ({userData}) 
{
	console.log(userData);
	//const [userData, setUserData] = useState({ name: "" });
	
	// if the user tries to access the isolated domain then we redirect them
	// this is NOT done for security, only for good UX
	// rails serves the react app no matter what
	// so the app would be broken when served on the isolated domain
	const domain = window.location.host;
	console.log(domain);
	if(domain === "localhost:3000")
	{
		window.location.replace("http://127.0.0.1:3000");
	}

	return (
	<>
		<div id="page" className="star flex flex-row min-h-screen max-h-screen bg-amber-400 text-stone-950 text-xl bg-star bg-repeat bg-[length:170px_170px]">
			<div id="sidebar" className="flex flex-row shrink-0 grow-0 h-vh w-64 items-top bg-stone-800">
				<nav id="sidebar-content" dir="rtl" className="text-stone-50 p-6 w-full h-screen overflow-y-auto overflow-x-hidden">
		<div dir='ltr'>
					{ userData.name ? <div className="flex items-end gap-2 pb-2"> <div className="text-xs"> Logged in as: </div> <div>{userData.name}</div> </div> : <a href="https://github.com/login/oauth/authorize?client_id=74468ad0847e527262d9" className="pb-2"> Login with Github </a> }
					<div className="text-3xl py-10 text-center font-title">Adam Malczewski</div>
					<div className="flex flex-col items-center gap-1 w-full">
							<Button link={ <Link to="/" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">About Me</div></Link> }/>
							<Button link={ <Link to="/blogs" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">Blog</div></Link> }/>
							<Button link={ <Link to="/games" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">Games</div></Link> }/>
							<Button link={ <div className="text-stone-50 bg-transparent w-36 h-16 flex justify-center items-center">
								<a id="contact" href="mailto:adam@malcz.com" className="w-36 h-16 relative text-center whitespace-nowrap flex justify-center items-center">
								<div className="contact w-36 h-16 flex items-center justify-center">
								<span className="h-min">Contact</span>
								</div>
								<div className="contact w-36 h-16 flex items-center justify-center">
								<span className="text-sm h-min">Adam@Malcz.com</span>
								</div>
								</a>	
								</div> }/>
							<div className="socials flex flex-row place-content-center gap-1">
								<Button link={<a id="contact" href="https://github.com/realtradam" className="absolute flex top-0 left-0 w-10 h-16 text-stone-50 bg-transparent justify-center items-center"><i className="fa-brands fa-github"></i></a>} width={10} height={16} spinner={3}/>
								<Button link={<a id="contact" href="https://www.linkedin.com/in/adammalczewski/" className="absolute flex top-0 left-0 w-10 h-16 text-stone-50 bg-transparent justify-center items-center"><i className="fa-brands fa-linkedin"></i></a>} width={10} height={16} spinner={3}/>
								<Button link={<a id="contact" href="https://tradam.itch.io" className="absolute flex top-0 left-0 w-10 h-16 text-stone-50 bg-transparent justify-center items-center"><i className="fa-brands fa-itch-io"></i></a>} width={10} height={16} spinner={3}/>
							</div>
					</div>
		</div>
				</nav>
				<div id="sawtooth-wrap" className="sawtooth-left-wrap h-full">
					<div id="sawtooth" className="sawtooth-left w-4 h-full bg-amber-400"></div>
				</div>
			</div>
			<div id="radial-wrap" className="shrink w-full max-h-vh h-vh overflow-auto overflow-x-hidden">
				<div id="content" className="flex justify-center items-center w-full p-20">	<Outlet /> </div>
			</div>
		</div>
		</>
	)
};
