console.log("Hello");

var arr=[];
arr.forEach((el)=>{
    console.log("enter positive number");
})
for(let i=0;i<=arr;i++){
    arr[i] =prompt("enter positive number");
}
let odd =arr.filter(el => el%2==1);
let oddcubes=arr.filter(el=>el%2==1).map(el=>el**2);
console.log(odd);
console.log(oddcubes);