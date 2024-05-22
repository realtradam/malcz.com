import React from "react";
import { Link } from "react-router-dom";

export default function Button ({ link, width = 36, height = 16, spinner = 4 }) 
{
	return (
		<>
		<div className={`w-${ width } h-${ height } relative grid rounded-[5px] cursor-pointer overflow-hidden place-items-center before:content-[''] before:absolute before:w-${ spinner } before:bg-amber-400 before:rotate-[32deg] before:h-[1%] before:transition-all before:duration-500 before:ease-linear before:animate-[buttonSpin_1.5s_linear_infinite] hover:before:h-[2800%] hover:before:transition-all hover:before:duration-0 hover:before:ease-linear after:absolute after:content-[''] after:bg-stone-800 after:rounded-[5px] after:inset-0 after:transition-all after:duration-200 after:ease-in-out hover:after:inset-[5px] hover:after:transition-all hover:after:duration-200 hover:after:ease-in-out`}>
			<div className="z-[3]">
				{ link }
			</div>
		</div>
		</>
	)
};
