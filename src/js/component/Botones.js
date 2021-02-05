import React, { useState } from "react";
import { CounterUp } from "./Counterup";
import { CounterDown } from "./Counterdown";

export function Toggles() {
	const [estado, SetEstado] = useState(true);
	if (estado == true) {
		return (
			<div>
				<div className="row justify-content-center">
					<button
						type="button"
						className="btn btn-primary btn-lg mt-4 m-2"
						onClick={() => SetEstado(true)}>
						<strong>Cronómetro</strong>
					</button>
					<button
						type="button"
						className="btn btn-outline-light btn-lg mt-4 m-2"
						onClick={() => SetEstado(false)}>
						<strong>Temporizador</strong>
					</button>
				</div>
				<div className="d-flex justify-content-center" id="cuerpo">
					<CounterUp />
				</div>
			</div>
		);
	} else if (estado == false) {
		return (
			<div>
				<div className="row justify-content-center">
					<button
						type="button"
						className="btn btn-outline-light btn-lg mt-4 m-2"
						onClick={() => SetEstado(true)}>
						<strong>Cronómetro</strong>
					</button>
					<button
						type="button"
						className="btn btn-primary btn-lg mt-4 m-2"
						onClick={() => SetEstado(false)}>
						<strong>Temporizador</strong>
					</button>
				</div>
				<div id="cuerpo">
					<CounterDown />
				</div>
			</div>
		);
	}
}
