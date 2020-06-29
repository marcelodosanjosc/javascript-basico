function calcular(){
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
        
        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            alert('[ERRO] Faltam dados!')
        }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for (var c = i; c <= f; c+= p){
                res.innerHTML += `  ${c} \u{1F449} `
                 }
                 res.innerHTML += `\u{1F3c1}`
        } else {
            for (var c = i; c >= f; c-= p){
                res.innerHTML += `  ${c} \u{1F449} `
                 }
                 res.innerHTML += `\u{1F3c1}`
        }
       
    }
}