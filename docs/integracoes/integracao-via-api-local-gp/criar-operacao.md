---
sidebar_position: 2
---

# Criar operação

**Endpoint:**

```http
http://localhost:3000/api/v1/operacao
```

**Método:** **`POST`**

## **Headers**

| Header       | Obrigatório | Valor              |
|--------------|-------------|--------------------|
| Content-Type | Sim         | `application/json` |

## **Query Params**

| Parâmetro      | Obrigatório | Descrição                                                                   |
|----------------|-------------|-----------------------------------------------------------------------------|
| `tipoOperacao` | `int`       | Tipo de operação:<br/>`0` = Pagamento<br/>`1` = Estorno<br/>`2` = Impressão |

## **Body Params**

| Campo                 | Tipo      | Obrigatório                 | Descrição                                                |
|-----------------------|-----------|-----------------------------|----------------------------------------------------------|
| `identificacao`       | `string`  | **Sim(Pagamento, Estorno)** | ID único da transação no seu sistema.                    |
| `valorTotal`          | `decimal` | **Sim(Pagamento, Estorno)** | Valor total da venda. Ex: `29.9` para R$29,90            |
| `tipoTransacao`       | `string`  | **Sim(Estorno)**            | Código da transação (veja tabela abaixo).                |
| `quantidadeParcelas`  | `string`  | Não                         | Nº de parcelas. Ex: `"1"`.                               |
| `imprimirComprovante` | `bool`    | Não                         | Imprime comprovante no POS.                              |
| `numeroTransacao`     | `string`  | **Sim(Estorno)**            | Número único da transação fornecido pela adquirente.     |
| `finalizacao`         | `string`  | **Sim(Estorno)**            | Finalização obtida na resposta ao realizar um pagamento. |

### **Códigos para `tipoTransacao`**

| Código | Tipo                                |
|--------|-------------------------------------|
| 10     | Crédito à Vista                     |
| 11     | Crédito Parcelado (Estabelecimento) |
| 12     | Crédito Parcelado (Cliente)         |
| 20     | Débito                              |
| 30     | PIX / Carteira Digital              |
| 60     | Voucher / PAT                       |

## **Exemplo de chamada**

```http
POST http://localhost:3000/api/v1/operacao?tipoOperacao=0
```

**Body Request:**

```json
{
  "identificacao": "abc123",
  "valorTotal": "100"
}
```

**Exemplo de sucesso**

```json
{
  "textoEspecialOperador": "Aguarde...",
  "identificacao": "abc123",
  "executada": false
}
```

**❌ Exemplo de falha**

```json
{
  "textoEspecialOperador": "OPERAÇÃO CANCELADA",
  "identificacao": "abc123",
  "statusTransacao": "1",
  "executada": true
}
```