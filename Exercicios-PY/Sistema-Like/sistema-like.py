publicacao = 'sim'
contador = 0
nomeCurtida = []


while publicacao == 'sim':

    nome = input('Digite seu nome: ')
    publicacao = input('você curtiu a publicação? sim/não: ')
    publicacao = publicacao.lower()
   
    if len(nomeCurtida) >= 4:
        contador += 1
        nomeCurtida[3] = f'E outras {contador} pessoas curtiram'
    else:
        nomeCurtida.append(nome)

print(nomeCurtida)

