// definindo partes da pizza
class Tamanho {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Massa {
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

class Molho {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Sabor {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

// Builder
class PizzaBuilder {
    constructor() {
        this.tamanho = null;
        this.massa = null;
        this.molho = null;
        this.sabor = null;
    }

    setTamanho(tamanho) {
        this.tamanho = new Tamanho(tamanho);
        return this;
    }

    setMassa(massa) {
        this.massa = new Massa(massa);
        return this;
    }

    setMolho(molho) {
        this.molho = new Molho(molho);
        return this;
    }

    setSabor(sabor) {
        this.sabor = new Sabor(sabor);
        return this;
    }

    build() {
        return new Pizza(this.tamanho, this.massa, this.molho, this.sabor);
    }
}

//classe pizza
class Pizza {
    constructor(tamanho, massa, molho, sabor) {
        this.tamanho = tamanho;
        this.massa = massa;
        this.molho = molho;
        this.sabor = sabor;
    }

    MostrarDetalhes(){
        console.log(`Pizza\n    tamanho: ${this.tamanho.tipo}\n    massa: ${this.massa.tamanho}\n    molho: ${this.molho.tipo}\n    sabor: ${this.sabor.tipo}`)
    }
}

// modelo builder 
let builder = new PizzaBuilder();

let pizzaSalgada = builder
    .setTamanho("Grande")
    .setMassa("Grossa")
    .setMolho("Tomate")
    .setSabor("Calabresa")
    .build();

builder = new PizzaBuilder();
let pizzaDoce = builder
    .setTamanho("Média")
    .setMassa("Fina")
    .setMolho("Branco")
    .setSabor("Nutella")
    .build();

pizzaSalgada.MostrarDetalhes();
pizzaDoce.MostrarDetalhes();

