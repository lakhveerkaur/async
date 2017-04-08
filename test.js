const sum = require('./sum');

sum(2,3, (answer) => {
	console.log('2+3 =',answer);
	console.log('PING');
});

