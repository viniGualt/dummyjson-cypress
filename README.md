# Escopo do projeto

Este é um projeto de testes automatizados utilizando o [Cypress](https://www.cypress.io/), voltado para automação de testes na API DummyJSON.

## Requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node)


##  Como abrir o projeto

Siga os passos abaixo para clonar e executar o projeto:

### 1. Clone o repositório

```bash
git clone https://github.com/viniGualt/dummyjson-cypress.git

cd dummyjson-cypress
```

### 2. Instale as dependências do projeto
```bash
npm install
```

### 3. Abra a interface do Cypress
```bash
npx cypress open 
```
ou
```bash
npm test 
```

**Resultados obtidos ao testar a API:**
- Estrutura de resposta consistente e bem definida.  
- As mensagens de erro foram claras e coerentes.  
- Dados simulados permanecem fixos (não há persistência real).  

##  Falhas e Comportamentos Inesperados

Durante os testes, foram observados alguns pontos importantes:

**Ausência de persistência real**: A API é apenas uma simulação (mock), portanto, os dados não são realmente salvos ou deletados.

## Conclusão

A **API DummyJSON** é confiável para fins de testes e estudos, pois:
- Retorna respostas consistentes e rápidas.
- Possui endpoints bem estruturados e documentados.
- Permite simular operações comuns (GET, POST, PUT, DELETE) sem necessidade de autenticação.

No entanto, não é adequada para uso em produção, porque:
- Os dados **não são persistidos** (é uma API fake).  
- Retornos podem ser fixos, independentemente do conteúdo enviado.