document.getElementById('meu-Formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    //capturando informações do input
    let campoValor = document.getElementById('valor-emprestimo').value;
    let campoJuros = document.getElementById('juros').value;
    let campoParcelas = document.getElementById('parcelas').value;

    //adicionando informações de "informações adicionadas"
    let informacoesValor = document.getElementById('informacoes-valor-emprestimo');
    let informacoesJuros = document.getElementById('informacoes-juros');
    let informacoesParcelas = document.getElementById('informacoes-parcelas');

    informacoesValor.innerHTML = `${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(campoValor)}`;
    informacoesJuros.innerHTML = `${campoJuros}%`;
    informacoesParcelas.innerHTML = `${campoParcelas}`;

    //calculo das parcelas(i = juros), (PMT = valor da parcela mensal)
    let i = campoJuros/100;

    let parcelaMensal = campoValor * (i * Math.pow(1 + i, campoParcelas))/(Math.pow(1 + i, campoParcelas) - 1); 

    //adicionando texto ao resultado
    let resultadoParcelaMensal = document.getElementById('parcela-mensal');
    let resultadoPagamentoTotal = document.getElementById('pagamento-total');

    resultadoPagamentoTotal.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(campoParcelas * parcelaMensal)
    resultadoParcelaMensal.innerHTML = `${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(parcelaMensal)}`;

    

     // =============================
    // 🔹 GERAR TABELA DE AMORTIZAÇÃO
    // =============================

    let tabelaContainer = document.getElementById('tabela-amortizacao');
    if (!tabelaContainer) {
        tabelaContainer = document.createElement('div');
        tabelaContainer.id = 'tabela-amortizacao';
        document.getElementById('results').appendChild(tabelaContainer);
    }

    let saldoDevedor = campoValor;
    let html = `
        <h3 class="mt-4">Tabela de Amortização</h3>
        <table class="table table-bordered table-striped">
            <thead class="table-primary">
                <tr>
                    <th>Parcela</th>
                    <th>Valor da Parcela</th>
                    <th>Juros</th>
                    <th>Amortização</th>
                    <th>Saldo Restante</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let p = 1; p <= campoParcelas; p++) {
        let jurosMes = saldoDevedor * i;
        let amortizacao = parcelaMensal - jurosMes;
        saldoDevedor -= amortizacao;

        html += `
            <tr>
                <td>${p}</td>
                <td>${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(parcelaMensal)}</td>
                <td>${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(jurosMes)}</td>
                <td>${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(amortizacao)}</td>
                <td>${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Math.max(saldoDevedor, 0))}</td>
            </tr>
        `;
    }

    html += `</tbody></table>`;
    tabelaContainer.innerHTML = html;






})  