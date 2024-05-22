import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Button from "./Button";

//export default () => (
export default function Games () {
	const [games, setGames] = useState([]);
	useEffect(() => {
		const url = "/api/v1/games";
		fetch(url).then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		}).then((response) => setGames(response)).catch(() => navigate("/"));
	}, []);
	const allGames = games.map((game) => (
		<GameCard game={game} key={game.id}/>
	));
	var handleSubmit = (e) => {
		e.preventDefault() //stops submit from happening
		const form = e.target;
		const formData = new FormData()
		formData.append('game[title]', form.title.value)
		for(let i =0; i < form.game_files.files.length; i++)
		{
		formData.append('game[game_files][]', form.game_files.files[i], form.game_files.files[i].value);
		}
		formData.append('game[card_img]', form.card_img.files[0], form.card_img.value);
		formData.append('game[char_img]', form.char_img.files[0], form.char_img.value);
		formData.append('game[title_img]', form.title_img.files[0], form.title_img.value);

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
			<div className="title font-bold text-6xl font-title">Games</div>
			<div className="">
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color">
				<form onSubmit={handleSubmit} action="/upload" method="post" className="flex flex-col gap-4">
				<div>
				<label>Title</label>
				<input type="text" name="title" />
				</div>
				<div>
				<label>Files</label>
				<input type="file" multiple="multiple" name="game_files" />
				</div>
				<div>
				<label>Card Image</label>
				<input type="file" name="card_img" />
				</div>
				<div>
				<label>Character Image</label>
				<input type="file" name="char_img" />
				</div>
				<div>
				<label>Title Image</label>
				<input type="file" name="title_img" />
				</div>
				<div style={{ boxShadow: 'rgba(255,255,255,.1) 0 1px 0,rgba(0,0,0,.8) 0 1px 7px 0 inset' }} className="p-[5px] w-min h-min bg-stone-800 rounded-[5px]">
					<Button width={ 28 } height={ 12 } link={ <button type="submit" className="w-28 h-12 bg-stone-transparent text-stone-50 rounded">Submit</button> }/>
				</div>
				
				</form>
				</div>
		</div>
			</div>
			{ allGames }
			<div className="flex flex-row flex-wrap gap-20 justify-around">
				<GameCard />
				<GameCard />
				<GameCard />
				<GameCard />
				<GameCard />
				<GameCard />
			</div>
		</div>
		</div>
		</>
	);
};
