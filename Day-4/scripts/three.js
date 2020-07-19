console.log("Hello");
let shoppingList = ["Soap","shampoo","sanitizer","rice","potato","tomato","chilli powder"]
console.log("ShoppingList" ,shoppingList);


let basket ={
    ...shoppingList,
    shoppingList : "chocolate",
}
console.log("Basket" ,basket);

shoppingBasket={
    ...basket,
    shoppingBasket : "mask",
} 
console.log("Shopping Basket",shoppingBasket);
