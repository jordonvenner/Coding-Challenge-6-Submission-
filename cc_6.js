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


//Task 4: Parameters and Arguments

function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyPrice = 0;

    if (plan === "Basic") {
        monthlyPrice = 10;
    } else if (plan === "Premium") {
        monthlyPrice = 20;
    } else if (plan === "Enterprise") {
        monthlyPrice = 50;
    } else {
        console.log("Invalid plan selected.");
        return;
    }

    let totalCost = (monthlyPrice * months) - discount;
    return totalCost;
}

const cost1 = calculateSubscriptionCost("Basic", 6, 10); // Expected: 50
console.log(`Total Cost: $${cost1}`);

const cost2 = calculateSubscriptionCost("Premium", 12, 0); // Expected: 240
console.log(`Total Cost: $${cost2}`);

//Task 5: Returning Values

function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    return convertedAmount.toFixed(2);
}

const result1 = convertCurrency(100, 1.1);
console.log(`Converted Amount: $${result1}`);

const result2 = convertCurrency(250, 0.85);
console.log(`Converted Amount: $${result2}`);