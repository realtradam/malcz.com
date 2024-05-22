import React from "react";
//import { Link } from "react-router-dom";

//game = {
//	card_img: "",
//	char_img: "",
//	title_img: ""
//}

export default function GameCard ({ link = "./", width = "72", game = { card_img: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg", char_img: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.png", title_img: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" } }) 
{
	
	return (
		<>
		<a href={ link } className="block w-min pt-10 px-1" target="_blank">
			<div className="gameCard">
				<div className="gameCardWrapper">
					<img src={`/api/v1/games_img/realtradam/${game.titleSlug}.png?type=card`} className="gameCardCoverImg" />
				</div>
					<img src={`/api/v1/games_img/realtradam/${game.titleSlug}.png?type=title`} className="gameTitleImg p-5%" />
					<img src={`/api/v1/games_img/realtradam/${game.titleSlug}.png?type=char`} className="gameCharacterImg" />
			</div>
		</a>
		</>
	)
};
