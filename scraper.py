import requests as req
from bs4 import BeautifulSoup

c = 0
url = "http://mihajlopupin.mk/"
site = req.get(url)
cont = BeautifulSoup(site.content, 'html.parser')
need = cont.find_all( class_ = "post")
doc = '{ \n'
for i in need:
    c += 1
    title = i.find(class_="title").text
    texts = i.find(class_="entry").text
    tek = texts.replace("\n","`DEL`")
    try:
        sorce = i.find(class_="featured_image")['src']
    except:
        sorce = "None"
        
    if title[0] == 'G':
        break
    else:
        doc += f"\"bio{c}\":"
        doc += "\n{\n"
        doc += f'\"title{c}\": \"{title}\", \n'  
        doc += f'\"text{c}\": \"{tek}\", \n'  
        doc += f'\"image{c}\": \"{sorce}\" \n'  
        doc += "},\n"
    
    

    

doc += '}'
file = open("blog.json", "w",encoding='utf-8') 
file.write(doc)
file.close()
    
