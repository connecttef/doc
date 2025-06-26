---
sidebar_position: 5
---
# Endpoint: Estorno

Realiza o envio de uma solicitação de **Estorno** para o Smart POS associado ao número de série informado. A transação pode ser **executada imediatamente** ou apenas **enviada para a fila**, aguardando execução manual no terminal.

---

### Endpoint:

```http
POST /web-service/estorno
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
    "finalizacao": "D1C8D1D1-B07C-4659-B963-72DFB6F0EFE7|WNRSTA|ZZYUAD",
    "valorTotal": 29.90,
    "imprimirComprovante": true,
    "callbackUrl": "https://meu-webhook.com.br/response",
    "callbackToken": "secret-token-webhook"
  }
]
```

<aside>
📌 **Nota:**  
Para uma descrição completa dos campos utilizados nas requisições e respostas da API — incluindo tipos, obrigatoriedade, valores padrão e exemplos — [**Clique aqui**](./parametros-api.md) para consultar seção.
</aside>