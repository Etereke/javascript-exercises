const palindromes = function (str) {
    let strLower = str.toLowerCase().trim();
    let strLetters = '';
    for (let i = 0; i < strLower.length; i++) {
        if(('a' <= strLower[i] && strLower[i] <= 'z') || ('0' <= strLower[i] && strLower[i] <= '9')) {
            strLetters += strLower[i];
        }
    }
    
    return strLetters === strLetters.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
