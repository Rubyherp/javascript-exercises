const reverseString = function(string) {
    let arr = [];
    for (let letter of string) {
        arr.unshift(letter);
    }
    let res = '';
    for (let i =0; i<arr.length; i++) {
        res += arr[i];
    }
    return res;

};

// Do not edit below this line
module.exports = reverseString;
