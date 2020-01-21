#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");


const init = () => {
	console.log(
		chalk.green(
			figlet.textSync("Chanu", {
				font: "Ghost",
				horizontalLayout: "default",
				verticalLayout: "default"
			})
		)
	);
	console.log(
		chalk.blueBright(
			figlet.textSync("Resume", {
				font: "Ghost",
				horizontalLayout: "default",
				verticalLayout: "default"
			})
		)
	);
	console.log("Welcome! This is Chanu CLI. Type '/help' for documentation.")
}

const typeQuestions = () => {
	const questions = [
		{
			type: "input",
			name: "TYPE",
			message: "What do you want to know about me?",
		}
	];
	return inquirer.prompt(questions);
}

const askQuestions = () => {
	const questions = [
		{
			type: "list",
			name: "PICK",
			message: "Pick one!",
			choices: ["Basic_Information", "Notion_Resume", "Github_link", "Portfolio"],
			filter: function (val) {
				return val.split(".")[1];
			}
		}
	];
	return inquirer.prompt(questions);
};

const run = async () => {
	init();
	while (true){
		const typed_answer = await typeQuestions();
		const {TYPE} = typed_answer
		if (TYPE === 'help'){
			console.log("This is documentation")
		} 
		else if (TYPE === 'hello'){
			console.log("Hello there! Greetings!")
		}
		else if (TYPE === ''){
			console.log("Type something PLZ!")
		}
		else if (TYPE === 'nah'){
			console.log("Well, Suit yourself. :)")
			break
		}
	}
	
	const picked_answer = await askQuestions();

}


run();