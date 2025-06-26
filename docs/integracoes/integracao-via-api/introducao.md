---
sidebar_position: 1
---

# Introdução

A API do **Connect TEF** foi desenvolvida com foco em **segurança, confiabilidade e integridade dos dados**, utilizando o protocolo **mTLS (Mutual TLS)** como camada principal de autenticação.

Essa abordagem permite que apenas sistemas autorizados consigam se comunicar com a API, protegendo tanto quem envia quanto quem recebe os dados.

---

### 🤔 Por que usamos mTLS?

Diferente da autenticação tradicional com tokens ou chaves de API, o **mTLS garante a verificação de identidade nas duas pontas da comunicação**:
- O **servidor** confirma que o **cliente** é legítimo.
- O **cliente** confirma que está falando com o **servidor correto**.

Isso proporciona:
- Maior **segurança** contra acessos não autorizados
- Comunicação **criptografada ponta a ponta**
- Garantia de **autenticidade e privacidade dos dados**

---

### Como funciona o mTLS na prática?

Quando um sistema tenta se conectar à API do Connect TEF:
1. O **cliente apresenta um certificado digital** (emitido e autorizado pelo Connect TEF).
2. A API **valida esse certificado** e só então aceita a comunicação.
3. Ambas as partes trocam mensagens de forma segura e autenticada.

Esse processo é conhecido como **"handshake mTLS"**, e ocorre automaticamente sempre que uma requisição é feita.

---

### O que você precisa para usar a API?

Para interagir com a API do Connect TEF, seu sistema precisa de:
- Um **certificado de cliente válido (.pfx ou .p12 ou .crt e .key)** fornecido por nossa equipe
- Um cliente HTTP (como Postman, curl ou sua aplicação) com suporte a mTLS

> ⚠️ Importante: sem um certificado válido, a comunicação com a API será recusada por questões de segurança.

> ⚠️ Caso ainda não possua seu certificado, entre em contato com nossa equipe de suporte técnico.