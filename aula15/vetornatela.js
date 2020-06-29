var num = [5,6,4]
/*
for (var i = 0; i < num.length; i++){
    console.log( `indice: ${i} = ${num[i]}`);
    
    }
*/
/*
for (let i in num){
 console.log(`indice: ${i} = ${num[i]}`);
 
}

console.log(num.indexOf(8));
*/

let pos = num.indexOf(4)
if (pos == -1){
  console.log(`Valor não encontrado`);
  
}else{
    console.log(`Esse é valor está na posição: ${pos}`);
    
}
