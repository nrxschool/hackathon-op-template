# Plataforma de Registros para Competições Online

## Introdução

Bem-vindo à nossa plataforma de registros para competições online! Este projeto foi criado com o objetivo de proporcionar uma experiência confiável e transparente para equipes, jurados e supervisores participarem e acompanharem competições online.

## Visão Geral

### Descrição
Nossa plataforma oferece uma solução abrangente para organizar, documentar e acompanhar competições online em diversas áreas, desde eventos esportivos até hackathons e competições acadêmicas.

### Objetivo
Nosso principal objetivo é garantir a integridade das informações e resultados das competições, promovendo a transparência e a equidade em todas as etapas do processo.

## Funcionalidades Principais

### 1. Gestão de Competições
- Criação e configuração flexível de competições, incluindo detalhes sobre participantes, categorias, datas e regras.
- Interface intuitiva para administradores definirem e ajustarem as configurações das competições conforme necessário.

### 2. Registro de Atividades
- Registro detalhado de todas as atividades realizadas durante as competições, como submissões, avaliações e pontuações.
- Possibilidade de acompanhar o progresso das equipes e indivíduos ao longo da competição em tempo real.

### 3. Transparência e Confiança
- Implementação de medidas robustas para garantir a transparência e a confiabilidade dos registros, incluindo trilhas de auditoria e autenticação de usuários.
- Disponibilização de relatórios e estatísticas para análise e revisão pós-competição.

### 4. Suporte Multidisciplinar
- Suporte para uma ampla variedade de competições, abrangendo diferentes áreas, desde esportes até ciência e tecnologia.
- Personalização de campos e funcionalidades para atender às necessidades específicas de cada tipo de competição.

## Instalação e Configuração

### Requisitos do Sistema
- foundryup --version nightly (forge 0.2.0, anvil 0.2.0, cast 0.2.0, chisel 0.2.0)
- solidity >= 0.8.13
- Docker Desktop latest (4.28.0)

### Instruções do projeto
-  Criar todos os serviços e subir o projeto localmente (roda na blockchain local do foundry)
Rodar o seguinte comando no terminal dentro do diretório do projeto:
docker compose up

- Parar todos os serviços em execução
Rodar o seguinte comando no terminal dentro do diretório do projeto:
docker compose stop

- Iniciar todos os serviços que já foram criados anteriormente
Rodar o seguinte comando no terminal dentro do diretório do projeto:
docker compose start

- Fazer deploy do smart contract na blockchain de teste da Optimism
Rodar o seguinte comando no terminal dentro da pasta /smartcontracts
./deploy-on-testnet.sh

 - Caso precisar de permissão para rodar o script .sh no terminal do linux, rodar o seguinte comando no terminal:
chmod +x ./deploy-on-testnet.sh

## Utilização

### Exemplos de Uso
1. Criar uma nova competição.
2. Registrar atividades (submissões, avaliações, etc.).
3. Visualizar resultados e estatísticas.

### Demonstração
<table align="center">
  <tr>
     <td align="center">
  <img src="https://i.imgur.com/b7IpmGk.png" alt="imgur"/>
  <img src="https://i.imgur.com/EJtuvsa.png" alt="imgur"/>
  <img src="https://i.imgur.com/EyuSvxC.png" alt="imgur"/>

        <sub>
        </sub>
      </a>
   

## Contribuição

### Como Contribuir
- Faça um fork do repositório.
- Crie uma branch para a sua contribuição: `git checkout -b feature/nome-da-feature`
- Faça suas alterações e commit: `git commit -m "Descrição da alteração"`
- Envie um pull request para a branch principal.

### Diretrizes de Contribuição
- Siga as diretrizes de estilo de código.
- Adicione testes para suas alterações, se aplicável.
- Documente as alterações em arquivos README, se necessário.

### Tarefas Pendentes
- Implementar sistema de notificações por e-mail.
- Melhorar a interface de usuário para dispositivos móveis.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

## Contato

Para obter mais informações ou reportar problemas, entre em contato através do e-mail [seu-email@example.com](mailto:seu-email@example.com).

## Reconhecimentos

Agradecemos a todos os contribuidores e apoiadores que tornaram este projeto possível.

## Histórico de Alterações

### Versão 1.0.0 (dd/mm/aaaa)
- Lançamento inicial do projeto.

## Suporte

Para obter suporte técnico ou tirar dúvidas, consulte a [documentação oficial](link-para-documentacao) ou visite nosso [fórum de discussão](link-para-forum).

## FAQ (Perguntas Frequentes)

### 1. Como posso colaborar com o projeto?
Você pode colaborar contribuindo com código, relatórios de bugs ou sugestões de melhorias.

### 2. Este projeto é gratuito?
Sim, este projeto é de código aberto e gratuito para uso sob a licença MIT.
