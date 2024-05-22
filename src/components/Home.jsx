import React, { } from "react";
//import { Link } from "react-router-dom";
import GameCard from "./GameCard";

//export default () => (
export default function Home () {
	var handleSubmit = (e) => {
		e.preventDefault() //stops submit from happening

		const formData = new FormData()
		formData.append('game[title]', e.target.title.value)
		formData.append('game[game_file]', e.target.game_file.files[0], e.target.game_file.value)

		for (var pair of formData.entries()) {
			console.log(pair[0] + ', ' + pair[1])
		};

		fetch('http://127.0.0.1:3000/api/v1/games', {
			method: 'post',
			body: formData,
		});
	}
	return(
		<>
		<div>
		<div className="flex flex-col gap-16 max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title">Get To Know Me a Little</div>
			<div className="">
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color">
						<h1 className="text-2xl">Debug! Again</h1>
						<p className="">
Ea optio vitae culpa voluptatem consectetur. Ab quisquam sed ipsum. Perspiciatis minus odit quas qui consequuntur dicta reiciendis a. Nihil minima sed aliquam.
		</p>
						<hr className="my-4" />
				</div>
				</div>
			</div>
		</div>
		</div>
		</>
	);
};
