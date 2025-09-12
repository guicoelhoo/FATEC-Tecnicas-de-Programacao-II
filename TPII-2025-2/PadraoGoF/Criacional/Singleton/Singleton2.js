class Aluno {
    constructor() {
        if (Aluno.instancia) {
            return Aluno.instancia;
        }
        this.nome = "";
        this.nota = {};
        Aluno.instancia = this;
    }

    definirNome(nome) {
        this.nome = nome;
    }

    addNota(disciplina, nota) {
        this.nota[disciplina] = nota;
    }

    calcularMedia() {
        const total = Object.values(this.nota).reduce((acc, curr) => acc + curr, 0);
        return total / Object.keys(this.nota).length;
    }
}

// uso do padrão
const aluno1 = new Aluno();
aluno1.definirNome("Paulo Maconha");
aluno1.addNota("Engenharia de Software", 1);
aluno1.addNota("Banco de Dados", 3);
aluno1.addNota("Programação Orientada a Objetos", 1);
console.log(`Aluno: ${aluno1.nome}, Média: ${aluno1.calcularMedia()}`);

console.log("--------------------");

const aluno2 = new Aluno();
aluno2.definirNome("Urubu");
aluno2.addNota("Engenharia de Software", 0);
aluno2.addNota("Banco de Dados", 2);
aluno2.addNota("Programação Orientada a Objetos", 4);
console.log(`Aluno: ${aluno2.nome}, Média: ${aluno2.calcularMedia()}`);

