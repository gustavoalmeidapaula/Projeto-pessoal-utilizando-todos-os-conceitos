export class Proprietario {
    constructor(nome, idade) {
        if (!nome || typeof nome !== 'string' || nome.trim() === '') {
            throw new Error('Nome inválido.')
        }
        if (!idade || isNaN(idade) || idade <= 0) {
            throw new Error('Idade inválida.')
        }

        this.nome = nome
        this.idade = idade
        this.veiculos = []
    }

    adicionarVeiculo(veiculo) {
        if (!(veiculo instanceof Veiculo)) {
            throw new Error('Apenas instâncias da classe Veiculo podem ser adicionadas.')
        }
        this.veiculos.push(veiculo)
    }

    exibirVeiculos() {
        if (this.veiculos.length === 0) {
            console.log(`${this.nome} não possui veículos.`)
        } else {
            console.log(`Veículos de ${this.nome}:`)
            this.veiculos.forEach(veiculo => console.log(veiculo.exibirDetalhes()))
        }
    }
}
