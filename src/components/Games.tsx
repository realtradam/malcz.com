import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import GameCard from "./GameCard";
//import Button from "./Button";
import { GameType } from "../types";


export default function Games () {
	const [games, setGames] = useState<GameType[]>([]);

	useEffect(() => {
		const url = `${import.meta.env.VITE_API_TITLE}/api/v1/games`;
		fetch(url).then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		}).then((response) => setGames(response)); //.catch(() => navigate("/"));
	}, []);

	const allGames = games.map((game) => (
		<GameCard link={`/game/${game.titleSlug}`} game={game} key={game.id}/>
	));

	return(
		<>
		<div>
		<div className="flex flex-col gap-16 max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title">Games</div>
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color">
				</div>
			</div>
			<div className="flex flex-row flex-wrap gap-20 justify-around">
			{ allGames }
			</div>
		</div>
		</div>
		</>
	);
}
