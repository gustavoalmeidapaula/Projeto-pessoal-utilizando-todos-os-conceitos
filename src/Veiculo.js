export class Veiculo {
    static contadorDeVeiculos = 0

    constructor(marca, modelo, ano) {
        if (!marca || !modelo || !ano || isNaN(ano)) {
            throw new Error('Parâmetros inválidos para criação de um veículo.')
        }

        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        Veiculo.contadorDeVeiculos++
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo} (${this.ano})`
    }

    static getContadorDeVeiculos() {
        return Veiculo.contadorDeVeiculos
    }
}
