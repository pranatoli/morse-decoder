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
    '**********': ' '
};

function decode(expr) {
    const arr = [...expr] //создаем массив из входящей строки
    const arr1 = [] // массив разбитый на символы по 10бит
    // const arr2 = []
    const newArr = [] // 
    const resArr = []
    const morseArr = [] // массив знаков морзе
    const finalStr = []
    // разбиваем массив на символы


    while (arr.length > 0) {
        const arr2 = arr.splice(0, 10)
        arr1.push(arr2)
    }
    // деление на символы  и перевод их в строку для определения знака морзе
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = []
        for (let j = 0; j < 5; j++) {
            resArr[j] = arr1[i].splice(0, 2).join('')
            newArr[i].push(resArr[j])
        }
    }

    // //меняем цифры на знаки морзе и создаем из них новый массив
    for (let k = 0; k < newArr.length; k++) {
        for (let l = 0; l < 5; l++) {
            if (newArr[k][l] == '00')
                newArr[k][l] = ''
            else if (newArr[k][l] == '10')
                newArr[k][l] = '.'
            else if (newArr[k][l] == '11')
                newArr[k][l] = '-'
            newArr[k].join()
        }
        morseArr.push(newArr[k].join(''))
    }

    for (let m = 0; m < morseArr.length; m++) {
        for (let key in MORSE_TABLE) {
            if (morseArr[m] == [key])
                finalStr.push(MORSE_TABLE[key])
        }
    }

    return finalStr.join('')
}

module.exports = {
    decode
}