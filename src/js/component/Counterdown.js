import React from "react";

export class CounterDown extends React.Component {
	constructor() {
		super();
		this.state = { time: {}, seconds: 0 };
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.countUp = this.countUp.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));
		let hora1 = Math.floor(hours / 10, 1);
		let hora2 = hours - Math.floor(hours / 10, 1) * 10;

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);
		let min1 = Math.floor(minutes / 10, 1);
		let min2 = minutes - Math.floor(minutes / 10, 1) * 10;

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);
		let sec1 = Math.floor(seconds / 10, 1);
		let sec2 = seconds - Math.floor(seconds / 10, 1) * 10;

		let tiempo = {
			h1: hora1,
			h2: hora2,
			m1: min1,
			m2: min2,
			s1: sec1,
			s2: sec2
		};
		return tiempo;
	}

	componentDidMount() {
		let entrada = this.secondsToTime(this.state.seconds);
		this.setState({ time: entrada });
	}

    countUp() {
		if (this.state.seconds > 0) {
			let seconds = this.state.seconds - 1;
			this.setState({
				time: this.secondsToTime(seconds),
				seconds: seconds
			});
		} else {
			clearInterval(this.timer);
		}
    }
    
	startTimer() {
		clearInterval(this.timer);
		this.timer = setInterval(this.countUp, 1000);
	}

	resetTimer() {
		let seconds = 0;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds
		});
		clearInterval(this.timer);
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div>
				<div className="row d-flex justify-content-center flex-wrap">
					<div style={estiloCaja2}>
						{<i className="far fa-clock" />}
					</div>
				</div>
				<div className=" row d-flex justify-content-center flex-wrap">
					<div style={estiloCaja1}>{this.state.time.h1}</div>
					<div style={estiloCaja1}>{this.state.time.h2}</div>
					<div style={estiloCaja2}>H</div>
					<div style={estiloCaja1}>{this.state.time.m1}</div>
					<div style={estiloCaja1}>{this.state.time.m2}</div>
					<div style={estiloCaja2}>M</div>
					<div style={estiloCaja1}>{this.state.time.s1}</div>
					<div style={estiloCaja1}>{this.state.time.s2}</div>
					<div style={estiloCaja2}>S</div>
				</div>
				<div className="row d-flex justify-content-center flex-wrap">
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.startTimer}>
						Start
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.stopTimer}>
						Stop
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resetTimer}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}

const estiloCaja1 = {
	boxShadow: "0px 0px 10px white",
	border: "1px solid white",
	color: "white",
	borderRadius: "10px",
	height: "15vh",
	width: "15vh",
	margin: "10px",
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
const estiloBoton = {
	margin: "10px",
	fontSize: "2vh",
	width: "12vh",
	boxShadow: "0px 0px 2px white"
};
