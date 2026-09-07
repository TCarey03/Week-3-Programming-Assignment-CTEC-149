// Smart Café - Final Version

// Phase 3: Arrow Functions

const calculatePrice = (price, quantity) => price * quantity;

const getTax = (amount, taxRate) => amount * taxRate;


// Phase 2: Function Scope

function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;

    return getTax(amount, defaultTaxRate);
}


// Phase 4: Callbacks & Higher-Order Functions

function applyDiscount(total, discountCallback) {
    return discountCallback(total);
}

function studentDiscount(total) {
    return total * 0.90;
}

function seniorDiscount(total) {
    return total * 0.80;
}


// Phase 5: Master Order Function

function calculateFinalBill(price, quantity, discountCallback) {
    // Calculate the original subtotal
    const subtotal = calculatePrice(price, quantity);

    // Apply the selected discount
    const discountedPrice = applyDiscount(subtotal, discountCallback);

    // Calculate 7% tax on the discounted price
    const taxAmount = getTax(discountedPrice, 0.07);

    // Return the final bill
    return discountedPrice + taxAmount;
}


// Console tests

const subtotal = calculatePrice(15, 4);
const tax = getTax(subtotal, 0.07);

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);

console.log("Store Tax:", calculateStoreTax(100));

console.log(
    "Student Discount:",
    applyDiscount(100, studentDiscount)
);

console.log(
    "Senior Discount:",
    applyDiscount(100, seniorDiscount)
);


// Phase 5 Console Test

console.log(
    "Final Bill:",
    calculateFinalBill(20, 3, studentDiscount)
);
