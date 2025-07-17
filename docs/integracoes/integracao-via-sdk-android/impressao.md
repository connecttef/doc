---
sidebar_position: 5
---

# Impressao

## Assinatura do método

```c
void realizarImpressao(Bitmap bitmap, Callback<Bundle> callback);
````

## Parâmetros

| Parâmetro  | Tipo                                              | Descrição                                                                                 |
|------------|---------------------------------------------------|-------------------------------------------------------------------------------------------|
| `bitmap`   | `android.graphics.Bitmap`                         | Imagem a ser impressa. Pode ser um logotipo, QR Code, ou qualquer conteúdo visual. |
| `callback` | `br.com.pdvpos.connecttef.ui.interfaces.Callback` | Interface para receber atualizações: mensagens intermediárias, sucesso ou erro.  |

## Exemplo

```java
public class ConnectTEFAdapter {
    private final SDKProvider sdkProvider;

    public ConnectTEFAdapter(Context context) {
        UIContextProvider contextProvider = (UIContextProvider) context.getApplicationContext();
        this.sdkProvider = contextProvider.provideModules().sdkProvider();
    }

    public void realizarImpressao(Bitmap bitmap) {
        this.sdkProvider.realizarImpressao(bitmap, new Callback<Bundle>() {
            @Override
            public void onMensagem(String s) {
                // Mensagem para exibir ao usuário
            }

            @Override
            public void sucesso(Bundle bundle) {
                // impressão concluída
            }

            @Override
            public void error(Exception e) {
                // erro na impressão
            }
        });
    }
}
```