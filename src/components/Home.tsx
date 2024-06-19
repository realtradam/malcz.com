
export default function Home () {
	return(
		<>
		<div>
		<div className="flex flex-col gap-16 max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title">Work In Progress</div>
			<div className="">
				<div className="jumbotron jumbotron-fluid bg-transparent">
					<div className="container secondary-color">
						<h1 className="text-2xl"> API at: { import.meta.env.VITE_API_TITLE } </h1>
						<p className="">
Ea optio vitae culpa voluptatem consectetur. Ab quisquam sed ipsum. Perspiciatis minus odit quas qui consequuntur dicta reiciendis a. Nihil minima sed aliquam.
		</p>
						<hr className="my-4" />
				</div>
				</div>
			</div>
		</div>
		</div>
		</>
	);
}
