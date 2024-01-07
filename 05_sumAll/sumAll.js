const sumAll = function(start, end) {
    let myNums = [];
    let sum = 0;

    if (typeof start === "number" && typeof end === "number") {
        if (start > 0 && end > 0) {
            if (start < end) {
                for (let i = start; i <= end; i++) {
                    myNums.push(i);
                }
            } else if (start > end) {
                for (let i = start; i >= end; i--) {
                    myNums.push(i);
                }
            }
        } else return "ERROR";
    } else return "ERROR";

    myNums.forEach(element => { sum += element;    
    });
    return sum;
};


console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
