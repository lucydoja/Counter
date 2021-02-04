import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Cuadros } from "./Cajas";
import { Counter } from "./Counter";

//create your first component
export function Home() {
	return (
		<div>
			<Cuadros />
			<Counter />
		</div>
	);
}
