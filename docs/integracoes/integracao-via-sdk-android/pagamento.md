---
sidebar_position: 3
---

# Pagamento

## Assinatura do método

```c
void realizarPagamento(Bundle bundle, Callback<Bundle> callback);
````

## Parâmetros

| Parâmetro  | Tipo                                              | Descrição                                                                                    |
|------------|---------------------------------------------------|----------------------------------------------------------------------------------------------|
| `bundle`   | `android.os.Bundle`                               | Objeto que contém os dados da transação, como valor, forma de pagamento, parcelas, etc.      |
| `callback` | `br.com.pdvpos.connecttef.ui.interfaces.Callback` | Interface para receber atualizações da transação: mensagens intermediárias, sucesso ou erro. |

**Parâmetros do `bundle`**

| Campo                 | Tipo      | Obrigatório                 | Descrição                                                |
|-----------------------|-----------|-----------------------------|----------------------------------------------------------|
| `identificacao`       | `string`  | **Sim(*)**                  | ID único da transação no seu sistema.                    |
| `valorTotal`          | `decimal` | **Sim(Pagamento, Estorno)** | Valor total da venda. Ex: `29.9` para R$29,90            |
| `tipoTransacao`       | `string`  | **Sim(Estorno)**            | Código da transação (veja tabela abaixo).                |
| `quantidadeParcelas`  | `string`  | Não                         | Nº de parcelas. Ex: `"1"`.                               |
| `imprimirComprovante` | `bool`    | Não                         | Imprime comprovante no POS.                              |
| `numeroTransacao`     | `string`  | **Sim(Estorno)**            | Número único da transação fornecido pela adquirente.     |
| `finalizacao`         | `string`  | **Sim(Estorno)**            | Finalização obtida na resposta ao realizar um pagamento. |

## Parâmetros da resposta

| Campo                         | Tipo    | Descrição                                              |
|-------------------------------|---------|--------------------------------------------------------|
| `identificacao`               | string  | Identificador único da operação                        |
| `valorTotal`                  | string  | Valor total da transação                               |
| `statusTransacao`             | string  | "0" = sucesso; outros valores indicam falha            |
| `nomeRede`                    | string  | Nome da adquirente                                     |
| `tipoTransacao`               | string  | Tipo da transação                                      |
| `numeroTransacao`             | string  | Número sequencial da transação                         |
| `codigoAutorizacaoTransacao`  | string  | Código de autorização fornecido pela adquirente        |
| `quantidadeParcelas`          | string  | Número de parcelas                                     |
| `dataTransacaoComprovante`    | string  | Data da transação no comprovante (formato: ddMMyyyy)   |
| `horaTransacaoComprovante`    | string  | Hora da transação no comprovante (formato: hhmmss)     |
| `numeroTransacaoCancelada`    | string  | Número da transação que foi cancelada                  |
| `timestampTransacaoCancelada` | string  | Timestamp da transação cancelada (formato: ddMMhhmmss) |
| `finalizacao`                 | string  | Dados técnicos da finalização da transação             |
| `quantidadeLinhasComprovante` | string  | Quantidade de linhas no comprovante                    |
| `textoEspecialOperador`       | string  | Mensagem especial para exibição ao operador            |
| `numeroSerieTerminal`         | string  | Número de série do terminal (Smart POS)                |
| `executada`                   | boolean | Indica se a operação foi processada com sucesso        |
| `cnpj`                        | string  | CNPJ do estabelecimento                                |
| `bandeiraCartao`              | string  | Bandeira do cartão utilizado (ex: MASTERCARD)          |

## Exemplo

```java
public class ConnectTEFAdapter {
    private final SDKProvider sdkProvider;

    public ConnectTEFAdapter(Context context) {
        UIContextProvider contextProvider = (UIContextProvider) context.getApplicationContext();
        this.sdkProvider = contextProvider.provideModules().sdkProvider();
    }

    public void realizarPagamento() {
        Bundle bundle = new Bundle();
        bundle.putString("identificacao", "abc123");
        bundle.putDouble("valorTotal", 29.90);
        bundle.putString("tipoTransacao", "10");
        bundle.putBoolean("imprimirComprovante", true);
        bundle.putInt("quantidadeParcelas", 1);

        this.sdkProvider.realizarPagamento(bundle, new Callback<Bundle>() {
            @Override
            public void onMensagem(String mensagem) {
                // Mensagem para exibir ao usuário
            }

            @Override
            public void sucesso(Bundle response) {
                // Bundle com os dados da transação
            }

            @Override
            public void error(Exception exception) {
                // Falha ao realizar o pagamento
            }
        });
    }
}
```