const { somar } = require("../src/calculadora")

describe("teste da função somar", () => {
    it("Deve retornar a soma de dois numeros", () => {
        const soma = somar(1,2);
        const resultadoEsperado = 3;
        expect(soma).toBe(resultadoEsperado)
    })
})