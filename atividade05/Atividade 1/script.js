
// ----------------------------------------------------
// PARTE 1: As 'caixinhas' que guardam os nomes dos meses
// ----------------------------------------------------
const nomesDosMeses = [
    "Mês Inválido", // Posição 0 (Não usamos)
    "janeiro",      // Posição 1
    "fevereiro",    // Posição 2
    "março",        // Posição 3
    "abril",        // Posição 4
    "maio",         // Posição 5
    "junho",        // Posição 6
    "julho",        // Posição 7
    "agosto",       // Posição 8
    "setembro",     // Posição 9
    "outubro",      // Posição 10
    "novembro",     // Posição 11
    "dezembro"      // Posição 12
];

// ----------------------------------------------------
// PARTE 2: A 'Regra Especial' para Anos Bissextos
// Um ano é bissexto se for divisível por 4, MAS não por 100,
// OU se for divisível por 400.
// ----------------------------------------------------
function isAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// ----------------------------------------------------
// PARTE 3: A função principal que faz a conversão
// ----------------------------------------------------
function converterData() {
    // 1. Pegar o que o usuário digitou
    const inputElement = document.getElementById('inputData');
    const resultadoDiv = document.getElementById('resultado');
    const dataString = inputElement.value.trim(); // Pega o texto e remove espaços extras

    // Limpa o resultado anterior
    resultadoDiv.innerHTML = "";
    // Remove as classes de cores antigas do Tailwind e as substitui pelas do Bootstrap
    resultadoDiv.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800', 'bg-success-subtle', 'text-success', 'bg-danger-subtle', 'text-danger');

    if (dataString === "") {
        exibirMensagem("Erro: O campo deve ser preenchido antes de enviar.", 'erro');
        return;
    }

    // 2. Validação Rápida do Formato (Verifica se está no formato dd/mm/aaaa)
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataString)) {
        exibirMensagem("Erro: O formato deve ser dd/mm/aaaa (Ex: 01/01/2023).", 'erro');
        return; // Para o programa aqui
    }

    // 3. USANDO A DICA: Quebrar a string em pedaços (dia, mês, ano)
    const partes = dataString.split('/');

    // Converter as strings para números inteiros (para podermos fazer contas e comparações)
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    // 4. Validação dos Números (Mês e Ano)
    if (mes < 1 || mes > 12) {
        exibirMensagem("Erro: Mês inválido. O mês deve ser de 01 a 12.", 'erro');
        return;
    }
    if (dia < 1 || dia > 31) {
        exibirMensagem("Erro: Dia inválido. O dia deve ser de 01 a 31.", 'erro');
        return;
    }
    if (ano < 1000 || ano > 9999) {
        exibirMensagem("Erro: Ano inválido.", 'erro');
        return;
    }

    // 5. Validação dos Dias Específicos do Mês (Onde entra o Bissexto)
    let maxDias;

    if (mes === 2) { // Mês de Fevereiro
        maxDias = isAnoBissexto(ano) ? 29 : 28; // Se bissexto é 29, senão é 28
    } else if ([4, 6, 9, 11].includes(mes)) { // Meses com 30 dias (Abril, Junho, Setembro, Novembro)
        maxDias = 30;
    } else { // Meses com 31 dias (Janeiro, Março, Maio, Julho, Agosto, Outubro, Dezembro)
        maxDias = 31;
    }

    if (dia > maxDias) {
        // Se o dia digitado é maior que o máximo permitido para aquele mês/ano
        exibirMensagem(`Erro: O mês de ${nomesDosMeses[mes]} de ${ano} só tem ${maxDias} dias.`, 'erro');
        return;
    }

    // 6. TUDO CERTO! Montar a frase final
    const nomeDoMes = nomesDosMeses[mes];
    const dataExtenso = `${dia} de ${nomeDoMes} de ${ano}`;

    // 7. Mostrar o resultado na tela
    exibirMensagem(dataExtenso, 'sucesso');
}

// Função auxiliar para mostrar mensagens bonitas com classes Bootstrap
function exibirMensagem(texto, tipo) {
    const resultadoDiv = document.getElementById('resultado');

    if (tipo === 'erro') {
        // Estilo de erro Bootstrap: Fundo vermelho claro e texto vermelho escuro
        resultadoDiv.classList.add('bg-danger-subtle', 'text-danger');
    } else { // tipo === 'sucesso'
        // Estilo de sucesso Bootstrap: Fundo verde claro e texto verde escuro
        resultadoDiv.classList.add('bg-success-subtle', 'text-success');
    }

    resultadoDiv.textContent = texto;
}
onclick = "converterData()"
// Opcional: Adiciona a funcionalidade de apertar Enter no campo de texto
document.getElementById('inputData').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        converterData();
    }
});

