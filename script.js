/**
 * Created by siqi on 9/21/16.
 */

/* Step 1
 * Create objects to represent individual shoe products with the following attributes:
 * name, price, maker
 * if price is a range, use the upper end of that range
 * and add them to the "productList" array using array.push()
 */

var productList = []; //this is an array

var sneaker1 = {
	name: "Adult Suede Classic Shoe",
	maker: "Puma",
	price: "168.32"
}

var sneaker2 = {
	name: "Women's Gusto Cross Trainer",
	maker: "Champion",
	price: "39.97"
}

var sneaker3 = {
	name: "Air Max",
	maker: "Nike",
	price: "189.99"
}

var sneaker4 = {
	name: "Chuck Norris",
	maker: "Converse",
	price: "89.99"
}

productList.push(sneaker1, sneaker2, sneaker3, sneaker4);

//Hint: productList.push(newObject) will add the object you just created to the array

console.table(productList);
// console.log(productList[0]);

/* Step 2
 * Iterate (or go through) productList one by one using the for loop
 * and for each product, if the price is below $50, console.log a message like below
 * "The product [name] costs [price], and is a match"
 */
for(var i = 0; i < productList.length; i++){

    if (productList[i].price < 50) {
    	console.log("The product " + productList[i].name + " costs " +
    				productList[i].price + " and it's a match")
    }

}

/* Step 3
 * What is the average price of all the products?
 */

//3.1 first, calculate total price using the for loop again
var sum = 0;

for (var i = 0; i < productList.length; i++) {
	sum += parseFloat(productList[i].price, 10);
}

console.log("sum: " + sum);

//3.2 then, divide total price by the number of products, using proudctList.length

var avg = sum/productList.length

console.log("average: " + avg);


/* Step 4
 * Write a function that accept a single argument, price
 * so that the function returns the number of products below that price
 */

function comparePrice(p){

    var numOfMatchingProducts = 0;

    for (var i = 0; i < productList.length; i++) {
    	if (productList[i].price < p) {
    		numOfMatchingProducts ++;
    	}
    }

    return numOfMatchingProducts;
}

//
console.log("The number of products below $10 is " + comparePrice(10));
console.log("The number of products below $50 is " + comparePrice(50));
