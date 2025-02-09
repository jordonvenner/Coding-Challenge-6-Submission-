//Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}

console.log(calculateProfit(20, 30, 100)); // Output: "Total Profit: $1000"

console.log(calculateProfit(50, 70, 200)); // Output: "Total Profit: $4000"


//Task 2: Function Expression

const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;
};

console.log(calculateSalesTax(100, 0.07));

console.log(calculateSalesTax(500, 0.1));