function toArr(obj) {
    var arr = [];
    for (const property in obj) {
        arr.push([property, obj[property]])
    }

    return arr;
}

toArr({});