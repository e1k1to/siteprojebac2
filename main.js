var form = document.getElementById("formulario");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let nome = document.getElementById("nome");
    let tel = document.getElementById("telefone");

    let linha = '<tr>'
    linha += `<td> ${nome.value} </td>`
    linha += `<td> ${tel.value} </td>`
    linha += '</tr>'

    let corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML += linha

    alert(`Pessoa de nome ${nome.value} e telefonen ${tel.value} cadastrada.`)
    nome.value = "";
    tel.value = "";
})