import express from 'express';

const app = express();

app.get ('/jogos', req, res => {
    res.json(colecaoJogos)
});























app.get ('/jogos/idjogo', req, res => {
    const idJogo = parseInt(req.params.idjogo);
    let mensagemErro = '';
    let jogo;


})