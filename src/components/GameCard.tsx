//import React from "react";
import { Link } from "react-router-dom";
import { GameCardProps } from "../types";

//game = {
//	card_img: "",
//	char_img: "",
//	title_img: ""
//}

export default function GameCard ({ link, game }: GameCardProps) 
{
	
	return (
		<>
		<Link to={ link } role="button" className="block w-min pt-10 px-1">
			<div className="gameCard">
				<div className="gameCardWrapper">
					<img style={{imageRendering: game.img_rendering}} src={`${import.meta.env.VITE_API_TITLE}/api/v1/games_img/realtradam/${game.titleSlug}.png?type=card`} className="gameCardCoverImg" />
				</div>
					<img style={{imageRendering: game.img_rendering}} src={`${import.meta.env.VITE_API_TITLE}/api/v1/games_img/realtradam/${game.titleSlug}.png?type=title`} className="gameTitleImg p-5%" />
					<img style={{imageRendering: game.img_rendering}} src={`${import.meta.env.VITE_API_TITLE}/api/v1/games_img/realtradam/${game.titleSlug}.png?type=char`} className="gameCharacterImg" />
			</div>
		</Link>
		</>
	);
}
