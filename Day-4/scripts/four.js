console.log("hello");
a = parseFloat( prompt("Enter the first number :"));
b = parseFloat(prompt("Enter the second number :"));
c = prompt("Enter the operation add, sub, mul, div, squareroot, percentage ")
if (c == "add"){
    console.log(a+b);
    
}
else if (c == "sub"){
    console.log(a-b)
    
}
else if (c == "mul"){
    console.log(a*b)
    
}
else if (c == "div"){
    console.log(a/b)
    
}
else if (c == "squareroot"){
   d = prompt("Enter square root of num1 or num2 :");
    if (d == "num1"){
    console.log(Math.sqrt(a))
    }
    else if (d == "num2"){
        console.log(Math.sqrt(b))
    }
    
}
else if (c == "percentage"){
    e= prompt("Enter percentage of num1 or num2: ");
    if (e == "num1"){
        console.log(Math.sqrt(a))
        }
        else if (e == "num2"){
            console.log(Math.sqrt(b))
        }
    
}
else {
    console.log("Please enter correct input")
}
