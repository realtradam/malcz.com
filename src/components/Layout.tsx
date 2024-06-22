import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

export type userData = { userData: { name: string } };

export default function Layout ({userData}: userData) 
{
	const loginLink = () => {
		window.open(`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENTID}`);
	};

	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [sidebarClosed, setSidebarClosed] = useState(false);
	const [sidebarInit, setSidebarInit] = useState(true);
	const handleSidebarOpen = () => {
		if(sidebarInit) {
			setSidebarOpen(true);
			setSidebarInit(false);
		}
		else {
			setSidebarOpen(!sidebarOpen);
			setSidebarClosed(!sidebarClosed);
		}
	};
	const handleSidebarClickaway = () => {
		if(!sidebarInit)
			{
				setSidebarOpen(false);
				setSidebarClosed(true);
			}
	};

	return (
	<>
		<div id="page" className="star flex flex-row min-h-screen max-h-screen bg-amber-400 text-stone-950 text-xl bg-star bg-repeat bg-[length:170px_170px]">
				<div onClick={handleSidebarOpen} className={`${sidebarOpen ? 'sidebarOpen' : ''} ${sidebarClosed ? 'sidebarClosed' : ''} ${sidebarInit ? 'sidebarInit' : ''} sidebar-animation flex items-center justify-center md:hidden fixed shadow-xl ml-[17rem] m-4 h-12 w-12 text-stone-50 bg-stone-800 rounded-[5px] z-[5]`}>
				<div className={`${sidebarClosed || sidebarInit ? '' : 'hidden'} flex items-center justify-center`}>
				<i className="fa-solid fa-chevron-right w-6 h-6"></i>	
				</div>
				<div className={`${sidebarOpen ? '' : 'hidden'} flex items-center justify-center`}>
				<i className="fa-solid fa-chevron-left w-6 h-6"></i>
				</div>
			</div>
			<div id="sidebar" className={`${sidebarOpen ? 'sidebarOpen' : ''} ${sidebarClosed ? 'sidebarClosed' : ''} ${sidebarInit ? 'sidebarInit' : ''} sidebar-animation dmd:fixed dmd:z-[4] relative flex flex-row shrink-0 grow-0 h-vh w-64 items-top bg-stone-800`}>
				<nav id="sidebar-content" dir="rtl" className="text-stone-50 p-6 w-full h-screen overflow-y-auto overflow-x-hidden">
		<div dir='ltr'>
					{ userData.name ? <div className="flex items-end gap-2 pb-2"> <div className="text-xs"> Logged in as: </div> <div>{userData.name}</div> </div> : <a href="" onClick={loginLink} className="pb-2"> Login with Github </a> }
					<div className="text-3xl py-10 text-center font-title">Adam <br/>Malczewski</div>
					<div className="flex flex-col items-center gap-1">
							<Button link={ <Link onClick={handleSidebarClickaway} to="/" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">About Me</div></Link> }/>
							<Button link={ <Link onClick={handleSidebarClickaway} to="/apps" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">Apps</div></Link> }/>
							<Button link={ <Link onClick={handleSidebarClickaway} to="/games" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">Games</div></Link> }/>
							{/*<Button link={ <Link to="/blogs" className="absolute flex top-0 left-0 w-36 h-16 text-stone-50 bg-transparent justify-center items-center" role="button"><div className="h-min">Blog</div></Link> }/>*/}
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
								<Button link={<a target="_blank" id="contact" href="https://github.com/realtradam" className="absolute flex top-0 left-0 w-10 h-16 text-stone-50 bg-transparent justify-center items-center"><i className="fa-brands fa-github"></i></a>} width={10} height={16} spinner={3}/>
								<Button link={<a target="_blank" id="contact" href="https://www.linkedin.com/in/adammalczewski/" className="absolute flex top-0 left-0 w-10 h-16 text-stone-50 bg-transparent justify-center items-center"><i className="fa-brands fa-linkedin"></i></a>} width={10} height={16} spinner={3}/>
								<Button link={<a target="_blank" id="contact" href="https://tradam.itch.io" className="absolute flex top-0 left-0 w-10 h-16 text-stone-50 bg-transparent justify-center items-center"><i className="fa-brands fa-itch-io"></i></a>} width={10} height={16} spinner={3}/>
							</div>
					</div>
		</div>
				</nav>
				<div id="sawtooth-wrap" className="dmd:relative dmd:h-screen z-[5] sawtooth-left-wrap h-full">
					<div id="sawtooth" className="sawtooth-left w-4 h-full bg-amber-400"></div>
				</div>
				<div className="md:hidden h-full w-5 -right-5 absolute" style={{background: "linear-gradient(90deg, rgba(251,191,36,1) 0%, rgba(251,191,36,0) 100%)"}}></div>
			</div>
			<div onClick={handleSidebarClickaway} id="radial-wrap" className="shrink w-full max-h-vh h-vh overflow-auto overflow-x-hidden">
				<div id="content" className="flex justify-center items-center w-full py-20 px-14 dmd:px-6">	<Outlet /> </div>
			</div>
		</div>
		</>
	);
}
