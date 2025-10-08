document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gabarito
    const respostasCorretas = {
        "01pergunta": "css",
        "02pergunta": "java",
        "03pergunta": "header-certa",
        "04pergunta": "div-certa"
    };

    let pontuacao = 0;
    let total = Object.keys(respostasCorretas).length;
    let resultadoHTML = `
        <div class="mt-4 p-4 border rounded bg-light shadow-sm">
            <h4 class="text-center text-primary mb-3">Resultado do Quiz</h4>
    `;

    // Loop pelas perguntas
    for (let pergunta in respostasCorretas) {
        const selecionada = document.querySelector(`input[name="${pergunta}"]:checked`);
        const resposta = selecionada ? selecionada.value : null;
        const correta = respostasCorretas[pergunta];

        // Verificação
        if (resposta === correta) {
            pontuacao++;
            resultadoHTML += `
                <p class="text-success">
                    ✅ Pergunta ${pergunta.slice(0, 2)} — Correta!
                </p>`;
        } else if (resposta === null) {
            resultadoHTML += `
                <p class="text-warning">
                    ⚠️ Pergunta ${pergunta.slice(0, 2)} — Não respondida.
                </p>`;
        } else {
            resultadoHTML += `
                <p class="text-danger">
                    ❌ Pergunta ${pergunta.slice(0, 2)} — Errada. Resposta correta: 
                    <strong>${corrigirTexto(correta)}</strong>
                </p>`;
        }
    }

    // Mensagem final
    let mensagem = "";
    const porcentagem = (pontuacao / total) * 100;

    if (porcentagem === 100) {
        mensagem = "🎉 Excelente! Você acertou tudo!";
    } else if (porcentagem >= 75) {
        mensagem = "👏 Muito bem! Você está indo ótimo!";
    } else if (porcentagem >= 50) {
        mensagem = "😊 Bom esforço! Continue praticando!";
    } else {
        mensagem = "😅 Que tal revisar um pouco mais os conteúdos?";
    }

    resultadoHTML += `
        <hr>
        <h5 class="text-center">Pontuação: ${pontuacao}/${total} (${porcentagem.toFixed(0)}%)</h5>
        <p class="text-center fw-bold">${mensagem}</p>
        </div>
    `;

    // Exibe o resultado após o formulário
    const container = document.querySelector('.container');
    const resultadoExistente = document.getElementById('resultadoQuiz');
    if (resultadoExistente) resultadoExistente.remove();

    const resultadoDiv = document.createElement('div');
    resultadoDiv.id = 'resultadoQuiz';
    resultadoDiv.innerHTML = resultadoHTML;
    container.appendChild(resultadoDiv);

    // Função auxiliar para mostrar a resposta correta de forma mais limpa
    function corrigirTexto(valor) {
        if (valor.includes('css')) return 'CSS';
        if (valor.includes('java')) return 'Java';
        if (valor.includes('header')) return '<header>';
        if (valor.includes('div')) return '<div>';
        return valor;
    }
});
