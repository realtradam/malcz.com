import { ReactComponent as WorkExperienceMD } from '../md/home_workexperience.md';
import { ReactComponent as ProjectsMD } from '../md/home_projects.md';
import { ReactComponent as EducationMD } from '../md/home_education.md';

export default function Home () {
	return(
		<>
		<div className="flex flex-col gap-16 w-full items-center max-w-6xl shrink">
			<div className="title font-bold text-6xl font-title mb-16 dsm:mb-10">Welcome</div>
					<div className="bg-stone-950 marker:text-stone-50 p-16 dsm:py-10 dsm:px-4 rounded-xl w-full flex justify-center">
						<div className="prose prose-invert flex justify-center w-full w-full-after">
							<WorkExperienceMD />
						</div>
					</div>
					<div className="bg-stone-950 marker:text-stone-50 p-16 dsm:py-10 dsm:px-4 rounded-xl w-full flex justify-center">
						<div className="prose prose-invert flex justify-center w-full w-full-after">
							<ProjectsMD />
						</div>
					</div>
					<div className="bg-stone-950 marker:text-stone-50 p-16 dsm:py-10 dsm:px-4 rounded-xl w-full flex justify-center">
						<div className="prose prose-invert flex justify-center w-full w-full-after">
							<EducationMD />
						</div>
					</div>
			</div>
		</>
	);
}
