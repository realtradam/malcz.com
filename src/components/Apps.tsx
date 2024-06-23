import { ReactComponent as GameHolsterMD } from '../md/apps_gameholster.md';
import { ReactComponent as MoreSoonMD } from '../md/apps_moresoon.md';



export default function Apps () {
	//const [games, setGames] = useState<GameType[]>([]);


	return(
		<>
		<div className="flex flex-col gap-16 w-full items-center max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title mb-16 dsm:mb-10">Apps</div>
					<div className="bg-stone-950 marker:text-stone-50 p-16 dsm:py-10 dsm:px-4 rounded-xl w-full max-w-[65ch] flex justify-center">
						<div className="w-full-after prose prose-invert flex justify-center w-full w-full-after">
							<GameHolsterMD />
						</div>
					</div>
					<div className="bg-stone-950 marker:text-stone-50 p-16 dsm:py-10 dsm:px-4 rounded-xl w-full max-w-[65ch] flex justify-center">
						<div className="prose prose-invert flex justify-center w-full w-full-after">
							<MoreSoonMD />
						</div>
					</div>
			</div>
		</>
	);
}
