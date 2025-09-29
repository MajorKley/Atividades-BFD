document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomedoCliente').value;
    const bebidasSelecionadas = document.querySelector('input[name="bebidas"]:checked');

    let resultadoTexto = `${nomeCliente}<br>`;

    if (bebidasSelecionadas) {
        resultadoTexto += (`Bebidas Selecionadas:', ${bebidasSelecionadas.value}<br>`);
    }
    else {
        resultadoTexto += (`Não há bebidas Selecionada<br>`)
    }

    const checkboxes = document.querySelectorAll('input[name="doces_salgados"]:checked');
    const valoresSelecionados = [];


    checkboxes.forEach((checkbox) => {
        valoresSelecionados.push(checkbox.value);

    });

    resultadoTexto += ('Doces ou Salgados selecionados:', valoresSelecionados);
    
    document.getElementById('resultadoCalculo').innerHTML = resultadoTexto;

});

