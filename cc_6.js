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


//Task 6: Higher-Order Functions

function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

let orders = [150, 700, 950, 300, 1200];
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

console.log(discountedOrders);
// Expected output: [150, 630, 855, 300, 1080]


//Task 7: Closures


function createExpenseTracker() {
    let totalExpenses = 0;  // This will keep track of total expenses

    return function (expense) {
        totalExpenses += expense;  // Add the new expense to the total
        return `Total Expenses: $${totalExpenses}`;  // Return the updated total
    };
}

let tracker = createExpenseTracker();  // Create an expense tracker

// Adding some expenses and printing the total each time
console.log(tracker(100)); // Expected output: "Total Expenses: $100"
console.log(tracker(200)); // Expected output: "Total Expenses: $300"
console.log(tracker(50));  // Expected output: "Total Expenses: $350"
console.log(tracker(150)); // Expected output: "Total Expenses: $500"


//Task 8: Recursion in JavaScript


function calculateYearsToPromotion(employeeLevel) {
    // Base case: if the employee is at level 10, no more years are needed
    if (employeeLevel >= 10) {
        return 0;
    } else {
        // Recursive case: calculate years to reach level 10
        return 2 + calculateYearsToPromotion(employeeLevel + 1);  // Add 2 years and call the function with the next level
    }
}

console.log(calculateYearsToPromotion(8));  // Expected output: "Years to Level 10: 4"
console.log(calculateYearsToPromotion(6));  // Expected output: "Years to Level 10: 8"