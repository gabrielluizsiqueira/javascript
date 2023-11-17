
var num = [2, 5, 7]

/* 
for (let pos=0; pos<num.length; pos++){
    console.log(`O elemento de posição ${pos} possui valor ${num[pos]}`)
}
*/
for (let pos in num) {
    console.log(`A posição ${pos} possui valor ${num[pos]}`)
 }