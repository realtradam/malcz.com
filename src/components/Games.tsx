import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import GameCard from "./GameCard";
//import Button from "./Button";
import { GameType } from "../types";
import { ReactComponent as IntroMD } from '../md/games_intro.md';


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
		<div className="flex flex-col gap-16 max-w-6xl shrink">
			<div className="title text-center font-bold text-6xl font-title">Games</div>
				<div className="flex justify-center w-full">
					<div className="marker:text-stone-50 rounded-xl w-full max-w-[65ch] flex justify-center bg-stone-950">
						<div className="flex justify-center w-full w-full-after w-full max-w-[65ch] text-white p-16">
							<IntroMD />
						</div>
					</div>
				</div>
			<div className="flex flex-row flex-wrap gap-20 justify-around">
			{ allGames }
			</div>
		</div>
		</>
	);
}
