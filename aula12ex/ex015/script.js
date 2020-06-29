function verificar(){
    var data = new  Date()
    var ano = data.getFullYear()
    var anoDigitado = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (anoDigitado.value.length == 0 || anoDigitado.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoDigitado.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('img','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bebê-homem.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','jovem-mulher.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src','jovem-mulher.png')
            }else{
                //idoso
                img.setAttribute('src','idoso-homem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bebê-mulher.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','jovem-homem.png')
            }else if (idade < 50){
                // adulto
                img.setAttribute('src','jovem-homem.png')
            }else{
                //idoso
                img.setAttribute('src','idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML += `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }

    
}