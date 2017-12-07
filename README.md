****
<!-- vscode-markdown-toc -->
#### Table of contents
* 1. [Instalação](#Instalao)
	* 1.1. [Git](#Git)
	* 1.2. [Node](#Node)
	* 1.3. [Yarn](#Yarn)
* 2. [Build do projeto](#Builddoprojeto)
* 3. [Build para desenvolvimento](#Buildparadesenvolvimento)
* 4. [Versão online](#Versoonline)
<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->
****
# Where 2 Party - Web

##  1. <a name='Instalao'></a>Instalação

###  1.1. <a name='Git'></a>Git

Clone o repositório git, (ou use a versão disponibilizada à você).

###  1.2. <a name='Node'></a>Node

Esse projeto necessita do programa [Node](https://nodejs.org/en/), e seu gerenciador de dependências NPM.

Siga as [instruções de instalação do Node](https://nodejs.org/en/download/) (NPM  incluso) para a sua plataforma.

###  1.3. <a name='Yarn'></a>Yarn

[Yarn](https://yarnpkg.com/pt-BR/) é um gerenciador de dependências mais rápido, seguro e confiável, que tem suporte aos mesmos pacotes do NPM.

Siga as [instruções de instalação do Yarn](https://yarnpkg.com/pt-BR/docs/install) para a sua plataforma.

##  2. <a name='Builddoprojeto'></a>Build do projeto

Abra um terminal de comandos na pasta raiz do projeto.

Execute o comando `yarn --prod`

> Este comando irá instalar apenas as dependências de produção ignorando as dependências de Desenvolvimento (dependências de testes de código e formatação)

Execute o comando `yarn build:prod`

> Este comando irá compilar os arquivos projeto (JavaScript, SCSS) e organiza-los na pasta "_public_"

Execute o comando `yarn start`

> Este comando inicia o servidor e faz um deploy da aplicação

Acesse a aplicação rodando em [localhost:8080](http://localhost:8080)

##  3. <a name='Buildparadesenvolvimento'></a>Build para desenvolvimento

> Em breve arquivo com código de conduta e instruções para desenvolvimento

##  4. <a name='Versoonline'></a>Versão online

Existe uma versão desse projeto rodando online, em um servidor do [Heroku](https://www.heroku.com/)

Ela está acessível [aqui](https://where2party.herokuapp.com/)