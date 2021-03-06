#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");
const open = require("open");

const init = () => {
	console.log(
		chalk.greenBright(
			figlet.textSync("Chanu", {
				font: "roman",
				horizontalLayout: "default",
				verticalLayout: "default"
			})
		) +"\n"
	);
	console.log(
		chalk.redBright(
			figlet.textSync("  ~  CLI  ~", {
				font: "rozzo",
				horizontalLayout: "default",
				verticalLayout: "default"
			})
		)+"\n"
	);
	console.log(chalk.red(' Welcome HPHK! This is Chanu CLI.'))
	console.log(chalk.grey(' (If the text is not colored, try running on CMD.)'))
	console.log(chalk.whiteBright(` Type 'help' for a list of commands.`))
}

const typeQuestions = () => {
	const questions = [
		{
			type: "input",
			name: "TYPE",
			message: chalk.red(">"),
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
			choices: ["1.Basic_Information", "2.Notion_Resume", "3.Github_Page", "4.Playlist"],
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
			console.log(">" + chalk.greenBright(" help") + ": Show a list of commands.\n" +
				">" + chalk.greenBright(" info") + ": Basic information about me.\n" +
				">" + chalk.greenBright(" choice") + ": Instead of typing command, show multiple choices.\n" +
				">" + chalk.greenBright(" notion") + ": Opens notion resume page on browser.\n" +
				">" + chalk.greenBright(" hello") + ": Send greetings to the developer.(Why not?)\n" +
				">" + chalk.greenBright(" bye") + ": Exit the program.")
		}
		else if (TYPE === 'choice') {
			console.log(chalk.yellow(" Okay,then. Pick one!"))
			const picked_answer = await askQuestions();
			console.log(picked_answer)
			const { PICK } = picked_answer
			if (PICK === 'Basic_Information') {
				console.log(chalk.green(" Name") + ": Yang ChanWoo\n" +
							chalk.green(" Sex") + ": Male\n" +
							chalk.green(" Age") + ": 28\n" +
							chalk.green(" Hobby") + ": Movie, Cooking, Baking, Gaming, BJJ\n" +
							chalk.green(" Animal") + ": 1 cat 2 dogs\n" +
							chalk.green(" Personality") + ": Optimist\n" +
							chalk.green(" Specialty") + ": 1. Bakes amazing Apple pie & chocolate chip cookies.\n" +
							"            2. Loved by animals.\n" +
							"            3. Comes up with endless creative ideas.")
			}
			else if (PICK === 'Notion_Resume') {
				await open("https://www.notion.so/devcatfall/d32421df0a9744fbb8aef2a43326a47f");
				console.log("Opening notion resume page....")
			}
			else if (PICK === 'Github_Page') {
				await open("https://github.com/Oizys18");
				console.log("Opening Github page....")
			}
			else if (PICK === 'Playlist') {
				await open("https://www.youtube.com/playlist?list=PLhtrNKyVEq0OC61zmSAeNErPxJeZJxZqm");
				console.log("Opening Youtube Playlist...")
			}
		}
		else if (TYPE === 'info') {
			console.log(chalk.green(" Name") + ": Yang ChanWoo\n" +
				chalk.green(" Sex") + ": Male\n" +
				chalk.green(" Age") + ": 28\n" +
				chalk.green(" Hobby") + ": Movie, Cooking, Baking, Gaming, BJJ\n" +
				chalk.green(" Animal") + ": 1 cat 2 dogs\n" +
				chalk.green(" Personality") + ": Optimist\n" +
				chalk.green(" Specialty") + ": 1. Bakes amazing Apple pie & chocolate chip cookies.\n" +
				"            2. Loved by animals.\n" +
				"            3. Comes up with endless creative ideas.")
		}
		else if (TYPE === 'hello') {
			console.log(chalk.cyanBright(" Hello! It's good to see you here!\n" +
				" Thanks a lot for downloading this package.\n" +
				" It means a lot to me."))
		}
		else if (TYPE === 'notion') {
			await open("https://www.notion.so/devcatfall/d32421df0a9744fbb8aef2a43326a47f");
		}
		else if (TYPE === 'hphk' || TYPE === 'HPHK') {
			console.log(
				chalk.cyanBright(
					figlet.textSync("HPHK", {
						font: "alligator",
						horizontalLayout: "default",
						verticalLayout: "default"
					})
				)
			);
			console.log(chalk.red(" Good Company,") + chalk.yellow(" Good Teachers,") + chalk.green(" Good People"))
			console.log(chalk.grey(" I knew you would try that one."))
		}
		else if (TYPE === 'bye') {
			console.log(" Good bye! See you soon. :) ")
			break
		}
		else if (TYPE === '') {
			console.log(" Type something PLZ!")
			console.log(chalk.red(" If you are lost, type 'help'!"))
		}
		else {
			console.log(' No command detected under that input.\n' +
				' Please check typo.\n' +
				chalk.red(' Type "help" for commands.'))

		}
		console.log()
	}
}

run();
