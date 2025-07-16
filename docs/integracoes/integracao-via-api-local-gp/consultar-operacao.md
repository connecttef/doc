---
sidebar_position: 3
---

# Consultar operação

**Endpoint:**

```http
http://localhost:3000/api/v1/operacao
```

**Método:** **`GET`**

## **Headers**

| Header       | Obrigatório | Valor              |
|--------------|-------------|--------------------|
| Content-Type | Sim         | `application/json` |

## **Query Params**

| Campo           | Tipo     | Obrigatório | Descrição                             |
|-----------------|----------|-------------|---------------------------------------|
| `identificacao` | `string` | **Sim**     | ID único da transação no seu sistema. |

## **Exemplo de chamada**

```http
GET http://localhost:3000/api/v1/operacao?identificacao=abc123
```

### ⏳ Em Andamento

```json
{
  "executada": false,
  "textoEspecialOperador": "PROCESSANDO..."
}
```

### ❌ Exemplo com Falha

```json
{
  "executada": true,
  "statusTransacao": "1001",
  "textoEspecialOperador": "Cartão inválido"
}
```

### ✅ Exemplo com Sucesso (Pagamento)

```json
{
  "identificacao": "abc123",
  "valorTotal": "100",
  "statusTransacao": "0",
  "nomeRede": "PINBANK",
  "tipoTransacao": "20",
  "numeroTransacao": "119",
  "codigoAutorizacaoTransacao": "695499",
  "timestampTransacaoHost": "1607175018",
  "quantidadeParcelas": "1",
  "dataTransacaoComprovante": "16072025",
  "horaTransacaoComprovante": "175018",
  "finalizacao": "2117132|695499|695499",
  "quantidadeLinhasComprovante": "14",
  "numeroSerieTerminal": "PBF923CC70331",
  "comprovante": "\"-----------------------------------------\"\n\"              VIA CLIENTE                \"\n\"-----------------------------------------\"\n\"VALOR                                1,00\"\n\"FORMA PAGAMENTO            Débito à vista\"\n\"CARTAO                     550209****9039\"\n\"REDE                              PINBANK\"\n\"TERMINAL                    PBF923CC70331\"\n\"NSU                                   119\"\n\"AUT                                695499\"\n\"CODE                               695499\"\n\"-----------------------------------------\"\n\"          PDVPOS - CONNECT TEF           \"\n\"          16/07/2025 17:50:18            \"\n",
  "executada": true,
  "cnpj": "42407441000152",
  "bandeiraCartao": "MASTERCARD"
}
```

### ✅ Exemplo com Sucesso (Estorno)

```json
{
  "identificacao": "abc123",
  "valorTotal": "100",
  "statusTransacao": "0",
  "nomeRede": "PINBANK",
  "tipoTransacao": "20",
  "numeroTransacao": "119",
  "codigoAutorizacaoTransacao": "695499",
  "timestampTransacaoHost": "1607175018",
  "quantidadeParcelas": "1",
  "dataTransacaoComprovante": "16072025",
  "horaTransacaoComprovante": "175018",
  "numeroTransacaoCancelada": "119",
  "timestampTransacaoCancelada": "1607175018",
  "finalizacao": "2117132|695499|695499",
  "quantidadeLinhasComprovante": "000",
  "numeroSerieTerminal": "PBF923CC70331",
  "comprovante": "\"-----------------------------------------\"\n\"              VIA CLIENTE                \"\n\"-----------------------------------------\"\n\"VALOR                                1,00\"\n\"FORMA PAGAMENTO            Débito à vista\"\n\"CARTAO                     550209****9039\"\n\"REDE                              PINBANK\"\n\"TERMINAL                    PBF923CC70331\"\n\"NSU                                   119\"\n\"AUT                                695499\"\n\"CODE                               695499\"\n\"-----------------------------------------\"\n\"          PDVPOS - CONNECT TEF           \"\n\"          16/07/2025 17:50:18            \"\n",
  "executada": true,
  "cnpj": "42407441000152",
  "bandeiraCartao": "MASTERCARD"
}
```