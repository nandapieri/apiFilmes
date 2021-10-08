const roteador = require('express').Router()
const TabelaFilmes = require('./TabelaFilmes')

roteador.use('/',async  (req, res) => {
    const resultados = await TabelaFilmes.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador