var clock = function(){

    var data = new Date()
    var hora = data.getHours()//.toString.length //< 2 ? '0' + data.getHours() : data.getHours()
    var minuto = data.getMinutes()//.toString.length //< 2 ? '0' + data.getMinutes() : data.getMinutes()
    var secundo = data.getSeconds()//.toString.length //< 2 ? '0' + data.getSeconds() : data.getSeconds()
    
    var time = `${hora}:${minuto}:${secundo}`

    document.getElementById('time').innerHTML = time


}

setInterval( function(){
    clock()

}, 1000)