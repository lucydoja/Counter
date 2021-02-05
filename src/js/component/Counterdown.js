import React from "react";

export class CounterDown extends React.Component {
	constructor() {
		super();

		this.state = {
			hours: 0,
			minutes: 0,
			seconds: 0,
			totalsecs: 0,
			time: {}
		};
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.resumeTimer = this.resumeTimer.bind(this);
		this.countUp = this.countUp.bind(this);
	}

	secondsToTime(hr, min, secs) {
		let segundos = hr * 60 * 60 + min * 60 + secs * 1;

		return segundos;
	}

	input(secs) {
		let horas = Math.floor(secs / (60 * 60));
		let hora1 = Math.floor(horas / 10, 1);
		let hora2 = horas - Math.floor(horas / 10, 1) * 10;

		let divisor_for_minutes = secs % (60 * 60);
		let minutos = Math.floor(divisor_for_minutes / 60);
		let min1 = Math.floor(minutos / 10, 1);
		let min2 = minutos - Math.floor(minutos / 10, 1) * 10;

		let divisor_for_seconds = divisor_for_minutes % 60;
		let segundos = Math.ceil(divisor_for_seconds);
		let sec1 = Math.floor(segundos / 10, 1);
		let sec2 = segundos - Math.floor(segundos / 10, 1) * 10;

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
		let segundos = this.secondsToTime(
			this.state.hours,
			this.state.minutes,
			this.state.seconds
		);
		let entrada = this.input(segundos);
		this.setState({ time: entrada });
	}

	countUp() {
		if (this.state.totalsecs > 0) {
			let seconds = this.state.totalsecs - 1;
			this.setState({
				time: this.input(seconds),
				totalsecs: seconds
			});
		} else {
			clearInterval(this.timer);
			alert("SE TE ACABO EL TIEMPO!");
		}
	}

	startTimer() {
		clearInterval(this.timer);
		let segundos =
			this.secondsToTime(
				this.state.hours,
				this.state.minutes,
				this.state.seconds
			) + 1;
		this.setState({
			totalsecs: segundos
		});
		this.timer = setInterval(this.countUp, 1000);
	}

	resumeTimer() {
		this.timer = setInterval(this.countUp, 1000);
	}

	resetTimer() {
		let seconds = 0;
		this.setState({
			time: this.input(seconds)
		});
		clearInterval(this.timer);
	}

	stopTimer() {
		clearInterval(this.timer);
	}

	render() {
		return (
			<div>
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
					<div className="m-2">
						<label>Horas:</label>
						<input
							className="form-control"
							type="number"
							min="0"
							max="99"
							onChange={e => {
								this.setState({
									hours: e.target.value
								});
							}}
						/>
					</div>

					<div className="m-2">
						<label>Minutos:</label>
						<input
							className="form-control"
							type="number"
							min="0"
							max="59"
							onChange={e => {
								this.setState({
									minutes: e.target.value
								});
							}}
						/>
					</div>
					<div className="m-2">
						<label>Segundos:</label>
						<input
							className="form-control"
							min="0"
							max="59"
							type="number"
							onChange={e => {
								this.setState({
									seconds: e.target.value
								});
							}}
						/>
					</div>
				</div>
				<div className="row d-flex justify-content-center flex-wrap">
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.startTimer}>
						<strong>Start</strong>
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.stopTimer}>
						<strong>Stop</strong>
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resumeTimer}>
						<strong>Resume</strong>
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resetTimer}>
						<strong>Reset</strong>
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
