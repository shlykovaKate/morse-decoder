const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let newExpr = expr.replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ').split(' ');

    let b = newExpr.map((value) => {
        let arr = [];
        
        for (let i = 0; i <= value.length-1; i++) {
            if ((i+1) % 10 === 0) {
                let c = value.substring(i-9, i+1);
                let arrD = [];

                for (let j = 0; j <= c.length-1; j++) {
                    if ((j+1) % 2 === 0) {
                        let d = c.substring(j-1, j+1);

                        if (d === '00') {
                            arrD.push('');
                        }
                        if (d === '10') {
                            arrD.push('.');
                        }
                        if (d === '11') {
                            arrD.push('-');
                        }
                    }
                }

                let morseLetter = arrD.join('');
                arr.push(MORSE_TABLE[morseLetter]);
            }            
        }        
        return arr.join('');
    });
    
    return b.join(' ');
}

module.exports = {
    decode
}