# Selenium + Cucumber
                
    Relatório da execução dos testes disponível em https://wailler-prata.github.io/SeleniumCucumberTest/

## Informações mínimas do projeto

Projeto criado com Selenium para a execução de testes em conjunto com Cucumber para gerenciamento e documentação dos cenários de testes.

O testes é executado em um pipeline CI no Git-Hub Actions que por sua vez executa a publicação de um relatório dos testes usando Git-Hub Pages.

## Organização do projeto

Dentro do diretório ```./features``` se encontra as features escritas em formato Gherkin que são gerenciadas pelo Cucumber. 

No diretório ```./Objects``` se encontra os PageObjects e modelos que serão usados para a construção dos testes.

Dentro do diretório ```./step_definitions``` encontrará o testes da aplicação DevFinance. Os testes estão 

## Como executar

Atualmente o teste é executado no browser Microsoft Edge em modo headless. Portanto para a execução sem alteração do fonte tem como pré requisito o browser citado acima.

Para rodar os testes, execute ```npm run run:test:cucumber```. Esse comando além de executar os testes gerará relatórios em formato Json no diretório ```./report```. 

Caso queira gerar o relatório HTML da execução do teste, após o comando anterior, execute ```npm run generate:MultipleHtml:report```. Esse comando se encarregará de converter o relatório de formato Json em um relatório HTML no mesmo diretório. 