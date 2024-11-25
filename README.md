## Welldome

*O projeto está em fase de prototipo*

## Descrição

**Welldome** é um projeto desenvolvido com o objetivo de monitorar e visualizar dados relacionados à evolução de doenças (como a COVID-19) em diferentes estados brasileiros. A aplicação oferece gráficos interativos, filtros por estado, e uma visualização detalhada de casos e mortes em tempo real.

O projeto foi desenvolvido usando **Angular** com **PrimeNG** para os componentes da interface, e consome dados de uma API REST para exibir informações atualizadas.

---

## Recursos 🌟

Esse projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) verção 18.2.10
<br>
Usando a blilioteca do [Prime NG](https://primeng.org/)
<br>
Usa uma API Rest em node js [WelldomeAPI](https://github.com/RafaelSd0/Welldome_Back-end)


---

## Deploy 🌟

Deploy no Vercell [Welldome front end](https://welldome-front-end.vercel.app/)

---

## Pré-requisitos 🌟

Certifique-se de ter o **Node.js** e o **Angular CLI** instalados no seu computador. 

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Instalação 🚀

1. Clone o repositório:

   ```bash
   git clone https://github.com/RafaelSd0/Welldome-Front-end
2. Instale as dependências do projeto:
   ```bash
   npm install
3. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
Acesse a aplicação em http://localhost:4200.

---

## Funcionalidades 

- Visualização de Dados: A aplicação exibe dados sobre casos e mortes por estado e por mês em gráficos interativos.
- Filtragem de Estados: O usuário pode selecionar o estado para visualizar dados específicos de cada um.
- Tabela de Dados: Exibição de tabelas com as informações de casos e mortes por estado.
- Integração com API: Dados são obtidos de uma API REST que fornece informações sobre os casos de doenças.

---

## Estrutura de Componentes 

- FormComponent: Componente de formulário que permite ao usuário selecionar o estado através de um dropdown e visualizar os dados filtrados.
- GraphComponent: Componente que exibe gráficos com os dados de casos e mortes.
- Service (APIwelldomeService): Serviço responsável por realizar as chamadas à API REST e retornar os dados para os componentes.

---

## Como funciona o fluxo de dados 

- Carregamento de Dados: No componente FormComponent, os dados dos estados são carregados via API através do método carregarEstados().
- Filtragem: Após o carregamento, os dados são filtrados conforme o estado selecionado, usando o método filtrarPorEstado().
- Exibição de Gráficos: Os dados filtrados são usados para preencher gráficos com o número de casos e mortes, através do método filtrarCasosDoEstado() e filtrarMortesDoEstado().

---

## Contribuindo

Se você deseja contribuir com o projeto, por favor, siga os seguintes passos:

Fork este repositório.
- Crie uma branch para suas mudanças (git checkout -b feature/alguma-feature).
- Realize as modificações e faça commits (git commit -am 'Add alguma feature').
- Envie para a branch principal (git push origin feature/alguma-feature).
- Abra um Pull Request explicando as alterações feitas.

Obrigado por sua contribuição 🚀🚀🚀🚀
---

## Licença

Este projeto está licenciado sob a licença MIT

