const roteador = require('express').Router()
const TabelaFilmes = require('./TabelaFilmes')
const Filme = require('./Filme')

roteador.get('/',async  (req, res) => {
    const resultados = await TabelaFilmes.listar()
    res.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req,res) => {
    const dadosRecebidos = req.body
    const filme = new Filme(dadosRecebidos)
    await filme.criar()
    res.send(
        JSON.stringify(filme)
    )
})

module.exports = roteador