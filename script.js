```javascript
// Phase 1-4: Smart Café

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

// Student receives a 10% discount
function studentDiscount(total) {
    return total * 0.90;
}

// Senior receives a 20% discount
function seniorDiscount(total) {
    return total * 0.80;
}


// Console tests from previous phases

const subtotal = calculatePrice(15, 4);
const tax = getTax(subtotal, 0.07);

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);

console.log("Store Tax:", calculateStoreTax(100));


// Phase 4 Console Tests

console.log("Student Discount:", applyDiscount(100, studentDiscount));
console.log("Senior Discount:", applyDiscount(100, seniorDiscount));
```
