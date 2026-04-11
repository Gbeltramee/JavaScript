import express from 'express';
import dbConnect from './config/dbConnect.js';
import livro from './models/livro.js';

const app = express();
app.use(express.json());

// Conectando ao banco de dados MongoDB
const conexao = await dbConnect();
conexao.on('error', (erro) => console.error('Erro de conexão:', erro));
conexao.once('open', () => console.log('Conexão com o banco de dados estabelecida com sucesso!'));  

// Rota para a página inicial
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js');
});

// Rota para obter a lista de livros
app.get('/livros', async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
}); 

// Rota para obter um livro específico por ID
app.get('/livros/:id', (req, res) => {                  
    const id = parseInt(req.params.id);
    const livro = encontrarLivroPorId(id);
    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).send('Livro não encontrado');
    }
});

// Rota para adicionar um novo livro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso');
})

// Rota para atualizar um livro existente
app.put('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const livro = encontrarLivroPorId(id);
    if (livro) {
        livro.titulo = req.body.titulo;
        res.status(200).send('Livro atualizado com sucesso').json(livro);
    } else {
        res.status(404).send('Livro não encontrado');
    }
});

// Rota para excluir um livro
app.delete('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = livros.findIndex(livro => livro.id === id);
    if (index !== -1) {
        livros.splice(index, 1);
        res.status(200).send('Livro excluído com sucesso');
    } else {
        res.status(404).send('Livro não encontrado');
    }
});


export default app;