---
id: sem-comunicacao-via-wifi
title: Problema de Comunicação entre Terminal e Gerenciador padrão?
sidebar_label: Problema de Comunicação entre Terminal e Gerenciador padrão?
sidebar_position: 2
---

# Problema de Comunicação entre Terminal e Gerenciador padrão

Se após configurar o IP do terminal e do Gerenciador padrão você ainda está enfrentando problemas de comunicação, o motivo mais comum está relacionado à rede em que os dispositivos estão conectados.

## Possíveis Causas

1. **Redes Wi-Fi Diferentes**: O terminal e o Gerenciador padrão podem estar conectados a redes Wi-Fi distintas, o que impede que eles se "enxerguem" e se comuniquem corretamente. Ambos precisam estar na mesma rede para que a comunicação funcione.

2. **Faixa de IP Diferente**: Mesmo estando na mesma rede, se o terminal e o Gerenciador padrão estiverem em faixas de IP diferentes, a comunicação também não será possível. Isso ocorre porque dispositivos em faixas diferentes de IP não conseguem se conectar diretamente.

3. **Firewall Bloqueando a Comunicação**: O firewall (tanto no terminal quanto no PDV) pode estar bloqueando a comunicação entre os dispositivos. Certifique-se de que as configurações de firewall permitem a comunicação TCP.

## O que você deve verificar

- **Verifique se ambos estão na mesma rede Wi-Fi**: Certifique-se de que tanto o terminal quanto o Gerenciador padrão estão conectados à mesma rede. Se eles estiverem em redes diferentes, a comunicação entre eles não será possível.
  
- **Verifique a faixa de IP de ambos os dispositivos**: Ambos os dispositivos precisam estar na mesma faixa de IP para se comunicarem. Se os IPs estiverem em faixas diferentes, eles não conseguirão se conectar diretamente, mesmo que estejam na mesma rede física.

- **Verifique as configurações de firewall**: O firewall do terminal ou do Windows pode estar bloqueando as portas necessárias para a comunicação entre eles. Certifique-se de que o firewall está configurado para permitir a comunicação entre os dois dispositivos. Se necessário, consulte o suporte técnico para ajustes nas regras do firewall.

### Como proceder

Caso o problema seja identificado em um desses pontos, será necessário ajustar as configurações para garantir que ambos os dispositivos estejam na mesma rede e faixa de IP.

Se você não souber como ajustar essas configurações, entre em contato com o suporte técnico ou o responsável pela rede para que ele possa ajudar a resolver o problema.

## Conclusão

Problemas de comunicação entre o terminal e o Gerenciador padrão geralmente ocorrem devido à configuração inadequada da rede (Wi-Fi ou faixa de IP). Verifique essas configurações e, caso necessário, peça ajuda ao suporte técnico para garantir que ambos os dispositivos possam se comunicar corretamente.
