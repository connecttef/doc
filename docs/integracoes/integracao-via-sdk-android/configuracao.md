---
sidebar_position: 2
---

# Configuração

## Dependências

1. Copie os arquivos `.aar` para a pasta `libs/` do seu projeto:

```
app/libs/
├── UI-release.aar
└── client-release.aar
```

2. Adicione no `app/build.gradle`:

```groovy
implementation files('libs/UI-release.aar')
implementation files('libs/client-release.aar')

implementation "com.squareup.retrofit2:converter-gson:2.9.0"
implementation 'com.squareup.retrofit2:adapter-rxjava2:2.9.0'
implementation 'com.google.firebase:firebase-database:20.3.0'
implementation 'com.google.firebase:firebase-auth:22.3.1'
implementation 'com.google.code.gson:gson:2.11.0'
implementation 'com.google.zxing:core:3.5.2'
```

## Application

É necessário estender a classe `Application` para que o SDK possa obter os módulos necessários.

### Atualize o `AndroidManifest.xml`:

```xml
<application
        android:name=".App"/>
```

### Crie a classe `App.java`:

```java
public class App extends Application implements UIContextProvider {
    private AppContainer gerenciador;

    @Override
    public void onCreate() {
        super.onCreate();
        gerenciador = new AppContainer(this);
    }

    @Override
    public ApplicationModules provideModules() {
        return gerenciador;
    }
}
```

### ✅ Acesse o SDK no seu código:

Agora você ja pode usar o componente da seguinte forma:

```java
UIContextProvider contextProvider = (UIContextProvider) context.getApplicationContext();
SDKProvider sdkProvider = contextProvider.provideModules().sdkProvider();
```