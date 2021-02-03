import React from "react";

export function Cuadros() {
	return (
		<div className="d-flex justify-content-around flex-wrap">
			<div style={estiloCaja}>{<i className="far fa-clock" />}</div>
			<div style={estiloCaja}>9</div>
			<div style={estiloCaja}>9</div>
			<div style={estiloCaja}>H</div>
			<div style={estiloCaja}>9</div>
			<div style={estiloCaja}>9</div>
			<div style={estiloCaja}>M</div>
			<div style={estiloCaja}>9</div>
			<div style={estiloCaja}>9</div>
			<div style={estiloCaja}>S</div>
		</div>
	);
}

const estiloCaja = {
	boxShadow: "0px 0px 5px gray",
	border: "1px solid gray",
	color: "white",
	borderRadius: "10px",
	height: "20vh",
	width: "15vh",
	margin: "5px",
	fontSize: "12vh",
	padding: "0px",
	textAlign: "center",
	marginTop: "15px"
};
