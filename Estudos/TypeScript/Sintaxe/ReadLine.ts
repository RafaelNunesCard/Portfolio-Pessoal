import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("qual é seu nome? ", (nome: String) => {
    console.log(`Olá ${nome}`),
    rl.close();
})