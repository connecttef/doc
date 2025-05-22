---
sidebar_position: 3
---
# Parâmetros da API

Nesta seção você encontra a descrição completa dos **parâmetros utilizados na API do Connect TEF**, incluindo os valores esperados em **query string**, no **corpo das requisições** e no **retorno via webhook**.

---

### 🌐 URL Base

```text
https://apitef.pdvpos.com.br/api/v1
```

Todas as requisições devem ser feitas a partir desta URL, utilizando o endpoint apropriado conforme a operação desejada.

---

### 🔍 Query

Utilizados quando os dados são enviados diretamente na URL (exemplo: `POST /pagamento?numeroSerie=abc123`).

| Parâmetro   | Tipo     | Obrigatório                          | Descrição                          |
| ----------- | -------- | ------------------------------------ | ---------------------------------- |
| numeroSerie | `string` | Sim                                  | Número de série do Smart POS       |
| callbackUrl | `string` | Sim                                  | URL para envio do webhook          |
| CPFCNPJ     | `string` | Sim *(exceto na geração de QR Code)* | CPF ou CNPJ vinculado ao Smart POS |

---

### 📨 Body

| Campo                | Tipo     | Obrigatório     | Padrão  | Descrição                                                              |
| -------------------- | -------- | --------------- | ------- | ---------------------------------------------------------------------- |
| identificacao                | `string`  | Sim (todas)         | -       | Identificador único da transação                                       |
| callbackUrl                  | `string`  | Sim (todas)         | -       | URL de retorno para notificações via webhook                           |
| finalizacao                  | `string`  | Sim (estorno)       | -       | Código de finalização da transação                                     |
| base64                       | `string`  | Sim (impressão)     | -       | Imagem codificada em base64 a ser impressa                             |
| callbackToken                | `string`  | Não                 | -       | Token enviado no header `token` do webhook                             |
| imprimirComprovante          | `bool`    | Não                 | `false` | Se `true`, imprime o comprovante no Smart POS                          |
| naoExecutar                  | `bool`    | Não                 | `false` | Se `true`, adiciona à lista de cobranças pendentes do Smart POS        |
| sobreporOperacao             | `bool`    | Não                 | `false` | Se `true`, cancela operação anterior em andamento                      |
| uuidTerminal                 | `string`  | Não                 | -       | UUID do terminal para direcionar a solicitação                         |
| textoEspecialCliente         | `string`  | Não                 | -       | Texto exibido no Smart POS ao usar `naoExecutar: true`                 |
| valorTotal                   | `number`  | Não                 | `0.00`  | Valor total da transação                                               |
| quantidadeParcelas           | `number`  | Não                 | `1`     | Quantidade de parcelas (para vendas a crédito)                         |
| tipoTransacao                | `number`  | Não                 | `99`    | Código do tipo de transação (veja tabela abaixo)                       |
| comanda                      | `json`    | Não                 | -       | Informações adicionais a serem exibidas no Smart POS (detalhes abaixo)|
| bandeiraCartao             | `string`  | Não (retorno)       | -       | Bandeira do cartão utilizado (ex: VISA, MASTERCARD)|
| cnpj                       | `string`  | Não (retorno)       | -       | CNPJ do estabelecimento vinculado ao POS|
| codigoAutorizacaoTransacao | `string`  | Não (retorno)       | -       | Código de autorização da adquirente|
| dataTransacaoComprovante   | `string`  | Não (retorno)       | -       | Data da transação (formato: `ddMMyyyy`)|
| horaTransacaoComprovante   | `string`  | Não (retorno)       | -       | Hora da transação (formato: `hhmmss`)|
| executada                  | `boolean` | Não (retorno)       | -       | Indica se a transação foi executada (`true`) ou apenas adicionada à fila|
| nomeRede                   | `string`  | Não (retorno)       | -       | Nome da rede adquirente (ex: STONE, CIELO)|
| numeroTransacao            | `string`  | Não (retorno)       | -       | Número único da transação fornecido pela adquirente|
| razaoSocial                | `string`  | Não (retorno)       | -       | Nome do estabelecimento no POS|
| statusTransacao            | `string`  | Não (retorno)       | -       | `0` = sucesso, outros valores indicam falha|
| timestampTransacaoHost     | `string`  | Não (retorno)       | -       | Timestamp da transação no host/processadora|
| textoEspecialOperador      | `string`  | Não (retorno/falha) | -       | Mensagem explicativa quando há falha|

### ⚠️ Observações Importantes

* Se `statusTransacao = "0"`, a transação foi **concluída com sucesso**.
* Se `executada = false`, a operação está em andamento.
* Para qualquer valor diferente de `"0"`, a transação **falhou**, e o campo `textoEspecialOperador` estará presente com a mensagem de erro detalhada.

**Exemplo de falha**:

```json
{
  "statusTransacao": "1",
  "textoEspecialOperador": "Ocorreu uma falha no processo de pagamento: Tempo de espera excedido na conexão com o host de pagamento (PCRC-0016)"
}
```

### 🧾 Exemplo de objeto `comanda`:

```json
{
  "identificador": "Ismael Almeida",
  "itens": [
    {
      "titulo": "Coca cola",
      "descrição": "Bem gelada"
    }
  ],
  "endereco": "R. Humberto I, 1005 - Vila Mariana"
}
```

### 🔢 Códigos para `tipoTransacao`

| Código | Tipo de Transação                      |
| ------ | -------------------------------------- |
| 10     | Cartão de Crédito à Vista              |
| 11     | Crédito Parcelado pelo Estabelecimento |
| 12     | Crédito Parcelado pela Administradora  |
| 20     | Cartão de Débito                       |
| 30     | PIX / Carteira Digital                 |
| 60     | Voucher / PAT                          |
| 99     | Outras                                 |