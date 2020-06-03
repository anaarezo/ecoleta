import express from 'express';

const app = express();

app.use(express.json());
// Rotas - Endereço completo da requisição
// Recurso - Qual entidade estamos acessando do sistema 

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação do back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:333/users = Criar um usuário
// GET http://localhost:333/users = Listar usuários
// GET http://localhost:333/users/5 = Buscar dados do usuário com ID=5

// Request.params = parametros que vem dentro da própria rota que identificam um recurso ,request ele é obrigatório se for colocado na rota 99% das vezes
// Query Param: é opcional, filtrar, fazer paginação, etc. Parametros geralmente opcionais que vem na rota
// Request Body: parametros para atualização e criação de informações

const users = [
    'Ana', //0
    'Laura', //1
    'Maria', //2
    'Paula'//3
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : (users);

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); //Numbers para tipar o resultado da variável
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;
    
    console.log(data);
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);