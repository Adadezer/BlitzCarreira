# Boas-vindas ao repositório do projeto Blitz de Carreita

# Orientações
<details>
  <summary>
    <strong>🤷🏽‍♀️ Como rodar a aplicação</strong>
  </summary><br>
  1- O projeto usa o banco de dados `MySQL`, inicie o mysql com o comando
    
    - `systemctl start mysql`.

  2- Abra o terminal, e clone o repositório 
 
  - `git clone git@github.com:Adadezer/BlitzCarreira.git`.

  3- Entre na pasta do repositório que você acabou de clonar:
  - `cd BlitzCarreira`

  4- Instale as dependências:
  - `npm install`
  
  5- Vá até a pasta `backend` e suba o servidor:
  - Pasta backend
    - `cd app/backend/`
  - Digite o comando para subir o servidor
    - `npm run dev`
    - aparecerá uma mensagem 'rodando na porta (número da porta)', e não sairá disso, quer dizer que o servidor está no ar

  6- Abra outra guia no terminal para rodar o front-end
  - Vá até a pasta `frontend`
    - `cd app/frontend`
  - Inicie a aplicação
    - `npm start`
      
    - A página da aplicação irá abrir no seu navegador
</details>
<details>
  <summary>
    <strong>🛠 Testes</strong>
  </summary><br>

  - Na pasta `backend` execute o comando:
  
    - `npm run test`.
</details> 