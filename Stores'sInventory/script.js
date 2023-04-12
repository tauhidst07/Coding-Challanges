const itemsList=[
    {productname:'name1',price:10}, 
    {productname:'name2',price:25},
    {productname:'name3',price:26},
    {productname:'name4',price:5}
] 

 
function convertPriceInRupees(arr){
    return arr.map((item)=>{
        return {productname:item.productname,price:80*item.price}
    }) 

  
} 

const newitemsList= convertPriceInRupees(itemsList) 
console.log(newitemsList)