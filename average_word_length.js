function avgWordLengthCalc(str) {
    var arr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').split(' ');
    var lengthSum = 0;
    for (const word of arr) {
        lengthSum += word.length;
    }

    return lengthSum/arr.length;
}

console.log(avgWordLengthCalc("callback is called, accumulator!"));