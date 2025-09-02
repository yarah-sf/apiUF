import colecaoEmo from "./emocoes/emocoes.js";
import express from 'express'

const app = express();

app.get('/emos', (req, res) => {
    res.json(colecaoEmo)
});

// app.get('/emo/:idemo', (req, res) => {
//     const idEmo = parseInt(req.params.idemo);
//     const emo = colecaoEmo.find(u => u.id === idEmo);
//     res.json(Emo);
// })

app.get('/emos/:idemo', (req, res) => {
    const idEmo = parseInt(req.params.idemo);
    let mensagemErro = '';
    let emo;

    if (!(isNaN(idEmo))) {
        emo = colecaoEmo.find(u => u.id === idEmo);
        if (!emo) {
            mensagemErro = 'Emoção não encontrada';
        }

    } else {
        mensagemErro = 'Requisição invalida';
    }

    if (emo) {
        res.json(emo);
    } else {
        res.status(404).json({ "erro": mensagemErro })
    }
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
})