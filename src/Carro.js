import { Veiculo } from './Veiculo.js'

export class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        if (!portas || isNaN(portas) || portas <= 0) {
            throw new Error('O número de portas deve ser um valor numérico positivo.')
        }

        super(marca, modelo, ano)
        this.portas = portas;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Carro com ${this.portas} portas`
    }
}
