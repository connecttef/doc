---
sidebar_position: 2
---

# Testando via Postman

Este guia mostra como testar a integração com o **Connect TEF** utilizando o **Postman** com autenticação por **certificado `.pfx`**. Também explicamos como fazer a **vinculação do terminal SmartPOS**, etapa obrigatória antes de realizar pagamentos ou estornos.

---

### Arquivos Necessários

| Descrição | Link |
| --------- | ---- |
| Certificado (.pfx) | [Baixar certificado de teste](https://arquivos.pdvpos.com.br/connecttef/webservice.pfx) |
| Collection + Ambiente Postman | [Baixar arquivos](https://arquivos.pdvpos.com.br/connecttef/homologacao+connecttef+postman.rar) |

Caso ainda não tenha o Postman instalado, baixe aqui: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

---

### Etapa 1: Importar o Certificado no Postman

1. Abra o **Postman**
2. Vá em **Settings (ícone de engrenagem no canto superior direito)**
3. Acesse a aba **Certificates**
4. Clique em **Add Certificate**
5. Preencha com os seguintes dados:
   - **Host**: `apitef.pdvpos.com.br`
   - **Port**: `443`
   - **PFX File**: selecione o arquivo `webservice.pfx` baixado
   - **Passphrase**: (senha do certificado – normalmente informada no chamado)
6. Clique em **Add**

---

### Etapa 2: Importar a Collection e o Ambiente
- **Importar a Collection**
1. No Postman, clique em **File > Import**
2. Vá para a aba **Upload Files**
3. Selecione o arquivo `*.postman_collection.json` do pacote baixado

- **Importar o Ambiente**
1. Clique no ícone de engrenagem lateral > **Environments**
2. Clique em **Import**
3. Selecione o arquivo `*.postman_environment.json`
4. Após importar, clique em **Set active** para ativar o ambiente

---

### Etapa 3: Vincular o Terminal

Antes de realizar qualquer transação, você precisa **vincular o terminal SmartPOS** com o sistema.

**Passo 1: Buscar QR Code**

1. No Postman, abra a requisição `obter-qrcode` da collection importada
2. Clique em **Send** para executar
3. O retorno será similar a:

```json
{
  "qrCode": "9512aad025a1ae84bef576d0e4efc275:1670dad0fc129097437f4cd90bf70154"
}
````
4. Copie o valor do campo `qrCode`

**Passo 2: Gerar imagem**

1. **[Clique aqui para acessar pagina](https://br.qr-code-generator.com/)**
2. Cole o conteúdo do `qrCode` no campo de texto
3. Gere a imagem do QR Code

---

**Passo 3: Vincular smartpos ao postman**

1. Execute o aplicativo **Connect TEF** no seu smartpos
2. Toque no ícone de **Configurações** (⚙️)
3. Selecione a opção **Vincular PDV**
4. Escaneie o **QR Code gerado no passo anterior**

---

> ✅ A partir deste ponto você já pode testar o Connect TEF via Postman.