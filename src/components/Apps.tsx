import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import GameCard from "./GameCard";
//import Button from "./Button";
//import { GameType } from "../types";


export default function Apps () {
	//const [games, setGames] = useState<GameType[]>([]);


	return(
		<>
		<div>
		<div className="flex flex-col gap-16 max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title">Apps</div>
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color">
				</div>
			</div>
			<div className="prose prose-invert-off">
			<h1>Game Holster</h1>
			<p>This is a work in progress thingie</p>
			<p>talk about your app here</p>
			</div>
		</div>
		</div>
		</>
	);
}
