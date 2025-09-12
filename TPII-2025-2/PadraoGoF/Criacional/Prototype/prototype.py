# class pessoa - padrão prototype

class Pessoa:
    def __init__(self, id, nome, idade):
        self.id = id;
        self.nome = nome
        self.idade = idade

# metodo para clonar
    def clone(self):
        return Pessoa(self.id, self.nome, self.idade)

# classe que gerencia as pessoas
class PessoaGerencia:
    def __init__(self):
        self.pessoas = {}

    def addPessoa(self, id, nome, idade):
        pessoa = Pessoa(id, nome, idade)
        self.pessoas[id] = pessoa

    def getPessoasId(self, id):
        pessoa = self.pessoas.get(id)
        if pessoa:
            return pessoa.clone()
        return None
    
    # uso do prototype exemplo

manager = PessoaGerencia()
manager.addPessoa(1, "Viado da bike", 44)
manager.addPessoa(2, "Bin laden de diadema", 65)
manager.addPessoa(3, "Michel Temer", 1360)

# clonando 1 pessoas e modificando
pessoaClonada1 = manager.getPessoasId(1)
if pessoaClonada1:
    pessoaClonada1.nome = "Gordinho bololo"
    pessoaClonada1.id = 3

# exibindo as pessoas
print("Pessoa original:")
print(vars(manager.getPessoasId(1)))
print("Pessoa clonada:")
print(vars(pessoaClonada1))