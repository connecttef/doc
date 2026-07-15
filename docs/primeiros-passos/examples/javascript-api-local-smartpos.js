const ipSmartpos = '192.168.1.15';
const urlBase = `http://${ipSmartpos}:3005/api/v1`;

async function main() {
// Gere um identificador único para cada operação
const identificacao = crypto.randomUUID();

// Valor da transação
const valorTotal = 100.00;

// Tipo da transação:
// 10 = Crédito à Vista
// 11 = Crédito Parcelado (Estabelecimento)
// 20 = Débito
// 30 = PIX
// 60 = Voucher
const tipoTransacao = 20;

// Cria a operação no SmartPOS
const response = await fetch(`${urlBase}/operacao?tipoOperacao=0`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        identificacao,
        valorTotal,
        tipoTransacao
    })
});

if (!response.ok) {
    console.error('Falha ao criar a operação.');
    return;
}

// Aguarda a conclusão da operação
let operacao;

do {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const statusResponse = await fetch(
        `${urlBase}/operacao?identificacao=${identificacao}`
    );

    operacao = await statusResponse.json();

} while (!operacao.executada);

// Resultado da transação
if (operacao.statusTransacao === '0') {
    console.log('Transação aprovada.');
    console.log('Identificação:', operacao.identificacao);
    console.log('Código de autorização:', operacao.codigoAutorizacaoTransacao);
} else {
    console.log('Transação não aprovada.');
    console.log('Motivo:', operacao.textoEspecialOperador);
}

}

main();
