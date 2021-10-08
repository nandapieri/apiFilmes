const roteador = require('express').Router()
//const TabelaFilmes = require('./TabelaFilmes')

roteador.use('/', (req, res) => {
    //const resultados = await TabelaFilmes.listar()
    /*res.send(
        JSON.stringify(resultados)
    )*/
    res.send('ok')
})

module.exports = roteador