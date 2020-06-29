
var txtnum = document.getElementById('num')
var sel = document.getElementById('sel')
var res = document.getElementById('res')
var valores = []
var num = Number(txtnum.value)

function inNumero(n){
 if (Number(n) >=1 && Number(n) <=100){
     return true
 }else{
     return false
 }

}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
      return true
    }else{
        return false
    }
}

function adicionar(){
if (inNumero(txtnum.value) && !inLista(txtnum.value, valores)){
     valores.push(Number(txtnum.value))
     let item = document.createElement('option')
     item.text = `valor ${txtnum.value} adicionado.`
     sel.appendChild(item)
     res.innerHTML = ''
}else{
    alert('Valor invalido ou já encontrado na lista')
}
txtnum.value = ''
txtnum.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('adicione valores antes de finalizar!')
    }else{
        let = tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
        if(valores[pos] > maior)
           maior = valores[pos]
        if (valores[pos] < menor)
           menor = valores[pos]
    }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior} da lista.</p>`
        res.innerHTML += `<p>O meno número é ${menor} da lista.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }   
}