---
sidebar_position: 2
---

# Pagamento

**Passo 1: A Automação Comercial gera o arquivo `C:\TEF_DIAL\REQ\IntPos.001`**

```txt
000-000 = CRT
001-000 = 0
003-000 = 200
999-999 = 0
```

> 💡Você pode enviar o campo 011-000 com a forma de pagamento desejada.
>
>  [**Consultar tabela**](./introducao.md)

**Pass 2: O Gerenciador criará o arquivo `C:\TEF_DIAL\RESP\IntPos.Sts`** 

```txt
000-000 = CRT
001-000 = 0
999-999 = 0
```
> 🚨Se não houver resposta em até 7 segundos, o Gerenciador não está ativo.

**Passo 3: O Gerenciador exibirá a tela de seleção da rede desejada.**

![alt text](<Quatidade de parcelas.png>)

**Passo 4: Após a operação, o Gerenciador envia resposta para `C:\TEF_DIAL\RESP\IntPos.001`.**

Exemplo: Operação Bem-Sucedida

```txt
000-000 = CRT
001-000 = 1369582303
003-000 = 200
009-000 = 0
010-000 = STONE
011-000 = 20
012-000 = 39241081811116
013-000 = 811116
015-000 = 1810152244
018-000 = 1
022-000 = 18102024
023-000 = 152244
027-000 = 753|811116
028-000 = 15
029-001 = "       INTEGRACAO PARTNER PROGRAM        "
029-002 = "           89.324.856/0001-26            "
029-003 = "-----------------------------------------"
029-004 = "              VIA CLIENTE                "
029-005 = "-----------------------------------------"
029-006 = "REDE                                STONE"
029-007 = "VALOR                                2,00"
029-008 = "FORMA PAGAMENTO            DÉBITO À VISTA"
029-009 = "CARTAO                     498408****5491"
029-010 = "ADMINISTRADORA               PAYWAVE/VISA"
029-011 = "NSU                        39241081811116"
029-012 = "AUT                                811116"
029-013 = "-----------------------------------------"
029-014 = "            PDVPOS - TEF                 "
029-015 = "         18/10/2024 15:22:44             "
040-000 = PAYWAVE/VISA
400-001 = 89.324.856/0001-26
400-002 = VISA
999-999 = 0
```

Exemplo: Operação Mal-Sucedida

```
000-000 = CRT
001-000 = 1369582303
003-000 = 200
009-000 = 1
010-000 = STONE
028-000 = 0
030-000 = OPERAÇÃO CANCELADA
999-999 = 0
```

>**⚠️ Observação**
>Se não houver comprovante ou a impressão for realizada com sucesso a automação deve retornar o status para
`C:\TEF_DIAL\REQ\IntPos.001`
>```
>000-000 = CNF
>001-000 = 1369582303
>010-000 = STONE
>012-000 = 39241081811116
>027-000 = 753|811116
>999-999 = 0
>```
>Se houver comprovante e houver falha na impressão, a automação deve retornar o status para
`C:\TEF_DIAL\REQ\IntPos.001.`
>```
>000-000 = NCN
>001-000 = 1369582303
>999-999 = 0
>```