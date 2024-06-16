import { useState, useEffect, FormEvent } from "react";
import Button from "./Button";
import ReactMarkdown from 'react-markdown';
import { TagPicker } from 'rsuite';

type platformTag = {
	label: string
	value: string
};

type platformTagRaw = {
	name: string
};

export default function UploadGame () {
	const [markdownInput, setMarkdownInput] = useState<string>("");
	const [platformTags, setPlatformTags] = useState<platformTag[]>([]);
	const [platformTagsData, setPlatformTagsData] = useState<string[]>([]);

	useEffect(() => {
		const url = `${import.meta.env.VITE_API_TITLE}/api/v1/tags?tag_type=platform`;
		fetch(url).then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		}).then((response) => setPlatformTags(
			response.map(
				(item: platformTagRaw) => ({ label: item.name, value: item.name })
			)
		)); //.catch(() => navigate("/"));
	}, []);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault(); //stops submit from happening

		const target = e.target as typeof e.target & {
			title: { value: string };
			img_rendering: { value: string };
			github_link: { value: string };
			//game_files: { files: FileList };
			zip: { value: string, files: FileList };
			card_img: { value: string, files: FileList };
			char_img: { value: string, files: FileList };
			title_img: { value: string, files: FileList };
			status: { value: number };
		};

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
		formData.append('game[github_link]', target.github_link.value);
		formData.append('game[status]', `${target.status.value}`);
		console.log("before the for loop");
		for(let i = 0; i < platformTagsData.length; i++)
		{
			console.log(platformTagsData[i]);
			formData.append('game[platform_tag][]', platformTagsData[i]);
		}
		console.log("after the for loop");

		fetch(`${import.meta.env.VITE_API_TITLE}/api/v1/games`, {
			credentials: 'include',
			method: 'post',
			body: formData,
		});
	};
	return(
		<>
		<div>
		<div className="flex flex-col gap-16 max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title">Upload Game</div>
			<div className="">
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color">
				<form onSubmit={handleSubmit} action="/upload" method="post" className="flex flex-col gap-4">
				<div className="flex flex-col">
				<label>Title</label>
				<input type="text" name="title" />
				</div>
				<div className="flex flex-col gap-2">
				<div className="flex flex-col">
				<label>Description</label>
				<textarea
					className="min-h-32 grow p-4"
					name="description"
					value={markdownInput}
					onChange={(data) => setMarkdownInput(data.target.value)}
				/>
				</div>
				<div className="flex flex-col">
				<label>Preview</label>
				<ReactMarkdown
					className="prose min-h-32 bg-white p-4"
					children={markdownInput}
				/>
				</div>
				</div>
				<div className="flex flex-col">
				<label>Github Link</label>
				<input type="text" name="github_link" />
				</div>
				<div className="flex flex-col">
				<label>Tags</label>
				<TagPicker
					data={platformTags}
					style={{ width: 300 }}
					onChange={(items) => setPlatformTagsData(items)}
				/>
				</div>
				<div className="flex flex-col">
				<label>Image Rendering</label>
				<select name="img_rendering">
					<option value="crisp-edges">Crisp Edges</option>
					<option value="pixelated">Pixelated</option>
				</select>
				</div>
				<div className="flex flex-col">
					<label>Game Zip</label>
					<input type="file" name="zip" />
				</div>
				<div className="flex flex-col">
					<label>Card Image</label>
					<input type="file" name="card_img" />
				</div>
				<div className="flex flex-col">
					<label>Character Image</label>
					<input type="file" name="char_img" />
				</div>
				<div className="flex flex-col">
					<label>Title Image</label>
					<input type="file" name="title_img" />
				</div>
				<div className="flex flex-col">
					<label>Status</label>
					<select name="status">
						<option value="0">Draft</option>
						<option value="1">Published</option>
					</select>
				</div>
				<div style={{ boxShadow: 'rgba(255,255,255,.1) 0 1px 0,rgba(0,0,0,.8) 0 1px 7px 0 inset' }} className="p-[5px] w-min h-min bg-stone-800 rounded-[5px]">
					<Button width={ 28 } height={ 12 } link={ <button type="submit" className="w-28 h-12 bg-stone-transparent text-stone-50 rounded">Submit</button> }/>
				</div>
				
				</form>
				</div>
		</div>
			</div>
		</div>
		</div>
		</>
	);
}
