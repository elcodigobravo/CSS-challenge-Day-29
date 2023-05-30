const input = document.getElementById('google')
const completador = document.querySelector('.autocomplete') 

completador.style.visibility = 'hidden'

input.addEventListener('input', function () {

    if (this.value != '') 
        completador.style.visibility = 'visible'
     else 
        completador.style.visibility = 'hidden'
    

    var primeiroElemento = document.querySelector('.autocomplete > a:nth-of-type(1)');
    var segundoElemento = document.querySelector('.autocomplete > a:nth-of-type(2)');
    var terceiroElemento = document.querySelector('.autocomplete > a:nth-of-type(3)');


    primeiroElemento.innerHTML = '<strong>' + this.value + '</strong>'
    segundoElemento.innerHTML = 'Veritatis et' + " " + '<strong>' + this.value + '</strong>'
    terceiroElemento.innerHTML = "ut aliquid ex " + '<strong>' + this.value + '</strong>' + " vero eos"
});


