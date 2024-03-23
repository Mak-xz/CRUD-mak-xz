MD -> Markdown. Geralmente utilizado para documentar a API.

# CRUD:

É uma abreviação de Create (criar), Read (ler), Update (atualizar) e Delete (deletar).

1. POST -> Seria o "C" do CRUD, por que, ele é utilizado para a criação de um novo recurso.
2. GET -> Seria o "R" do CRUD, por que, ele é utilizado para busca de um ou multiplos recursos.
3. PUT/PATCH -> Seria o "U" do CRUD, por que, ele é utilizado para a atualização de um recurso.
   3.1. PUT -> É utilizado para a atualização COMPLETA do recurso. Todos os campos do recurso são **obrigatórios**.
   3.2. PATCH -> É utilizado para atualização PARCIAL do recuso. Todos os campos do recurso são **opcionais**.
4. DELETE -> Seria o "D" do CRUDO, por que, ele é utilizado para a deleção de um recuso.

# Observações da API Scraplex.

Todas as rotas de `/scrap`, exceto o GET, precisam de autenticação.

## POST:

Nem todos os campos precisam ser enviados em um formulário, alguns desses campos podemos pegar internamento na aplicação.
