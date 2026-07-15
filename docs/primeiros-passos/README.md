---
sidebar_position: 1
sidebar_label: 🧪 Ambiente Local de Testes
slug: /primeiros-passos/
---

# Ambiente Local de Testes

Este ambiente permite desenvolver e testar integrações utilizando um emulador Android, sem a necessidade de um SmartPOS físico.

Ele foi criado exclusivamente para desenvolvimento e aprendizado da plataforma ConnectTEF.

> ⏱️ **Tempo estimado:** 10 minutos
>
> Ao final deste guia você terá:
>
> - ✅ Um ambiente local configurado;
> - ✅ O ConnectTEF executando no emulador Android;
> - ✅ Sua aplicação pronta para consumir a API Local SmartPOS;
> - ✅ Um exemplo funcional em JavaScript para acelerar sua integração;
> - ✅ Tudo pronto para realizar sua primeira operação.

---

## O que é

O Ambiente Local de Testes permite que você desenvolva e valide sua integração antes de utilizar um SmartPOS físico.

Ele simula o ambiente de execução do ConnectTEF através de um emulador Android, reduzindo o tempo de desenvolvimento e facilitando os primeiros testes da integração.

---

## Quando utilizar

- Primeira integração;
- Desenvolvimento local;
- Testes da API Local;
- Validação da integração do ERP.

---

## Como funciona

```text
ERP / PDV
    ↓
API Local SmartPOS
    ↓
Emulador Android
    ↓
ConnectTEF
    ↓
Rebatedor
    ↓
Resposta para o PDV
```

---

## Recursos para Desenvolvedores

Para acelerar o desenvolvimento da sua integração, disponibilizamos alguns recursos que podem ser utilizados como referência durante a implementação.

### Exemplo de Integração (JavaScript)

Disponibilizamos um projeto de exemplo demonstrando uma integração completa com a **API Local SmartPOS** utilizando **JavaScript (Node.js)**.

O exemplo implementa todo o fluxo básico de uma operação, incluindo:

- Criação da operação;
- Consulta do status da transação;
- Acompanhamento da execução;
- Tratamento do resultado da operação.

Esse exemplo pode ser utilizado como referência para implementar a integração em outras linguagens, como Delphi, C#, Java, PHP e Python.

> 💡 **Dica**
>
> Novos exemplos de integração serão disponibilizados continuamente para diferentes linguagens e plataformas.

### Downloads

| Recurso | Download |
| --- | --- |
| Exemplo JavaScript (Node.js) | [📥 javascript-api-local-smartpos.js](https://arquivos.pdvpos.com.br/connecttef/primeiros-passos/examples/javascript-api-local-smartpos.js) |

---

## Passo 1 - Instalar um emulador Android

Recomendamos o 👉 [BlueStacks](https://www.bluestacks.com/download.html) como emulador para este ambiente.

---

## Passo 2 - Instalar os aplicativos

Instale os seguintes aplicativos no emulador:

- ConnectTEF.apk
- Rebatedor.apk

### Downloads

| Aplicativo | Download |
| --- | --- |
| ConnectTEF.apk | [Baixar APK](https://arquivos.pdvpos.com.br/connecttef/primeiros-passos/ConnectTEF.apk) |
| Rebatedor.apk | [Baixar APK](https://arquivos.pdvpos.com.br/connecttef/primeiros-passos/Rebatedor.apk) |

---

## Passo 3 - Ativar o ConnectTEF

> ⚠️ **Atenção**
>
> O CNPJ informado deve ser o CNPJ disponibilizado para este ambiente de testes.
>
> Não utilize o CNPJ da revenda, da software house ou do cliente final.

Preencha os campos abaixo na ativação:

- **CNPJ:** 42407441000152
- **Código de ativação:** 055173

---

## Passo 4 - Primeira operação

Com o ambiente configurado, você já pode realizar sua primeira operação utilizando a API Local SmartPOS.

Siga o guia:

➡️ [Integração via API Local SmartPOS](../integracoes/integracao-via-api-local-pos/introducao.md)

---

## Downloads

### BlueStacks

- [Download oficial](https://www.bluestacks.com/download.html)

### ConnectTEF.apk

- [Baixar APK](https://arquivos.pdvpos.com.br/connecttef/primeiros-passos/ConnectTEF.apk)

### Rebatedor.apk

- [Baixar APK](https://arquivos.pdvpos.com.br/connecttef/primeiros-passos/Rebatedor.apk)

---

## Perguntas Frequentes

### Preciso possuir um SmartPOS?

Não. Este ambiente foi desenvolvido justamente para permitir que você implemente e valide sua integração utilizando um emulador Android.

### O ambiente realiza pagamentos reais?

Não. As operações executadas possuem finalidade exclusiva de desenvolvimento e validação da integração.

### Posso utilizar outro emulador?

Sim. Embora recomendemos o BlueStacks, outros emuladores Android compatíveis também podem ser utilizados.

### Preciso de internet?

A integração via **API Local** ocorre localmente entre sua aplicação e o ConnectTEF executado no emulador Android.

No entanto, o aplicativo ConnectTEF pode necessitar de conexão com a internet para realizar sua ativação inicial e acessar os serviços necessários durante o ambiente de desenvolvimento.

Após a configuração do ambiente, a comunicação entre o ERP e a API Local continua sendo realizada localmente.

### Posso utilizar esse ambiente para colocar meu sistema em produção?

Não.

O **Ambiente Local de Testes** foi desenvolvido para facilitar o desenvolvimento e a validação inicial da integração utilizando um emulador Android.

Após concluir os testes locais, recomendamos seguir este fluxo:

1. Escolha o modelo de integração mais adequado para sua aplicação.
2. Implemente a integração em seu ERP ou sistema.
3. Valide o funcionamento utilizando o Ambiente Local de Testes.
4. Realize os testes finais em um SmartPOS compatível com o ambiente real de utilização.
5. Após validar sua integração, seu sistema estará pronto para utilização em produção.

O Ambiente Local de Testes é uma ferramenta para desenvolvimento e validação da integração, não substituindo os testes em um equipamento físico antes da implantação em clientes.

---

## Próximos Passos

Agora que seu ambiente está configurado, escolha o tipo de integração que melhor se adapta ao seu sistema:

- [🌐 Sistemas WEB e SaaS](../integracoes/integracao-via-api/introducao.md)
- [🖥 Sistemas Desktop](../integracoes/integracao-via-api-local-pos/introducao.md)
- [🔄 Outras Formas de Integração](../integracoes/integracao-via-intent-android/introducao.md)