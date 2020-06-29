function calcular(){
    var num = document.getElementById('txtnum')
    var sel = document.getElementById('sel')
    if (num.value.langth == 0){
        alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        sel.innerHTML = ''
        for (var i = 1; i<=10;i++){
        var item = document.createElement('option')
        item.text = `${n} * ${i} = ${n*i}`
        item.value = `sel${i}`
        sel.appendChild(item)    
     }
    }
    }