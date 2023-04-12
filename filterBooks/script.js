// const item=[1,2,34,5,5,6,7,8,9] 

// const newitem=item.filter((value)=>value%2==0).map((value)=>{
//     return value*10
// })

// console.log(newitem) 

const bookList=[
    {authorName:'tauhid',PublishYear:2011},
    {authorName:'Fareeza',PublishYear:2010},
    {authorName:'sachin',PublishYear:2012},
    {authorName:'abhishek',PublishYear:2005},
    {authorName:'aditya',PublishYear:2007},
    {authorName:'name',PublishYear:2006},
    {authorName:'megha',PublishYear:2015}
] 
function filterBooks(arr){
 return arr.filter((book)=>book.PublishYear>2008).map((book)=>{
   return { authorName: book.authorName[0].toUpperCase()+book.authorName.slice(1),PublishYear:book.PublishYear}
  })
}  

const filteredBookList= filterBooks(bookList) 
console.log(filteredBookList) 

console.log(bookList)

