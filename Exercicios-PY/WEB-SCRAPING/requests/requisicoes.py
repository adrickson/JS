import requests

resposta = requests.get('https://www.walissonsilva.com/') # acessando o site e guardando seu valor em uma variável

print('Satus code:', resposta.status_code) # retorna o status da página solicitada, se tiver na familia 200 está tudo certo

print('Header Abaixo:')
print(resposta.headers) #Mostra informações sobre o servidor que está hospedando o site

print('\n Content Abaixo: ')
print(resposta.content) #retorna o conteudo da nossa resposta, ou seja o conteúdo do site.
