---
id: instancia-duplicada
title: Erro Address already in use?
sidebar_label: 'Erro: Address already in use?'
sidebar_position: 3
---

# Erro: Address already in use: JVM_Bind

Este erro ocorre quando a aplicação tenta iniciar e a porta necessária já está em uso. Na maioria dos casos, isso significa que **já existe uma instância do serviço em execução**, impedindo uma nova inicialização.

---

## Causa mais comum

Uma instância anterior do `connecttef.exe` (ou outro processo relacionado) está ativa e **ocupando a porta** usada pela aplicação. Isso impede que uma nova instância seja iniciada corretamente.

---

## Como resolver

### 1. Encerrar instâncias ativas no Gerenciador de Tarefas

1. Pressione `Ctrl + Shift + Esc` para abrir o **Gerenciador de Tarefas**.
2. Vá até a aba **Processos**.
3. Encerre os seguintes processos, se estiverem ativos:

   - `connecttef-service.exe`
   - **Todos os processos Java** (ex: `java.exe`, `javaw.exe`)

   > ⚠️ Certifique-se de que você está encerrando apenas os processos relacionados ao ConnectTEF. Se outros sistemas usam Java na mesma máquina, tenha atenção para não encerrá-los indevidamente.

4. Aguarde alguns segundos após encerrar os processos.

---

### 2. Iniciar o ConnectTEF novamente

1. Navegue até a pasta de instalação.
2. Execute o `connecttef.exe` normalmente.

---

## Conclusão

O erro `Address already in use: JVM_Bind` geralmente indica que uma instância anterior ainda está rodando. Encerrar os processos em execução (especialmente o `connecttef-service` e os processos Java) normalmente resolve o problema. Após isso, basta iniciar o `connecttef.exe` novamente.

Se o problema persistir mesmo após encerrar os processos, verifique com o suporte técnico se há outro software na máquina utilizando a mesma porta configurada no ConnectTEF.
