
# Definindo partes do carro
class Motor:
    def __init__(self, tipo):
        self.tipo = tipo

class Rodas:
    def __init__(self, tamanho):
        self.tamanho = tamanho

class Interior:
    def __init__(self, cor):
        self.cor = cor

class Carroceria:
    def __init__(self, tipo):
        self.tipo = tipo

# Builder
class CarroBuilder:
    def __init__(self):
        self.motor = None
        self.carroceria = None
        self.rodas = None
        self.interior = None

    def add_motor(self, tipo):
        self.motor = Motor(tipo)
        return self

    def add_carroceria(self, tipo):
        self.carroceria = Carroceria(tipo)
        return self

    def add_rodas(self, tamanho):
        self.rodas = Rodas(tamanho)
        return self

    def add_interior(self, cor):
        self.interior = Interior(cor)
        return self

    def construir(self):
        return Carro(self.motor, self.carroceria, self.rodas, self.interior)

# Classe Carro
class Carro:
    def __init__(self, motor, carroceria, rodas, interior):
        self.motor = motor
        self.carroceria = carroceria
        self.rodas = rodas
        self.interior = interior

    def mostrar_detalhes(self):
        print(f"Carro:\nMotor: {self.motor.tipo}\nCarroceria: {self.carroceria.tipo}\nRodas: {self.rodas.tamanho}\nInterior: {self.interior.cor}")

# Uso do modelo builder
builder = CarroBuilder()
carro_esportivo = (builder
    .add_motor("V8")
    .add_carroceria("Esportiva")
    .add_rodas("18")
    .add_interior("Preto")
    .construir())

builder = CarroBuilder()
carro_sedan = (builder
    .add_motor("V6")
    .add_carroceria("Sedan")
    .add_rodas("16")
    .add_interior("Bege")
    .construir())

builder = CarroBuilder()
carro_byd = (builder
    .add_motor("Elétrico")
    .add_carroceria("SUV")
    .add_rodas("19")
    .add_interior("Plastico")
    .construir())

carro_esportivo.mostrar_detalhes()
carro_sedan.mostrar_detalhes()
carro_byd.mostrar_detalhes()
