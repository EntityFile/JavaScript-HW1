function maxTotal(arr) {
    return arr.sort(function(a, b){return a-b}).splice(5, 5).reduce((a, b) => a + b);
}

console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));