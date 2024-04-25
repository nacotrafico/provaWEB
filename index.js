async function listaUF(){
    var lista = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {return res.json()})
    for (var i = 0; i < lista.length; i++){
      document.createElement('li')
      document.ul.appendChild(li)
    }
} 
document.addEventListener('DOMContentLoaded', function () {
  listaUF()
})