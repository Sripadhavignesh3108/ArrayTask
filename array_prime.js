//2) Find the first  missing prime number among the given space separated numbers.
 
// Enter numbers: 20 5 2 7 12 14
// output: 3

const prompt = require("prompt-sync")();
let arr =prompt("enter Some number with Space Between :").split(" ").map(Number)
let max=arr[0]
let primen=[]
for(m of arr){
    if(max<m)
        max=m
}
for(j=max;j>1;j--){
    prime=true
    for(i=2;i<j;i++){
        if(j%i==0){
            prime=false
            break;
        }
    }
    if(prime==true)
        primen.unshift(j)
}
p=0;
for(v of primen){
    if(!arr.includes(v)){
        p+=v;
        break
    }  
}
if(p==0) console.log("There is No Missing Prime Number in :"+arr.join(" "))

else console.log("The First Missing Prime Number is :"+ `[ ${p} ]`)


