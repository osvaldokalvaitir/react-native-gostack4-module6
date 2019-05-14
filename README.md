# React Native - Módulo 6

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-modulo6/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-modulo6.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-modulo6.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-modulo6.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-modulo6.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-modulo6.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-modulo6.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação Gitmark usando React Native, ESLint, EditorConfig, Babel Root Import, Babel Module Resolver, React Navigation, Color, Redux, Redux-Saga, Ducks e Reactotron.

Obs: Este repositório é uma cópia do [React Native - Módulo 3](https://github.com/osvaldokalvaitir/react-native-modulo3) para realização de deploy e entrega contínua.

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Principal](#principal)

  - [Favoritos](#favoritos)

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Observações](#observações)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

  - [APIs](#apis)

  - [Ferramentas](#ferramentas)

## Capturas de Tela

### Principal

![Main](/assets/main.png)
Esta é a primeira tela, onde deve ser informado um usuário e um repositório existente do GitHub.

### Favoritos

![Favorites](/assets/favorites.png)
Nesta tela estão todos os repositórios do GitHub favoritados pelo usuário, podendo também voltar para a tela principal.

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga a Execução de Projeto.

### Observações

Para configurar o ícone, nome da aplicação, splashscreen, id do pacote dentro do iOS, execute os seguintes procedimentos:

- Clique com o botão direito na pasta `ios` e selecione `Reveal in Finder`

- Encontre o arquivo de extensão `xcodeproj` e abra-o

- Ao clicar no ícone de menu e em `Targets`, em todos os targets abaixo, na seção `Signing`, terá que ativar a opção `Automatically manage signing` e selecionar o `Team` desejado

- Em `Images.xcassets` e em `AppIcon`, coloque todas as imagens referentes ao texto descritivo

- Em `LaunchScreen.xib`, faça a splashscreen como desejado

- Clique no arquivo do `xcodeproj` e aparecerá a guia `General`

- Na guia `General`:

  - Em `Display Name`, dê um nome para a aplicação

  - Em `Bundle Identifier`, dê um nome ao pacote

  - Em `Deployment Info`, nas opções de `Device Orientation`, é possível escolher apenas a opção `Portrait`, desabilitando as demais

## Utilizados no Projeto

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [Babel Root Import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-plugin-root-import.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [color](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/color.md)

- [Ducks](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/ducks.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [eslint-import-resolver-babel-plugin-root-import](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-import-resolver-babel-plugin-root-import.md)

- [prop-types](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prop-types.md)

- [React Native Gesture Handler](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-gesture-handler.md)

- [React Native Module for CodePush](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-code-push.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [React Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-redux.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [reactotron-react-native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-native.md)

- [reactotron-redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux.md)

- [reactotron-redux-saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-redux-saga.md)

- [Redux](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux.md)

- [Redux-Saga](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/redux-saga.md)

### APIs

- **[GitHub](https://api.github.com)**

  - **Rotas**

    - Usuários

      - Busca dados de um repositório pertencente a um usuário

### Ferramentas

- [Ape Tools](https://github.com/osvaldokalvaitir/projects-settings/blob/master/icon/apetools.md)

- [Reactotron](https://github.com/osvaldokalvaitir/projects-settings/blob/master/inspector/reactotron.md)
