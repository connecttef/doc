---
sidebar_position: 3
---

# Estorno

**Passo 1: A Automação Comercial gera o arquivo `C:\TEF_DIAL\REQ\IntPos.001`**

```txt
000-000 = CNC
001-000 = 141337877
003-000 = 200
004-000 = 0
010-000 = STONE
012-000 = 39241081811116
022-000 = 18102024
023-000 = 1522
999-999 = 0
```

**Pass 2: O Gerenciador criará o arquivo `C:\TEF_DIAL\RESP\IntPos.Sts`** 

```txt
000-000 = CNC
001-000 = 141337877
027-000 = 753|811116
999-999 = 0
```
> 🚨Se não houver resposta em até 7 segundos, o Gerenciador não está ativo.

**Passo 3: O Gerenciador exibe uma interface de processamento**

![alt text](<Modal%20Exemplo%20Pequeno%20com%20ilustração%20com%20botões.png>)

![alt text](<Modal Exemplo Pequeno com ilustração com botões (1).png>)

**Passo 4: Após a operação, o Gerenciador envia resposta para `C:\TEF_DIAL\RESP\IntPos.001`.**

Exemplo: Operação Bem-Sucedida

```txt
000-000 = CNC
001-000 = 141337877
003-000 = 200
009-000 = 0
010-000 = STONE
011-000 = 20
012-000 = 39241081811116
015-000 = 1810152244
022-000 = 18102024
023-000 = 152244
025-000 = 39241081811116
026-000 = 1810152244
027-000 = 753|811116
028-000 = 000
400-001 = 89.324.856/0001-26
400-002 = VISA
999-999 = 0
```

Exemplo: Operação Mal-Sucedida

```
000-000 = CNC
001-000 = 141337877
003-000 = 200
009-000 = 1
010-000 = STONE
011-000 = 20
025-000 = 39241081811116
026-000 = 1810152244
028-000 = 000
030-000 = OPERACAO CANCELADA
400-001 = 89.324.856/0001-26
400-002 = VISA
999-999 = 0
```