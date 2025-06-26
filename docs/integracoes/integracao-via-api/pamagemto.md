---
sidebar_position: 4
---
# Endpoint: Pagamento

Realiza o envio de uma solicitação de **pagamento** para o Smart POS associado ao número de série informado. A transação pode ser **executada imediatamente** ou apenas **enviada para a fila**, aguardando execução manual no terminal.

---

### Endpoint

```http
POST /web-service/pagamento
```

---

### Parâmetros de Query

| Parâmetro   | Exemplo              | Obrigatório | Descrição                               |
| ----------- | -------------------- | ----------- | --------------------------------------- |
| numeroSerie | `pdv001`             | Sim         | Número de série do PDV vinculado ao POS |
| CPFCNPJ     | `00.000.000/0000-00` | Sim         | CPF ou CNPJ vinculado ao Smart POS      |

> 💡 **Notas importantes**
>
> * O `CPFCNPJ` deve ser o mesmo configurado no POS.
> * O `numeroSerie` deve estar vinculado a um terminal homologado.
> * A `callbackUrl` deve ser pública e estar apta a receber requisições POST com os dados da transação.

---

### Corpo da Requisição (Request Body)

A requisição deve ser enviada como um array de objetos JSON, cada um representando uma transação:

```json
[
  {
    "identificacao": "abc123",
    "tipoTransacao": 10,
    "quantidadeParcelas": 1,
    "valorTotal": 29.90,
    "imprimirComprovante": true,
    "callbackUrl": "https://meu-webhook.com.br/response",
    "callbackToken": "secret-token-webhook",
    "naoExecutar": true,
    "comanda": {
      "identificador": "Ismael Almeida",
      "itens": [
        {
          "titulo": "Coca cola",
          "descrição": "Bem gelada"
        }
      ],
      "endereco": "R. Humberto I, 1005 - Vila Mariana"
    }
  }
]
```

---

> 💡 **Observações**
>
> * Quando `"naoExecutar": true`, a solicitação **não é executada automaticamente**, sendo exibida como uma cobrança pendente no terminal.
> * O campo `comanda` permite exibir **informações adicionais** como nome do cliente, endereço e itens consumidos.
> * Se você **não enviar o campo `tipoTransacao`**, o operador poderá selecionar a forma de pagamento diretamente no POS no momento da execução.

---

### Estrutura do Webhook

A URL informada no campo `callbackUrl` receberá uma requisição `POST` com o conteúdo no formato JSON contendo os dados da transação.

**Exemplo de payload recebido:**

```json
{
	"bandeiraCartao": "VISA",
	"cnpj": "00.000.000/0000-00",
	"codigoAutorizacaoTransacao": "000000",
	"dataTransacaoComprovante": "14052025",
	"executada": true,
	"finalizacao": "000000|000000|000000",
	"horaTransacaoComprovante": "133836",
	"identificacao": "abc123",
	"nomeRede": "STONE",
	"numeroTransacao": "000000",
	"quantidadeParcelas": "1",
	"razaoSocial": "Loja X",
	"statusTransacao": "0",
	"timestampTransacaoHost": "1405133836",
	"tipoTransacao": "10",
	"valorTotal": "11.00"
}
```