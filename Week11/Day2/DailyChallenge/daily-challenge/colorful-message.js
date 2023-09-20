import chalk from 'chalk';

export function coloredGreet(message) {
    return chalk.bgBlue.yellow(message) + chalk.bgGreen.blue.bold(', Shalom, bro!');
}
