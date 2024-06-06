

export type ImageRendering = "auto" | "crisp-edges" | "pixelated";
export type GameType = { id: number, card_img: string, char_img: string, title_img: string, img_rendering: ImageRendering, titleSlug: string };
export type GameCardProps = { link: string, game: GameType };
