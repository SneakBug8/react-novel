import React, { Component } from 'react';
import './App.css';
import autoBind from 'react-autobind';

class Game extends Component {
	constructor() {
		super();

		this.scenes = require('./scenes.json');
		this.state = {
			scene: this.scenes['0']
		};

		this.variables = [];

		autoBind(this); 
	}

	onClick(index) {
		let action = this.state.scene.actions[index];
		
		if (action.variables !== undefined) {
			for (let keyvaluepair in action.variables) {
				this.variables[keyvaluepair.key] = keyvaluepair.value;
			}
		}
		if (action.scene !== undefined) {
			this.changeScene(action.scene);
		}
	}

	changeScene(scenename) {
		let state = this.state;
		state.scene = this.scenes[scenename];
		this.setState(state);
	}

	renderAction(action, index) {
		if (action.conditions !== undefined) {
			for (let keyvaluepair in action.conditions) {
				if (this.variables[keyvaluepair.key] !== keyvaluepair.value) {
					return null;
				}
			}
		}
		return (<li onClick={() => this.onClick(index)} key={index}> {action.text} </li>);
	}

	render() {
		let scene = this.state.scene;
		let actions = scene.actions.map(this.renderAction);

		return (
			<div>
				<div>
					<p>{scene.text}</p>
				</div>
				<div>
					<ul>
						{actions}
					</ul>
				</div>
			</div>
		);
	}
}

export default Game;
