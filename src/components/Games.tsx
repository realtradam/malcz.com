import { useState, useEffect, FormEvent } from "react";
//import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import Button from "./Button";
import { GameType } from "../types";


export default function Games () {
	const [games, setGames] = useState<GameType[]>([]);

	// old method
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

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault(); //stops submit from happening

		const target = e.target as typeof e.target & {
			title: { value: string };
			img_rendering: { value: string };
			//game_files: { files: FileList };
			zip: { value: string, files: FileList };
			card_img: { value: string, files: FileList };
			char_img: { value: string, files: FileList };
			title_img: { value: string, files: FileList };
		};

		//const form = e.target;
		const formData = new FormData();
		formData.append('game[title]', target.title.value);
		formData.append('game[img_rendering]', target.img_rendering.value);
		//for(let i =0; i < target.game_files.files.length; i++)
		//{
		//formData.append('game[game_files][]', target.game_files.files[i], target.game_files.files[i].name);
		//}
		formData.append('game[zip]', target.zip.files[0], target.zip.value);
		formData.append('game[card_img]', target.card_img.files[0], target.card_img.value);
		formData.append('game[char_img]', target.char_img.files[0], target.char_img.value);
		formData.append('game[title_img]', target.title_img.files[0], target.title_img.value);

		//for (var pair of formData.entries()) {
		//	//console.log(pair[0] + ', ' + pair[1])
		//};

		fetch(`${import.meta.env.VITE_API_TITLE}/api/v1/games`, {
			method: 'post',
			body: formData,
		});
	};
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
				<label>Image Rendering</label>
				<select name="img_rendering">
					<option value="pixelated">Pixelated</option>
					<option value="crisp-edges">Crisp Edges</option>
				</select>
				</div>
				{ /*<div>
				<label>Files</label>
				<input type="file" multiple name="game_files" />
				</div> */ }
				<div>
				<label>Zip</label>
				<input type="file" name="zip" />
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
			<div className="flex flex-row flex-wrap gap-20 justify-around">
			{ allGames }
			</div>
		</div>
		</div>
		</>
	);
}
