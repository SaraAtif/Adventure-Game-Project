import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blueBright("\n\t wellcome to `Àdventure Game with Sara Atif`\n"));
console.log("~".repeat(60));
//classes player & opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    ;
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    ;
    fuelIncrease() {
        this.fuel = 100;
    }
    ;
}
;
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
}
;
//player name & opponent select
let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Please Enter your name: "
});
let opponent = await inquirer.prompt({
    name: "Select",
    type: "list",
    message: "Select your opponent: ",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
//data gather
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);
do {
    //play with Skeleton
    if (opponent.Select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Option",
                type: "list",
                message: "Select the Option: ",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.Option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("\n You Loose, Better luck next time.\n"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`\n${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("\nYou Win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`\nYou drink health portion, your fuel is ${p1.fuel}\n`));
        }
        if (ask.Option == "Run for your life") {
            console.log(chalk.bold.red.italic("\n You Loose, Better luck next time.\n"));
            process.exit();
        }
    }
    ;
    // play with Assassin
    if (opponent.Select == "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "Option",
                type: "list",
                message: "Select the Option: ",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.Option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("\n You Loose, Better luck next time.\n"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`\n${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("\nYou Win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`\nYou drink health portion, your fuel is ${p1.fuel}\n`));
        }
        if (ask.Option == "Run for your life") {
            console.log(chalk.bold.red.italic("\n You Loose, Better luck next time.\n"));
            process.exit();
        }
    }
    //paly with Zombie
    if (opponent.Select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Option",
                type: "list",
                message: "Select the Option: ",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.Option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}\n`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red.italic("\n You Loose, Better luck next time.\n"));
                    process.exit();
                }
            }
            ;
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`\n${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}\n`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green.italic("\nYou Win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green.italic(`\nYou drink health portion, your fuel is ${p1.fuel}\n`));
        }
        if (ask.Option == "Run for your life") {
            console.log(chalk.bold.red.italic("\n You Loose, Better luck next time.\n"));
            process.exit();
        }
    }
} while (true);
