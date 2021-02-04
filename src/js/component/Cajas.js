import React from "react";
import { Counter } from "./Counter";

export function Cuadros() {
	return (
		<div>
			<div className="d-flex justify-content-center flex-wrap mt-15">
				<div style={estiloCaja2}>{<i className="far fa-clock" />}</div>
			</div>
			<Counter />
		</div>
	);
}

const estiloCaja1 = {
	boxShadow: "0px 0px 5px gray",
	border: "1px solid gray",
	color: "white",
	borderRadius: "10px",
	height: "15vh",
	width: "15vh",
	margin: "5px",
	fontSize: "12vh",
	padding: "0px",
	textAlign: "center"
};
const estiloCaja2 = {
	color: "white",
	height: "15vh",
	width: "12vh",
	margin: "5px",
	fontSize: "12vh",
	padding: "0px",
	textAlign: "center"
};
