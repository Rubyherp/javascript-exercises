const removeFromArray = function(arr, ...num) {
    let res = [];
    arr.forEach(element => {
        if (!num.includes(element)) {
            res.push(element)
        }
    });
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
