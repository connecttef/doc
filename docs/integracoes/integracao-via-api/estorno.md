---
sidebar_position: 4
---

# Estorno

Este endpoint inicia uma transação de estorno no POS vinculado ao PDV.

---

## Fluxo de Estorno

1. Seu sistema solicita um estorno.
2. A API valida o certificado (mTLS), aceita a requisição e envia ao POS
3. O POS desfaz a transação com o cliente.
4. Após finalização (ou erro), o resultado é enviado ao **webhook** cadastrado.

![img_3.png](img_3.png)

---

## Requisição

**Método:** `POST`
**Endpoint:**

```http
https://apitef.pdvpos.com.br/api/v1/web-service/estorno
```

### **Headers**

| Header       | Obrigatório | Valor              |
|--------------|-------------|--------------------|
| Content-Type | Sim         | `application/json` |

### **Query Params**

| Parâmetro     | Obrigatório | Descrição                                       |
|---------------|-------------|-------------------------------------------------|
| `numeroSerie` | Sim         | Identificador únido da automação (ex: caixa001) |
| `CPFCNPJ`     | Sim         | Obtido na vinculação no campo `CPFCNPJ`         |

### **Body Params**

| Campo                | Tipo     | Obrigatório | Padrão  | Descrição                                                              |
|----------------------|----------|-------------|---------|------------------------------------------------------------------------|
| identificacao        | `string` | Sim         | -       | Identificador único da transação                                       |
| callbackUrl          | `string` | Sim         | -       | URL de retorno para notificações via webhook                           |
| valorTotal           | `number` | Sim         | `0.00`  | Valor total da transação                                               |
| tipoTransacao        | `number` | Sim         | -       | Código do tipo de transação (veja tabela abaixo)                       |
| finalizacao          | `string` | Sim         | -       | Código de finalização da transação                                     |
| callbackToken        | `string` | Não         | -       | Token enviado no header `token` do webhook                             |
| imprimirComprovante  | `bool`   | Não         | `false` | Se `true`, imprime o comprovante no Smart POS                          |
| naoExecutar          | `bool`   | Não         | `false` | Se `true`, adiciona à lista de cobranças pendentes do Smart POS        |
| uuidTerminal         | `string` | Não         | -       | UUID do terminal para direcionar a solicitação                         |
| textoEspecialCliente | `string` | Não         | -       | Texto exibido no Smart POS ao usar `naoExecutar: true`                 |
| quantidadeParcelas   | `number` | Não         | `1`     | Quantidade de parcelas (para vendas a crédito)                         |
| comanda              | `json`   | Não         | -       | Informações adicionais a serem exibidas no Smart POS (detalhes abaixo) |

### **Códigos para `tipoTransacao`**

| Código | Tipo de Transação                      |
|--------|----------------------------------------|
| 10     | Cartão de Crédito à Vista              |
| 11     | Crédito Parcelado pelo Estabelecimento |
| 12     | Crédito Parcelado pela Administradora  |
| 20     | Cartão de Débito                       |
| 30     | PIX / Carteira Digital                 |
| 60     | Voucher / PAT                          |
| 99     | Outras                                 |

Json `comanda`:

```json
{
  "identificador": "Estornar pagamento ao Ismael Almeida",
  "itens": [
    {
      "titulo": "Coca cola",
      "descrição": "Bem gelada"
    }
  ],
  "endereco": "R. Humberto I, 1005 - Vila Mariana"
}
```

### **Exemplo de chamada**

```http
POST https://apitef.pdvpos.com.br/api/v1/web-service/estorno?numeroSerie=caixa001&CPFCNPJ=42580012000182
```

Body Params:

```json
[
  {
    "identificacao": "abc123",
    "tipoTransacao": 10,
    "finalizacao": "D1C8D1D1-B07C-4659-B963-72DFB6F0EFE7|WNRSTA|ZZYUAD",
    "valorTotal": 29.90,
    "imprimirComprovante": true,
    "callbackUrl": "https://meu-webhook.com.br/response",
    "callbackToken": "secret-token-webhook"
  }
]
```

---

## Resposta imediata (síncrona)

```json
{
  "status": "transacao_enviada",
  "mensagem": "Transação enviada ao POS",
  "referencia": "abc123"
}
```

---

## Webhook Recebido após finalização

A resposta completa da transação será enviada para o `webhook` informado:

**Headers:**

```
token: abc1234
```

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

---

## Interpretação dos campos principais

| Campo                        | Tipo     | Descrição                                                                      |
|------------------------------|----------|--------------------------------------------------------------------------------|
| `executada`                  | boolean  | `true` se a transação foi executada no POS (independente do resultado)         |
| `statusTransacao`            | string   | `"0"` = sucesso<br/>Qualquer outro valor = falha (ver `textoEspecialOperador`) |
| `textoEspecialOperador`      | string   | Contém a causa do erro, se houver                                              |
| `identificacao`              | `string` | Identificador único da transação                                               |
| `bandeiraCartao`             | `string` | Bandeira do cartão utilizado (ex: VISA, MASTERCARD)                            |
| `cnpj`                       | `string` | CNPJ do estabelecimento vinculado ao POS                                       |
| `codigoAutorizacaoTransacao` | `string` | Código de autorização da adquirente                                            |
| `dataTransacaoComprovante`   | `string` | Data da transação (formato: `ddMMyyyy`)                                        |
| `horaTransacaoComprovante`   | `string` | Hora da transação (formato: `hhmmss`)                                          |
| `nomeRede`                   | `string` | Nome da rede adquirente (ex: STONE, CIELO)                                     |
| `numeroTransacao`            | `string` | Número único da transação fornecido pela adquirente                            |
| `razaoSocial`                | `string` | Nome do estabelecimento no POS                                                 |
| `timestampTransacaoHost`     | `string` | Timestamp da transação no host/processadora                                    |

---

### ✅ Exemplo de sucesso

```json
"executada": true,
"statusTransacao": "0",
"textoEspecialOperador": "Transação aprovada"
```

### ❌ Exemplo de falha

```json
"executada": true,
"statusTransacao": "1001",
"textoEspecialOperador": "Cartão inválido"
```

---

## ▶️ Próximos passos

Agora que você já entendeu o funcionamento o estorno, acesse o próximo tópico.