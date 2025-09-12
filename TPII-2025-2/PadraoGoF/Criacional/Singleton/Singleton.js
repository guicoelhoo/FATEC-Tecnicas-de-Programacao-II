class Singleton {
    constructor() {
        if (Singleton.instance == null) {
            Singleton.instance = this;
            this.valor = 0;

        }
        return Singleton.instance;
    }

    incremento() {
        this.valor += 1;
        console.log("Valor: " + this.valor);
    }
}

// Uso do padrão
console.log("Antes de iniciar S1 e S2");
const s1 = new Singleton();
const s2 = new Singleton();

console.log("analisa se s1 é igual a s2: ) ");
console.log(s1 === s2);

console.log("Incrementando s1: ");
s1.incremento();
s2.incremento();

console.log("concluido a operação")