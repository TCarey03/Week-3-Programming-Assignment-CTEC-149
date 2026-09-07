function calculatePrice(price, quantity) {
    return price * quantity;
}

const getTax = function(amount, taxRate) {
    return amount * taxRate;
};

const subtotal = calculatePrice(15, 4);
const tax = getTax(subtotal, 0.07);

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);

function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;

    return getTax(amount, defaultTaxRate);
}

console.log("Store Tax:", calculateStoreTax(100));
