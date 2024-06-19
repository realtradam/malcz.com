//import { Link } from "react-router-dom";

//export default () => (
export default function CloseWindow () {

	// trigger localStorage listener in other tabs.
	// this forces react rerender where required.
	localStorage.setItem("logged in trigger", String(Math.random()));
	// close window once done
	window.close();

	// window can only be closed if it was opened by javascript.
	// if the window was opened by a user then just redirect to
	// the home page instead.
	window.location.replace("/");

	return(
		<>
		</>
	);
}
