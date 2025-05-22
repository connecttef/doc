---
sidebar_position: 1
---
# Pagamento

Este exemplo demonstra como integrar a função `executarTransacao` da `ConnectTEF.dll` em um projeto C# para realizar um pagamento TEF.

## Pré-requisitos

* `ConnectTEF.dll` disponível no diretório da aplicação
* Projeto C# com suporte a chamadas nativas (`System.Runtime.InteropServices`)
* Pacote [Newtonsoft.Json](https://www.nuget.org/packages/Newtonsoft.Json/) instalado para manipular o JSON

## Função Utilizada

```c
const char* executarTransacao(const char* identificacao, int valor_total);
```

* **`identificacao`**: ID único da operação (máximo 10 caracteres)
* **`valor_total`**: valor da transação em centavos (Ex: R\$ 10,00 → `1000`)
* **Retorno**: string JSON com o resultado da operação

---

## Exemplo de Código em C\#

```csharp
using System;
using System.Runtime.InteropServices;
using Newtonsoft.Json.Linq;

class Program
{
    // Importa a função da DLL
    [DllImport("ConnectTEF.dll", CallingConvention = CallingConvention.Cdecl)]
    public static extern IntPtr executarTransacao(string identificacao, int valor_total);

    // Função auxiliar para converter o ponteiro retornado em string JSON
    private static string Executar(Func<IntPtr> chamadaDLL)
    {
        IntPtr ptr = chamadaDLL();
        string json = Marshal.PtrToStringAnsi(ptr);

        // Libera a memória alocada pela DLL (se aplicável)
        Marshal.FreeHGlobal(ptr);

        return json;
    }

    static void Main()
    {
        try
        {
            string identificacao = "abc123"; // ID único da transação
            int valor = 1000; // Valor em centavos (R$10,00)

            Console.WriteLine("🟡 Iniciando pagamento...");

            string respostaJson = Executar(() => executarTransacao(identificacao, valor));
            JObject resposta = JObject.Parse(respostaJson);

            string status = resposta["statusTransacao"]?.ToString();
            string mensagem = resposta["textoEspecialOperador"]?.ToString() ?? "(sem mensagem)";

            Console.WriteLine($"🔄 Resposta da TEF: {mensagem}");

            if (status == "0")
            {
                Console.WriteLine("✅ Pagamento realizado com sucesso!");
                Console.WriteLine($"🧾 Comprovante: {resposta["comprovante"]?.ToString()?.Substring(0, 40)}...");
                Console.WriteLine($"📋 NSU: {resposta["numeroTransacao"]}");
                Console.WriteLine($"🏦 Operadora: {resposta["nomeAdministradora"]}");
                Console.WriteLine($"💳 Bandeira: {resposta["bandeiraCartao"]}");
            }
            else
            {
                Console.WriteLine("❌ Falha na transação.");
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

## 📥 Exemplo de Retorno JSON (Sucesso)

```json
{
  "identificacao": "abc123",
  "valorTotal": "1000",
  "statusTransacao": "0",
  "nomeRede": "PAGSEGURO",
  "tipoTransacao": "20",
  "numeroTransacao": "429213502001",
  "codigoAutorizacaoTransacao": "226729",
  "timestampTransacaoHost": "1810102912",
  "quantidadeParcelas": "1",
  "dataTransacaoComprovante": "18102024",
  "horaTransacaoComprovante": "102912",
  "nomeAdministradora": "PAYWAVE/VISA",
  "bandeiraCartao": "VISA",
  "razaoSocial": "PADARIA FAMILIA DOCES E SALGADOS",
  "cnpj": "63500440000128",
  "comprovante": "...",
  "quantidadeLinhasComprovante": "15",
  "finalizacao": "100C7E7E58|DD7AA030DC49419389D01CDC15566FF7"
}
```

### 🔍 Campos Importantes

| Campo                        | Descrição                                               |
| ---------------------------- | ------------------------------------------------------- |
| `statusTransacao`            | `"0"` indica sucesso; qualquer outro valor indica falha |
| `numeroTransacao`            | NSU da transação (referência única)                     |
| `codigoAutorizacaoTransacao` | Código de autorização da operadora                      |
| `bandeiraCartao`             | Ex: VISA, MASTERCARD                                    |