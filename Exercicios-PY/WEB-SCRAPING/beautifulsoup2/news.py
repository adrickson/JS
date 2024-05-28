import requests
from bs4 import BeautifulSoup
import pandas as pd

lista_noticias = []

resposta = requests.get('https://g1.globo.com/') # acessando o site e guardando seu valor em uma variável

content = resposta.content #retorna o conteúdo do site

site = BeautifulSoup(content, 'html.parser') #informando e transformando o tipo do conteúdo para HTML (converte o conteudo da requisição para um objeto do beautifulsoup)


#Notícia Completa
noticias = site.findAll('div', attrs={'class' : 'feed-post-body'}) #procurando por todas as tags divs com a classe solicitada

for noticia in noticias:

    #TÍTULO
    titulo = noticia.find('a', attrs={'class' : 'feed-post-link gui-color-primary gui-color-hover'})

    print(titulo.text) #Pega somente o texto da tag que você solicitou a busca.
    print(titulo['href']) #pega o link da noticia


    #PEGANDO O SUBTITULO

    subtitulo = noticia.find('a', attrs={'class' : 'gui-color-primary gui-color-hover feed-post-body-title bstn-relatedtext'})

    if (subtitulo):
        print(subtitulo.text)

    if (subtitulo):
        print(subtitulo.text)
        lista_noticias.append([titulo.text, subtitulo.text, titulo['href']])
    else:
        lista_noticias.append([titulo.text, '' , titulo['href']])

news = pd.DataFrame(lista_noticias, columns=['Título', 'Subtítulo', 'Link']) # Utilizamos o pandas para criar a tabela com titulo, subtitulo e link das notícias.

news.to_excel('noticias.xlsx', index=False) #Estamos pedindo para salvar as noticias em um arquivo do excel passando o título que o arquivo irá ter e a extensão. Utilizamos o index=False para não salvar os índices que foram estabelecidos pelo array na tabela do pandas.

#print(news)
#print(site.prettify()) #imprime o conteúdo do site de maneira mais organizada.