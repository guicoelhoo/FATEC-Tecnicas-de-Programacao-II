# interface do cliente
class AplicacaoCliente:
    def requisitar(self):
        pass

class Cliente:
    def __init__(self, target):
        self.target = target

    def criaRequest(self):
        print("Cliente: Fazendo uma requisição ")
        self.target.request()

# serviço existente
class Adaptee:
    def especificaRequest(self):
        print("Requisição especifica do Adaptee")

# Adapter
class Adapter(AplicacaoCliente):
    def __init__(self, adaptee):
        self.adaptee = adaptee
    
    def request(self):
        self.adaptee.especificaRequest()


# utilizando o adaptar
adaptee = Adaptee()
adapter = Adapter(adaptee)
cliente = Cliente(adapter)


# Fazendo uma requisição - Requisição Especifica do Adaptee:
cliente.criaRequest()

