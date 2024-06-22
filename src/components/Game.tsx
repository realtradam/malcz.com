import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameType } from "../types";
import ReactMarkdown from 'react-markdown';

//<Route path="/game/:game" element={<Game />} />

//export default () => (
export default function Games () {
	const { game } = useParams();
	const [gameData, setGameData] = useState<GameType>();

	useEffect(() => {
		const url = `${import.meta.env.VITE_API_TITLE}/api/v1/games/realtradam/${game}`;
		fetch(url).then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		}).then((response) => setGameData(response)); //.catch(() => navigate("/"));
	}, [game]);
//http://%{VITE_API_TITLE}/api/v1/game/realtradam/orc-arena-of-time/index.html
	return(
		<>
			<div className="flex grow shrink justify-center">
				<div className="flex flex-col gap-16 max-w-6xl shrink grow">
						<div className="flex justify-center">
							<img style={{imageRendering: gameData?.img_rendering}} src={`${import.meta.env.VITE_API_TITLE}/api/v1/games_img/realtradam/${gameData?.titleSlug}.png?type=title`} className="gameTitleImg max-w-lg" />
						</div>
						<iframe style={{ aspectRatio: 1 }} className="bg-black aspect-square max-h-[90vh] rounded" src={`${import.meta.env.VITE_API_TITLE}/game/realtradam/${game}/index.html`} title={game}></iframe>
						<div className="flex justify-center mt-4 px-12 py-16 overflow-y-auto rounded-xl bg-stone-950 ">
						<ReactMarkdown
							className="bg-stone-950 prose prose-invert marker:text-stone-50 dsm:py-10 dsm:px-4 rounded-xl"
							children={gameData?.description}
						/>
						</div>
				</div>
			</div>
		</>
	);
}
