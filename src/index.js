const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let res = '';
	if (!(expr.length % 10)) {
		for (let i = 0; i < expr.length / 10; i++) {
			let charCode = expr.slice(i * 10, i * 10 + 10);
			let char = '';
			if (charCode === '**********') {
				char = ' ';
			} else {
				let morzeCode = charCode.replace(/^(0){0,10}/, '').replaceAll('10', '.').replaceAll('11', '-');
				char = MORSE_TABLE[morzeCode];
			}
			res += char;
		}
	}

	return res;
}


module.exports = {
	decode
}