console.log("Hello");
sales = parseFloat(prompt("Enter the amount of sales made in this year: "));
if ((sales >= 0) && (sales <=5000)){
    sale = ((sales*2)/100)
    sales = sales +sale;

    console.log(`Your reward is ${sale} and your total commision is ${sales}`)
}
else if ((sales >5000 ) && (sales <=10000)){
    sale = ((sales*5)/100)
    sales = sales +sale;
 
    console.log(`Your reward is ${sale} and your total commision is ${sales}`)
}
else if ((sales > 10000) && (sales <=20000)){
    sale = ((sales*7)/100)
    sales = sales +sale;
   
    console.log(`Your reward is ${sale} and your total commision is ${sales}`)
}
else {
    sale = ((sales*10)/100)
    sales = sales +sale;
    
    console.log(`Your reward is ${sale} and your total commision is ${sales}`)
}

