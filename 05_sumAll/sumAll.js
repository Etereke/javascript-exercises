const sumAll = function(first, last) {
    if (typeof first !== "number" || typeof last !== "number") {
        return "ERROR";
    }
    let sum = 0;
    if (first > last) {
        const temp = first;
        first = last;
        last = temp;
    }
    for (let i = first; i <=last; i++) {
        sum += i;
    }
    return sum > 0 ? sum : "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
