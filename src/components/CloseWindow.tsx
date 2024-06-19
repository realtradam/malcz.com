//import { Link } from "react-router-dom";

//export default () => (
export default function Home () {

	localStorage.setItem("logged in trigger", String(Math.random()));
	window.close();
	window.location.replace("/");

	return(
		<>
		</>
	);
}
