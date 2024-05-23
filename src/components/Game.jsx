import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//<Route path="/game/:game" element={<Game />} />

//export default () => (
export default function Games () {
	let { user, game } = useParams();
//http://%{VITE_API_TITLE}/api/v1/game/realtradam/orc-arena-of-time/index.html
	return(
		<>
			<div className="w-max flex grow shrink justify-center">
				<div className="w-max flex flex-col gap-16 max-w-6xl shrink grow">
					<div className="title font-bold text-6xl font-title">{game}</div>
						<iframe style={{ aspectRatio: 1 }} className="bg-black aspect-square max-h-[90vh] rounded" src={`${import.meta.env.VITE_API_TITLE}/game/realtradam/${game}/index.html`} title={game}></iframe>
				</div>
			</div>
		</>
	);
};
