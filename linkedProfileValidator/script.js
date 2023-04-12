 
const regex= /https:\/\/www\.linkedin\.com\/in\/[\w_\-]+\w/g 

const linkedinProfile= prompt('enter linkedin profile url')  

if(regex.test(linkedinProfile)){
    console.log('valid profile')
} 
else{
    console.log('invalid profile')
}