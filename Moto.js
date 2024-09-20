const Veiculo = require ('./Veiculo.js')

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        if (!cilindradas || isNaN(cilindradas) || cilindradas <= 0) {
            throw new Error('As cilindradas devem ser um valor numérico positivo.')
        }

        super(marca, modelo, ano)
        this.cilindradas = cilindradas
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Moto com ${this.cilindradas} cilindradas`
    }
}
module.exports=Moto