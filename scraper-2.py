import requests as req
from bs4 import BeautifulSoup

c = 0
url = "http://mihajlopupin.mk/"
site = req.get(url)
cont = BeautifulSoup(site.content, 'html.parser')
need = cont.find_all( class_ = "clearfix")
doc = '{ \n'
for i in need:
    try:
        texts = i.find(class_="posts-widget-entry").text
    except:
        texts = "None"

    try:
        title = i.find(class_="posts-widgettitle").text
    except:
        title = "None"
    
    try:
        sorce = i.find(class_="wp-post-image")['src']
    except:
        sorce = "None"
    
    if title[0] == 'G':
        break
    else:
        if title == "None":
            continue
        else:
            c += 1
            doc += f"\"news{c}\":"
            doc += "\n{\n" 
            doc += f'\"title{c}\": \"{title}\", \n'  
            doc += f'\"text{c}\": \"{texts}\", \n'  
            doc += f'\"image{c}\": \"{sorce}\" \n'  
            doc += "},\n"
    
    

    

doc += '}'
file = open("news.json", "w",encoding='utf-8') 
file.write(doc)
file.close()