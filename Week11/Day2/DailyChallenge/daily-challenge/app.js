import { greet } from './greeting.js';
import { coloredGreet } from './colorful-message.js';
import { readFile } from './read-file.js';


console.log(greet('Daniel'));
console.log(coloredGreet('Daniel'));

readFile('files/file-data.txt');
