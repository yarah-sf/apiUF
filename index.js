import express from 'express'
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from "./servicos/servico.js";

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs;

    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma Uf encontrada" });
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = req.params.iduf;
    const uf = buscarUfPorId(idUf);

    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(idUf))) {
        res.status(400).send({ "erro": "Ruequisição inválida" });
    } else {
        res.status(404).send({ "erro": "Uf não encontrada" });
    }

});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em: ' + data);
});