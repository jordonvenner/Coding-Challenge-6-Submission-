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


//Task 3: Arrow Function

const functionName = (parameters) => {
    return something;
};

const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = 0;

    if (performanceRating === "Excellent") {
        bonusPercentage = 0.2;
    } else if (performanceRating === "Good") {
        bonusPercentage = 0.1;
    } else if (performanceRating === "Average") {
        bonusPercentage = 0.05;
    }

    return salary * bonusPercentage;
};

const bonus1 = calculateBonus(5000, "Excellent"); // Expected: 1000
console.log(`Bonus: $${bonus1}`);

const bonus2 = calculateBonus(7000, "Good"); // Expected: 700
console.log(`Bonus: $${bonus2}`);