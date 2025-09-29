document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const respostas01 = document.querySelector('input[name="01pergunta"]:checked');

    if (respostas01) {
        console.log(`Bebidas: ${respostas01.value}<br>`);
    }
    else {
        console.log(`Não há bebidas Selecionada<br>`)
    }

});