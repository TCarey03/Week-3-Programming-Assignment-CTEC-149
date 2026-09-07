Journal
Phase 1: Declarations, Expressions, and Console Testing

The main difference between a function declaration and a function expression is how the function is created and assigned. A function declaration uses the function keyword followed by the function name, parameters, and the function body. In this phase, calculatePrice is a function declaration.

A function expression creates a function and assigns it to a variable. In this phase, getTax is a function expression because the anonymous function is assigned to the getTax variable.

Both functions can perform calculations, but their syntax is different. I used calculatePrice as a declaration because it directly defines a named function. I used getTax as an expression to practice assigning a function to a variable.

One thing I checked during this phase was whether the calculations produced the expected results. With a price of $15 and a quantity of 4, the subtotal was $60. Applying a 7% tax rate resulted in a tax amount of $4.20.

---------------------------------------

Phase 2: Function Scope & Variable Accessibility

In this phase, I created the calculateStoreTax function. It takes an amount as a parameter and creates a local variable called defaultTaxRate. I set the tax rate to 0.07 and used the getTax function to calculate the tax.

When I tried to use console.log(defaultTaxRate) outside of the function, I received a ReferenceError. This happened because defaultTaxRate is a local variable. Local variables can only be accessed within the function where they are declared.

This helped me understand that variables have different scopes depending on where they are created. I commented out the line after confirming the error so the program can continue running normally.

------------------------------------------

Phase 3: Refactoring to Arrow Functions

In this phase, I changed the calculatePrice and getTax functions into arrow functions. Arrow functions use the => symbol instead of the traditional function syntax.

I also used concise arrow function syntax with an implicit return. Since both functions only need to perform one calculation and return the result, I did not need curly braces or the return keyword.

For example, calculatePrice can now be written as const calculatePrice = (price, quantity) => price * quantity;.

I think the concise syntax makes these simple calculation functions easier to read because there is less code. However, for more complicated functions, using curly braces and an explicit return could make the code easier to understand.
