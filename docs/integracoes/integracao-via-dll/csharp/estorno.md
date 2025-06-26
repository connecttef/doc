---
sidebar_position: 2
---
# Estorno

Esta página explica como utilizar a função `desfazerTransacao` da `ConnectTEF.dll` para realizar o estorno (cancelamento) de uma transação previamente aprovada.

## Função Utilizada

```c
const char* desfazerTransacao(const char* identificacao, const char* numeroTransacao);
```

* **`identificacao`**: string (até 10 caracteres) – Identificador único da solicitação de estorno
* **`numeroTransacao`**: string – NSU da transação original que será estornada
* **Retorno**: string JSON com o resultado da operação

---

## Exemplo

```csharp
using System;
using System.Runtime.InteropServices;
using Newtonsoft.Json.Linq;

class Program
{
    // Importa a função de estorno da DLL
    [DllImport("ConnectTEF.dll", CallingConvention = CallingConvention.Cdecl)]
    public static extern IntPtr desfazerTransacao(string identificacao, string numeroTransacao);

    // Função auxiliar para converter o ponteiro retornado em string JSON
    private static string Executar(Func<IntPtr> chamadaDLL)
    {
        IntPtr ptr = chamadaDLL();
        string json = Marshal.PtrToStringAnsi(ptr);
        Marshal.FreeHGlobal(ptr);
        return json;
    }

    static void Main()
    {
        try
        {
            // Exemplo: Estornar a transação com NSU 429213502001
            string identificacao = "estorno01";
            string nsuOriginal = "429213502001";

            Console.WriteLine("🟡 Iniciando estorno...");

            string respostaJson = Executar(() => desfazerTransacao(identificacao, nsuOriginal));
            JObject resposta = JObject.Parse(respostaJson);

            string status = resposta["statusTransacao"]?.ToString();
            string mensagem = resposta["textoEspecialOperador"]?.ToString() ?? "(sem mensagem)";

            Console.WriteLine($"🔄 Resposta da TEF: {mensagem}");

            if (status == "0")
            {
                Console.WriteLine("✅ Estorno realizado com sucesso!");
                Console.WriteLine($"📋 NSU Estornado: {resposta["numeroTransacaoCancelada"]}");
                Console.WriteLine($"📅 Data: {resposta["dataTransacaoComprovante"]}");
                Console.WriteLine($"⏱️ Hora: {resposta["horaTransacaoComprovante"]}");
            }
            else
            {
                Console.WriteLine("❌ Falha no estorno.");
                Console.WriteLine($"🔎 Código do status: {status}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"🚨 Erro inesperado: {ex.Message}");
        }
    }
}
```

---

## Exemplo de Retorno

```json
{
  "identificacao": "estorno01",
  "statusTransacao": "0",
  "numeroTransacaoCancelada": "429213502001",
  "timestampTransacaoCancelada": "1810102912",
  "dataTransacaoComprovante": "18102024",
  "horaTransacaoComprovante": "102912",
  "textoEspecialOperador": "Transação estornada com sucesso",
  "comprovante": "...",
  "nomeAdministradora": "PAYWAVE/VISA",
  "bandeiraCartao": "VISA"
}
```

## Campos Relevantes

| Campo                      | Descrição                                      |
| -------------------------- | ---------------------------------------------- |
| `statusTransacao`          | `"0"` indica estorno bem-sucedido              |
| `numeroTransacao`            | NSU da transação (referência única)          |
| `numeroTransacaoCancelada` | NSU da transação que foi estornada             |
| `dataTransacaoComprovante` | Data do estorno (formato: ddMMyyyy)            |
| `horaTransacaoComprovante` | Hora do estorno (formato: hhmmss)              |
| `textoEspecialOperador`    | Mensagem descritiva da operação                |