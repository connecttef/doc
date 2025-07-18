---
sidebar_position: 3
---

# Pagamento

## Exemplo de chamada

```java
public class ConnectTEFAdapter {

    public ConnectTEFAdapter() {
    }

    public void realizarPagamento(Activity activity, int requestCode) {
        Intent intent = new Intent();
        intent.setComponent(new ComponentName("br.com.pdvpos.connecttef.gerenciador", "br.com.pdvpos.connecttef.gerenciador.MainActivity"));

        if (intent.resolveActivity(getPackageManager()) != null) {
            intent.putExtra("identificacao", "abc123");
            intent.putExtra("valorTotal", 29.90);
            intent.putExtra("tipoTransacao", "10");
            intent.putExtra("imprimirComprovante", true);
            intent.putExtra("quantidadeParcelas", 1);
            activity.startActivityForResult(intent, requestCode);
        } else {
            Toast.makeText(this, "Aplicativo externo não encontrado.", Toast.LENGTH_SHORT).show();
        }
    }
}
```

## Como validar a resposta

```java
public class MainActivity extends AppCompatActivity {

    private static final String TAG = "ConnectTEF";

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (data == null) {
            Log.w(TAG, "Operação cancelada");
            return;
        }

        Bundle bundle = data.getExtras();
        if (bundle == null) {
            Log.w(TAG, "Operação cancelada");
            return;
        }

        if (resultCode != RESULT_OK) {
            String mensagemErro = bundle.getString("textoEspecialOperador");
            if (mensagemErro != null) {
                Log.w(TAG, "Mensagem de erro: " + mensagemErro);
            } else {
                Log.w(TAG, "Erro na operação, mas sem mensagem específica.");
            }
            return;
        }
        
        for (String key : bundle.keySet()) {
            Object value = bundle.get(key);
            Log.d(TAG, key + " => " + value);
        }
    }
}
```

## **Parâmetros do `bundle`**

| Campo                 | Tipo      | Obrigatório | Descrição                                                |
|-----------------------|-----------|-------------|----------------------------------------------------------|
| `identificacao`       | `string`  | **Sim**     | ID único da transação no seu sistema.                    |
| `valorTotal`          | `decimal` | **Sim**     | Valor total da venda. Ex: `29.9` para R$29,90            |
| `tipoTransacao`       | `string`  | Não         | Código da transação (veja tabela abaixo).                |
| `quantidadeParcelas`  | `string`  | Não         | Nº de parcelas. Ex: `"1"`.                               |
| `imprimirComprovante` | `bool`    | Não         | Imprime comprovante no POS.                              |
| `numeroTransacao`     | `string`  | Não         | Número único da transação fornecido pela adquirente.     |
| `finalizacao`         | `string`  | Não         | Finalização obtida na resposta ao realizar um pagamento. |

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