---
sidebar_position: 1
---

# Introdução

A `ConnectTEF.dll` é uma biblioteca nativa que permite integrar sistemas com soluções Smart TEF, oferecendo suporte a transações, estornos, impressão e vários utilitários.

> ⚠️ **Importante:**
> A DLL se comunica com o **Gerenciador Padrão Smart TEF**, que deve estar corretamente instalado e configurado no ambiente. Para garantir o funcionamento correto, consulte o **Guia de Ativação do Gerenciador Smart TEF** antes de iniciar a integração.
> [Acessar Guia de Ativação](../../guia-ativacao/windows.md)

## Downloads

Antes de começar, baixe os arquivos necessários para realizar a integração:

| Item                      | Descrição                               | Link para Download    |
| ------------------------- | --------------------------------------- | --------------------- |
| DLL ConnectTEF x86        | Biblioteca para sistemas 32 bits        | [Download DLL x86](https://arquivos.pdvpos.com.br/connecttef/homologacao/ConnecttefComponentGP-X86.dll) |
| DLL ConnectTEF x64        | Biblioteca para sistemas 64 bits        | [Download DLL x64](https://arquivos.pdvpos.com.br/connecttef/homologacao/ConnecttefComponentGP-X64.dll) |
| Projeto Exemplo (C# .NET) | Exemplo prático de integração com a DLL | [Download Exemplo](https://arquivos.pdvpos.com.br/connecttef/homologacao/ExemploIntegracaoDll.rar)      |

## Como Saber se a Operação foi Bem-sucedida

Todas as funções da DLL retornam uma **string no formato JSON**. Para validar se a operação foi concluída com sucesso:

* Verifique o campo `"statusTransacao"` no JSON de retorno:

  * `"0"`: Operação bem-sucedida
  * Qualquer outro valor: Indica falha

* Se ocorrer um erro, o campo `"textoEspecialOperador"` trará a descrição:

```json
{
  "statusTransacao": "1",
  "textoEspecialOperador": "Erro ao se comunicar com a rede"
}
```

---

## Funções Exportadas

### 🧾 Transações

#### `const char* executarTransacao(const char* identificacao, int valor_total);`

* **`identificacao`**: string (até 10 caracteres) – ID único da transação
* **`valor_total`**: inteiro – Valor da venda em centavos (Ex: R\$ 10,00 → `1000`)

---

#### `const char* desfazerTransacao(const char* identificacao, const char* numeroTransacao);`

* **`identificacao`**: string – ID da requisição de estorno
* **`numeroTransacao`**: string – NSU da transação original

---

### 🖨️ Impressão

#### `const char* imprimirTexto(const char* texto);`

* **`texto`**: string – Texto a ser impresso

---

#### `const char* imprimirImagemBase64(const char* base64);`

* **`base64`**: string – Imagem codificada (preto e branco preferencial)

---

#### `const char* imprimirViaEstabelecimento(const char* nsu);`

#### `const char* imprimirViaCliente(const char* nsu);`

* **`nsu`**: string – NSU da transação

---

#### `const char* reimprimirViaEstabelecimento();`

#### `const char* reimprimirViaCliente();`

* **Parâmetros**: nenhum

---

### 🧩 Utilitários

#### `const char* coletarDados();`

#### `const char* lerCodigoBarra();`

#### `const char* solicitarCPFCNPJ();`

* **Parâmetros**: nenhum