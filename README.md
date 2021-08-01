# zcinema-users-microsservice

## Depedências para inicializar o projeto
* Postgres
* Node.js

Neste caso, usaremos o [yarn ](https://yarnpkg.com/) como gerenciador de pacotes do Node.js. Estamos assumindo <br/> que o Postgres esteja ativo na porta 5432 da máquina local ou container (Docker).
## Passo a passo
* No diretório raiz do projeto execute:
```
yarn
```

* Em seguida, criaremos o banco:
```
yarn sequelize db:create cinema-db
```
* Agora, executaremos as migrations:
```
yarn sequelize db:migrate
```
* Por fim, executaremos a aplicação:
```
yarn start
```
Pronto! Aplicação deve estar rodando 100% agora.


## Endpoints

### Usuários

* Cadatrar usuário:
    * Endpoint (POST): https://zcinema-server-test.herokuapp.com/users
    * Body (Todos abaixo são obrigatórios): 
    ```
    {
        "first_name": "Caio",
        "last_name": "FARIAS",
        "password": "123456",
	"profile": "Cliente",
        "email": "CAIO@email.com",
        "file": ARQUIVO DE IMAGEM.png/.jpeg/.jpg
    }
    ```
* Ler usuário:
    * Endpoint (GET): https://zcinema-server-test.herokuapp.com/users/ID_DO_USUARIO

* Editar usuário:
    * Endpoint (PATCH): https://zcinema-server-test.herokuapp.com/users/ID_DO_USUARIO
    * Body (campos que se deseja mudar): 
    ```
    {
	    "email": "caio@email.com"
    }
    ```
* Deletar usuário:
    * Endpoint (DELETE): https://zcinema-server-test.herokuapp.com/users/ID_DO_USUARIO
