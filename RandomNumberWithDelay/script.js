 
const delay= 10000; 
let second=1; 
console.log('time remaining',delay/1000,'sec')
const timerId=setInterval(()=>{ 
if(second*1000===delay-1000) {clearInterval(timerId)}
 console.log('time remaining',(delay-second*1000)/1000,'sec') 
 second++
},1000) 
setTimeout(()=>{  
    console.log( 'random number:',Math.round(Math.random()*100))
},delay) 

