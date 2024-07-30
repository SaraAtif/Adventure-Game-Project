#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.bold.blueBright("\n\t wellcome to `Àdventure Game with Sara Atif`\n"));
console.log("~".repeat(60));
//classes player & opponent
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    ;
    Player.prototype.fuelDecrease = function () {
        var fuel = this.fuel - 25;
        this.fuel = fuel;
    };
    ;
    Player.prototype.fuelIncrease = function () {
        this.fuel = 100;
    };
    ;
    return Player;
}());
;
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    return Opponent;
}());
;
//player name & opponent select
var player = await inquirer_1.default.prompt({
    name: "name",
    type: "input",
    message: "Please Enter your name: "
});
var opponent = await inquirer_1.default.prompt({
    name: "Select",
    type: "list",
    message: "Select your opponent: ",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
//data gather
var p1 = new Player(player.name);
var o1 = new Opponent(opponent.Select);
do {
    //play with Skeleton
    if (opponent.Select == "Skeleton") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Option",
                type: "list",
                message: "Select the Option: ",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.Option == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("\n".concat(p1.name, " fuel is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " fuel is ").concat(o1.fuel, "\n")));
                if (p1.fuel == 0) {
                    console.log(chalk_1.default.bold.red.italic("\n You Loose, Better luck next time.\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("\n".concat(o1.name, " fuel is ").concat(o1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(p1.name, " fuel is ").concat(p1.fuel, "\n")));
                if (o1.fuel == 0) {
                    console.log(chalk_1.default.bold.green.italic("\nYou Win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.green.italic("\nYou drink health portion, your fuel is ".concat(p1.fuel, "\n")));
        }
        if (ask.Option == "Run for your life") {
            console.log(chalk_1.default.bold.red.italic("\n You Loose, Better luck next time.\n"));
            process.exit();
        }
    }
    ;
    // play with Assassin
    if (opponent.Select == "Assassin") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Option",
                type: "list",
                message: "Select the Option: ",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.Option == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("\n".concat(p1.name, " fuel is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " fuel is ").concat(o1.fuel, "\n")));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.red.italic("\n You Loose, Better luck next time.\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("\n".concat(o1.name, " fuel is ").concat(o1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(p1.name, " fuel is ").concat(p1.fuel, "\n")));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("\nYou Win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.green.italic("\nYou drink health portion, your fuel is ".concat(p1.fuel, "\n")));
        }
        if (ask.Option == "Run for your life") {
            console.log(chalk_1.default.bold.red.italic("\n You Loose, Better luck next time.\n"));
            process.exit();
        }
    }
    //paly with Zombie
    if (opponent.Select == "Zombie") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Option",
                type: "list",
                message: "Select the Option: ",
                choices: ["Attack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.Option == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("\n".concat(p1.name, " fuel is ").concat(p1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(o1.name, " fuel is ").concat(o1.fuel, "\n")));
                if (p1.fuel <= 0) {
                    console.log(chalk_1.default.bold.red.italic("\n You Loose, Better luck next time.\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                p1.fuelDecrease();
                console.log(chalk_1.default.bold.red("\n".concat(o1.name, " fuel is ").concat(o1.fuel)));
                console.log(chalk_1.default.bold.green("".concat(p1.name, " fuel is ").concat(p1.fuel, "\n")));
                if (o1.fuel <= 0) {
                    console.log(chalk_1.default.bold.green.italic("\nYou Win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.Option == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk_1.default.bold.green.italic("\nYou drink health portion, your fuel is ".concat(p1.fuel, "\n")));
        }
        if (ask.Option == "Run for your life") {
            console.log(chalk_1.default.bold.red.italic("\n You Loose, Better luck next time.\n"));
            process.exit();
        }
    }
} while (true);
