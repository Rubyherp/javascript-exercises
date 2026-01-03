const sumAll = function(start, end) {
    if (typeof start != 'number' || typeof end != 'number' || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR'
    }

    let res = 0;
    if (start > end) {
        for (let i = start; i>=end; i--) {
            res += i;
        };
    } else {
        for (let i = start; i<=end; i++) {
            res += i;
        };
    };
    return res;
};

// Do not edit below this line
module.exports = sumAll;
