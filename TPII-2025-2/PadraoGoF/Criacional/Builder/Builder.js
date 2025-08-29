// Definindo partes do carro
class Motor {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Rodas {
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

class Interior {
    constructor(cor) {
        this.cor = cor;
    }
}

class Carroceria {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

// Builder
class CarroBuilder {
    constructor() {
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }

    addMotor(tipo) {
        this.motor = new Motor(tipo);
        return this;
    }

    addCarroceria(tipo) {
        this.carroceria = new Carroceria(tipo);
        return this;
    }

    addRodas(tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }

    addInterior(cor) {
        this.interior = new Interior(cor);
        return this;
    }

    construir() {
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }
}

// Classe Carro
class Carro {
    constructor(motor, carroceria, rodas, interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }

    MostrarDetalhes() {
        console.log(`Carro:
Motor: ${this.motor.tipo}
Carroceria: ${this.carroceria.tipo}
Rodas: ${this.rodas.tamanho}
Interior: ${this.interior.cor}`);
    }
}

// Uso do modelo builder
let builder = new CarroBuilder();

let carroEsportivo = builder
    .addMotor("V8")
    .addCarroceria("Esportiva")
    .addRodas("18")
    .addInterior("Preto")
    .construir();

builder = new CarroBuilder();
let carroSedan = builder
    .addMotor("V6")
    .addCarroceria("Sedan")
    .addRodas("16")
    .addInterior("Bege")
    .construir();

builder = new CarroBuilder();
let carroBYD = builder
    .addMotor("Elétrico")
    .addCarroceria("SUV")
    .addRodas("19")
    .addInterior("Plastico")
    .construir();

carroEsportivo.MostrarDetalhes();
carroSedan.MostrarDetalhes();
carroBYD.MostrarDetalhes();