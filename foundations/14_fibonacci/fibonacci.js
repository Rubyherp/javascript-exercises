const fibonacci = function(b) {
    const a = Number(b);
    return a < 0
        ? "OOPS"
        : a === 0 
            ? 0 
            : a === 1
                ? 1
                : fibonacci(a-1) + fibonacci(a-2);
};

// Do not edit below this line
module.exports = fibonacci;
