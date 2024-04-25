async function listaUF(){
    var lista = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {return res.json()})
    for (var i = 0; i < lista.length; i++){
      console.log(lista[i])
    }
} 
document.addEventListener('DOMContentLoaded', function () {
  listaUF()
})