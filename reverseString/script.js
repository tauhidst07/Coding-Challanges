
const input= prompt('enter a string') 
setTimeout(()=>{
  const reverseString = Array.from(input).reverse().join('')  
  console.log(reverseString)
},2000) 

