#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");
const open = require('open');

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
			figlet.textSync("CLI", {
				font: "Ghost",
				horizontalLayout: "default",
				verticalLayout: "default"
			})
		)
	);

	console.log(chalk.red('Welcome HPHK! This is Chanu CLI.'))
	console.log(chalk.whiteBright(`Type 'help' for a list of commands.`))
}

const typeQuestions = () => {
	const questions = [
		{
			type: "input",
			name: "TYPE",
			message: ">",
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
			choices: ["1.Basic_Information", "2.Notion_Resume", "3.Github_Page", "4.Portfolio", "5.Playlist"],
			filter: function (val) {
				return val.split(".")[1];
			}
		}
	];
	return inquirer.prompt(questions);
};

const run = async () => {
	init();
	while (true) {
		const typed_answer = await typeQuestions();
		const { TYPE } = typed_answer
		console.log()
		if (TYPE === 'help') {
			console.log("> help : Show a list of commands.\n" +
				"> info : Basic information about me. \n" +
				"> notion : Opens notion resume page on browser.\n" +
				"> choices : Instead of typing command, show multiple choices.\n" +
				"> hello : Send greetings to the developer.(Why not?)\n" +
				"> bye : Exit the program.")
		}
		else if (TYPE === 'choices') {
			console.log("Okay,then. Pick one!")
			const picked_answer = await askQuestions();
			console.log(picked_answer)
			const { PICK } = picked_answer
			if (PICK === 'Basic_Information') {
				console.log("Hello! It's good to see you here!\n" +
					"Thanks a lot for downloading this package.\n " +
					"It means a lot to me.")
			}
			else if (PICK === 'Notion_Resume') {
				await open("https://www.notion.so/devcatfall/d32421df0a9744fbb8aef2a43326a47f");
			}
			else if (PICK === 'Github_Page') {
				await open("https://github.com/Oizys18");
			}
			else if (PICK === 'Portfolio') {
				console.log('please add portfolio link')
			}
			else if (PICK === 'Playlist') {
				await open("https://www.youtube.com/playlist?list=PLhtrNKyVEq0OC61zmSAeNErPxJeZJxZqm");
			}
		}
		else if (TYPE === 'hello') {
			console.log("Hello! It's good to see you here!\n" +
				"Thanks a lot for downloading this package.\n " +
				"It means a lot to me.")
		}
		else if (TYPE === 'bye') {
			console.log("Good bye! See you soon. :) ")
			break
		}
		else if (TYPE === '') {
			console.log("Type something PLZ!")
		}
		console.log()
	}
}

run();
