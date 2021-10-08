const TabelaFilmes = require('./TabelaFilmes')

class Filme {
    constructor({id, titulo, categoria, dataCriacao, dataAtualizacao, versao}) {
        this.id = id
        this.titulo = titulo
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar(){
        const filmeCriado = await TabelaFilmes.inserir({
            titulo: this.titulo,
            categoria: this.categoria
        })
        this.id = filmeCriado.id
        this.dataCriacao = filmeCriado.dataCriacao
        this.dataAtualizacao = filmeCriado.dataAtualizacao
        this.versao = filmeCriado.versao
    }
}

module.exports = Filme