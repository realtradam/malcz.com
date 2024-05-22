import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Button from "./Button";

//<Route path="/games/:user/:game" element={<Game />} />

//export default () => (
export default function Games () {
	let { user, game } = useParams();
//http://localhost:3000/api/v1/game/realtradam/orc-arena-of-time/index.html
	return(
		<>
			<div>
				<div className="flex flex-col gap-16 max-w-6xl shrink">
					<div className="title font-bold text-6xl font-title">Orc: Arena of Time</div>
						<iframe style={{ aspectRatio: 1 }} className="bg-black aspect-square max-h-[90vh] rounded" src="http://localhost:3000/api/v1/game/realtradam/orc-arena-of-time/index.html" title={game}></iframe>
				</div>
			</div>
		</>
	);
};
