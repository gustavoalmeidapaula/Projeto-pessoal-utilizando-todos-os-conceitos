const Carro = require ('./Carro.js')
const Moto = require ('./Moto.js')
const Proprietario = require('./Proprietario.js')

try {
    const proprietario1 = new Proprietario('João', 35)
    const carro1 = new Carro('Toyota', 'Corolla', 2020, 4)
    const moto1 = new Moto('Honda', 'CB500', 2019, 500)

    try {
        proprietario1.adicionarVeiculo(carro1)
        proprietario1.adicionarVeiculo(moto1)
    } catch (error) {
        console.error(`Erro ao adicionar veículo: ${error.message}`)
    }

    proprietario1.exibirVeiculos()

    console.log(`Total de veículos criados: ${Carro.getContadorDeVeiculos()}`)
} catch (error) {
    console.error(`Erro durante a execução do programa: ${error.message}`)
}