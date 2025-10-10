---
id: sem-permissao-alterar-registros
title: Erro de Permissão ao Acessar o Registro do Windows?
sidebar_label: Erro de Permissão ao Acessar o Registro do Windows?
sidebar_position: 1
---

# Erro de Permissão ao Acessar o Registro do Windows

Se você encontrou o seguinte erro no log:

```
Could not enumerate value #1 of windows node Software\JavaSoft\Prefs\sessao/K/E/Y_/T/E/R/M/I/N/A/I/S at root 0x80000001.
```

Este erro ocorre devido à **falta de permissões** para acessar ou modificar uma chave de registro do Windows necessária para o funcionamento da aplicação. O processo Java está tentando acessar o registro via `Preferences API` e não tem permissão suficiente.

---

## Causa Provável

- **Permissões insuficientes no Registro do Windows**, normalmente em:

```
HKEY_LOCAL_MACHINE\Software\JavaSoft\Prefs\
```
- Isso pode acontecer tanto em ambientes desktop quanto em servidores, especialmente se a aplicação estiver rodando sob uma conta com permissões limitadas.

---

## Como Resolver

### 1. Verifique e ajuste permissões da chave de registro

1. Abra o **Editor de Registro (`regedit`)**.
2. Navegue até a chave mencionada no erro, como:

```
HKEY_LOCAL_MACHINE\Software\JavaSoft\Prefs
````

3. Clique com o botão direito na chave → **Permissões...**
4. Adicione o usuário (ou grupo) que está executando a aplicação e conceda **controle total** ou permissões adequadas.
5. Salve e feche o regedit.

---

### ⚠️ Observação para Windows Server

Em ambientes com **Windows Server**, mesmo contas administrativas podem não ter permissão para acessar ou editar certas chaves protegidas do registro. Nesses casos, é necessário abrir o Editor de Registro como **SYSTEM** para conseguir ajustar as permissões corretamente.

#### Como fazer isso com PsExec:

1. **Baixe o PsExec** da Microsoft (Sysinternals):  
[https://learn.microsoft.com/en-us/sysinternals/downloads/psexec](https://learn.microsoft.com/en-us/sysinternals/downloads/psexec)

2. Extraia e abra um **Prompt de Comando com privilégios de administrador**.

3. Execute o seguinte comando:
```bash
psexec -i -s regedit.exe
````

Isso abrirá o Regedit como usuário **SYSTEM**, com permissões completas sobre o registro.

4. Navegue até a chave mencionada e siga o mesmo procedimento de ajuste de permissões.

---

## Conclusão

Esse erro está diretamente relacionado à falta de permissão para acesso ao registro do Windows. Em sistemas Windows Server, pode ser necessário abrir o Editor de Registro como `SYSTEM` (usando `PsExec`) para conseguir fazer alterações. Ajustar corretamente as permissões da chave em questão deve resolver o problema de forma definitiva.