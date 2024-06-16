

export type ImageRendering = "auto" | "crisp-edges" | "pixelated";
export type Tag = {
	id: number,
	tag_type: string,
	name: string,
};
export type GameType = {
	id: number,
	title: string,
	titleSlug: string,
	description: string,
	github_link: string,
	img_rendering: ImageRendering,
	status: string,
	order: number,
	created_at: string,
	updated_at: string,
	user_id: number,
	tags: Tag[],
	card_img: string,
	char_img: string,
	title_img: string,
};
export type GameCardProps = { link: string, game: GameType };
