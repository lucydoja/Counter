import React from "react";

import { Cuadros } from "./Cajas";
import { Counter } from "./Counter";

//create your first component
export function Home() {
	return (
		<div id="cuerpo">
			<Counter />
		</div>
	);
}
