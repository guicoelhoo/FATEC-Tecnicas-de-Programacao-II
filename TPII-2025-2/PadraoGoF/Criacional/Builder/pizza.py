# definindo parte da pizza
class Tamanho:
    def __init__(self, descricao):
        self.descricao = descricao

class Massa:
    def __init__(self, tipo):
        self.tipo = tipo

class Molho:
    def __init__(self, tipo):
        self.tipo = tipo

class Sabor:
    def __init__(self, tipo):
        self.tipo = tipo

#builder
class PizzaBuilder:
    def __init__(self):
        self.tamanho = None
        self.massa = None
        self.molho = None
        self.sabor = None

    def add_tamanho(self, tamanho):
        self.tamanho = Tamanho(tamanho)
        return self

    def add_massa(self, massa):
        self.massa = Massa(massa)
        return self

    def add_molho(self, molho):
        self.molho = Molho(molho)
        return self

    def add_sabor(self, sabor):
        self.sabor = Sabor(sabor)
        return self

    def construir(self):
        return Pizza(self.tamanho, self.massa, self.molho, self.sabor)

#Classe Pizza
class Pizza:
    def __init__(self, tamanho, massa, molho, sabor):
        self.tamanho = tamanho
        self.massa = massa
        self.molho = molho
        self.sabor = sabor

    def mostrar_detalhes(self):
        print(f"Pizza:\nTamanho: {self.tamanho.descricao}\nMassa: {self.massa.tipo}\nMolho: {self.molho.tipo}\nSabor: {self.sabor.tipo}")

#Uso do modelo builder
builder = PizzaBuilder()
Pizza_Salgada = (builder
    .add_tamanho("Grande")
    .add_massa("Grossa")
    .add_molho("Tomate")
    .add_sabor("Calabresa")
    .construir())

builder = PizzaBuilder()
Pizza_Doce = (builder
    .add_tamanho("Pequena")
    .add_massa("Fina")
    .add_molho("Doce")
    .add_sabor("Nutella")
    .construir())

Pizza_Salgada.mostrar_detalhes()
Pizza_Doce.mostrar_detalhes()