# validacao_cep

Aplicação React para **validar CEP** e consultar dados (bairro, logradouro, UF etc.) via uma API externa.

Atualmente a UI está focada no filtro do bairro para o conjunto **“Itaqui–Bacanga”**: o CEP só é considerado válido quando o bairro retornado está na lista local.

## Tecnologias

- React 18
- Create React App
- Axios (consumo de API)
- react-router-dom (rotas)
- PrimeReact / Bootswatch / Toastr (estilo e notificações)

## Como rodar (local)

1. Entre na pasta do projeto:
   ```bash
   cd ./validacao_cep
   ```
2. Instale dependências:
   ```bash
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn start
   ```
4. Abra:
   - `http://localhost:3000`

## Como funciona

- O componente principal é `src/app/consulta_cep.js`.
- O serviço de API fica em `src/app/apiservice.js`.
- Validações executadas antes de consultar:
  - CEP **obrigatório**
  - CEP deve ter **8 dígitos**

### Endpoint consumido

A aplicação chama a API em `http://opencep.com/v1` para buscar dados por CEP:

- `GET http://opencep.com/v1/{cep}`

## Endpoints da aplicação (front-end)

- `/` → tela de consulta de CEP (rotas definidas em `src/app/rotas.js`).

## Arquivos principais

- `src/App.js` — componente raiz e inclusão de estilos
- `src/app/rotas.js` — rotas
- `src/app/consulta_cep.js` — tela de validação/consulta
- `src/app/apiservice.js` — lógica de validação e chamadas HTTP
- `src/app/informacao.js` — tabela com os dados retornados

## Testes

- `yarn test`

## Observações importantes

- A lógica de “CEP válido” depende da lista local de bairros em `obterListadeBairros()`.
- Caso a API externa mude/esteja fora do ar, as mensagens de erro são exibidas via Toastr.
