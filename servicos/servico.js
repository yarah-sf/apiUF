import colecaoUf from "../dados/dados.js";

export const buscarUfs = () => {
    return colecaoUf;
};

export const buscarUfsPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase.includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
};

export const buscarUfPorSigla = (siglaUf) => {
    return colecaoUf.find(uf => uf.uf.toLowerCase() === siglaUf.toLowerCase());
};

export const buscarUfPorInicial = (inicialUf) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().startsWith(inicialUf.toLowerCase));
};