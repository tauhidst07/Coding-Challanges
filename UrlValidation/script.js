 
const regex=/http[s]*:\/\/[\w!@#%\^&*()_\+\-=\[\]{}|;':\",\.\/<>\?~`\]]+[\.]*.[a-zA-z]+/g 

console.log(regex) 

const url= prompt('enter a url to test') 
if(regex.test(url)){
    console.log('it is Valid Url')
} 
else{
    console.log('Invalid URL')
}