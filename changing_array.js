// ["html","css","js","react"]
// ["react","ssc","sj","html"]

// const prompt = require("prompt-sync")();




let arr=["html","css","js","react"]
let ar=[]
for(i=1;i<arr.length-1;i++){
ar.push(arr[i].split("").reverse().join(""))
}
let a=arr.shift(),b=arr.pop()
ar.unshift(b),ar.push(a)
console.log(ar)
