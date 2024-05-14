import requests
from bs4 import BeautifulSoup

resposta = requests.get('https://g1.globo.com/') # acessando o site e guardando seu valor em uma variável

content = resposta.content #retorna o conteúdo do site

site = BeautifulSoup(content, 'html.parser') #informando e transformando o tipo do conteúdo para HTML (converte o conteudo da requisição para um objeto do beautifulsoup)


#Notícia Completa
noticia = site.find('div', attrs={'class' : 'feed-post-body'}) #Pegando um elemento específico no HTML do site, passando respectivamente o nome da tag, o atributo da tag e o nome do atributo.

# a class='feed-post-link gui-color-primary gui-color-hover', atributo do titulo da notícia que desejo pegar

#TÍTULO
titulo = noticia.find('a', attrs={'class' : 'feed-post-link gui-color-primary gui-color-hover'})

print(titulo.text) #Pega somente o texto da tag que você solicitou a busca.


#PEGANDO O SUBTITULO

subtitulo = noticia.find('a', attrs={'class' : 'gui-color-primary gui-color-hover feed-post-body-title bstn-relatedtext'})

print(subtitulo.text)

#print(site.prettify()) #imprime o conteúdo do site de maneira mais organizada.
