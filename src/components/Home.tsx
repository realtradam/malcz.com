import { ReactComponent as HomeMD } from '../md/main.md';

export default function Home () {
	return(
		<>
		<div>
		<div className="flex flex-col gap-16 max-w-16xl shrink">
			<div className="title font-bold text-6xl font-title mb-32">Welcome</div>
			<div className="">
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color bg-stone-950 prose prose-invert marker:text-stone-50 p-16 rounded-xl">
					<HomeMD />
					</div>
				</div>
			</div>
		</div>
		</div>
		</>
	);
}
