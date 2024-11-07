# Post-it Share

Post-it Share é uma aplicação web simples para criar e compartilhar notas adesivas (post-its) com outras pessoas. As notas podem ser criadas e compartilhadas através de links únicos.

## Funcionalidades

- Criar notas adesivas com conteúdo personalizado.
- Compartilhar notas através de links únicos.
- As notas expiram automaticamente após serem abertas ou após um período de tempo.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- HTMX

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/post-it-share.git
cd post-it-share
```

2. Instale as dependências:

```bash
npm install
```


3. Inicie o servidor
   
```bash
npm run dev
```
O servidor está rodando em ```http://localhost:3000```.

## Estrutura do Projeto
<br>```index.js```: Arquivo principal do servidor Express.
<br>```db.js```: Módulo para interagir com o banco de dados SQLite.
<br>```public/```: Diretório contendo arquivos estáticos (HTML, CSS, JS).
<br>```public/index.html```: Página principal para criar notas.
<br>```public/note.html```: Página para visualizar uma nota específica.
<br>```public/style.css```: Estilos CSS para a aplicação.
<br>```public/htmx.min.js```: Biblioteca HTMX para manipulação de requisições AJAX.
<br>```notes.db```: Banco de dados SQLite (ignorado pelo Git).

## Endpoints
<br>```GET /```: Serve a página principal para criar notas.
<br>```GET /note/:id```: Serve a página para visualizar uma nota específica.
<br>```POST /notes```: Cria uma nova nota e retorna o link para compartilhamento.
<br>```GET /share/:id```: Retorna o conteúdo de uma nota específica.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor
[Alícia Munhóz](https://github.com/aliciamunhoz)
