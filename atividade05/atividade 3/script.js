const precos_bebidas = {
    suco: 4.00,
    refrigerante: 2.50,
    agua: 1.5, 
}

const precos_bolos_salgados = {
    bolo: 3.50,
    pastel: 3.00,
    torta: 4.00,
}


document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const bebidaSelecionada = document.querySelector('input[name="bebidas"]:checked');

    let resultadoTexto = `Cliente: ${nomeCliente}<br>`;

    let valor_bebida = 0;
    if (bebidaSelecionada) {
        valor_bebida = precos_bebidas[bebidaSelecionada.value]
        resultadoTexto += (`Bebida Selecionada: ${bebidaSelecionada.value} - R$ ${valor_bebida}<br>`);
        
    }
    else {
        resultadoTexto += (`Não há bebidas Selecionada<br>`)
    }

    const checkboxes = document.querySelectorAll('input[name="doces_salgados"]:checked');
    const valoresSelecionados = [];


    let valor_boloSalgado = 0;
    checkboxes.forEach((checkbox) => {
        valoresSelecionados.push(checkbox.value);
        valor_boloSalgado += ( precos_bolos_salgados[checkbox.value]);

    });

    valorTotal = valor_bebida + valor_boloSalgado
    
    resultadoTexto += (`Doces ou Salgados selecionados: ${valoresSelecionados} - total: R$ ${valor_boloSalgado}<br>`);
    resultadoTexto += ( `Total compra: R$ ${valorTotal}`)

    
    document.getElementById('resultadoCalculo').innerHTML = resultadoTexto;

    

});

