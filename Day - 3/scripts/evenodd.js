console.log("hello");
let num = prompt("Enter a number: ",0);
 

result = evodd(num);

if (1){
    console.log(`The number entered is ${num} and it is Odd`);
}
else{
    console.log(`The number entered is ${num} and it is Even`);
}

function evodd(num){
    if (num%2 == 0)
    {
        return 2;
    }
    else {
    return 1;
    }


}