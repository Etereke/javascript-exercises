const removeFromArray = function(array, ...removables) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!removables.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
