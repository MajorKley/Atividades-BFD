
document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

// Primeira pergunta
    const respostas01 = document.querySelector('input[name="01pergunta"]:checked');

    if (respostas01.value == "css") {
        console.log(`Resposta correta: ${respostas01.value}`);
    }
    else {
     console.log(`A resposta da pergunta 01 está incorreta`)
    }


});
 
// Segunda pergunta

    const respostas02 = document.querySelector('input[name="02pergunta"]:checked');

    if (respostas02 == "java") {
        console.log(`respostas02: ${respostas02.value}<br>`);
    }
    else {
     console.log(`A resposta da pergunta 02 está incorreta`)
    }


;