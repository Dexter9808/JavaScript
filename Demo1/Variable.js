// constant variable value can not be changed through out the program.
const accountNO = 1445
//Variable : whose value can be changed through out the program.Scope for 'VAR' will be global 
var Name2 = "Akash Patil"

//let var :  whose value can be changed through out the program.Scope for 'let' will be defined where you have initailized it.
let Name = "Akash"
Name3 = "Akash P Patil"


//Note: If you try to change value of accountNo(const Variable) then error will be thrown by node js 
//accountNo=54545

console.log(accountNO);

//console.table is use to print multiple variable values
console.table([accountNO,Name,Name2,Name3])

