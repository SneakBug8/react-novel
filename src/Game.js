import React, { Component } from 'react';
import './App.css';

class Game extends Component {
	constructor() {
		this.scenes = require('scenes.json');
		this.state = {
			scene = this.scenes[0]
		};
	}

	onClick(index) {
		let action = this.state.scene.actions[index];

		if (action.scene != undefined) {
			this.changeScene(action.scene);
		}
	}

	changeScene(scenename) {
		let state = this.state;
		state.scene = this.scenes[scenename]
		this.setState(state);
	}

  	render() {
		let actions = this.state.scene.actions.map((action, index) =>
			<li onClick={this.onClick(index)}> {this.action.text} </li>
	);

    return (
		<div>
			<div>
				<p>{this.scene.text}</p>
			</div>
			<div>
			</div>
		</div>
    );
  }
}

export default Game;
