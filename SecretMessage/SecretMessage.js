let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to', 'program');

const wordIndex = secretMessage.indexOf('easily');

secretMessage[wordIndex] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

let begining = secretMessage.indexOf('get');
let end = secretMessage.indexOf('time')

secretMessage.splice(6,10,'know');

console.log(secretMessage.join(' '));