const repeatString = function(string, num) {
    if (num <0) {
        return 'ERROR';
    }
    const str = string;
    let res = '';
    for (let i=0; i < num; i++) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
