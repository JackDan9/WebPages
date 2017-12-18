# -*- coding: utf-8 -*-

#!/usr/bin/python  

import re   
import urllib  

def getHtml(url):  
    
    page=urllib.urlopen(url)  
    html=page.read()  
    return html  

def getMp4(html):  
    
    r=r"href='(http.*\.mp4)'"  
    re_mp4=re.compile(r)  
    mp4List=re.findall(re_mp4,html)  
    filename=1  
    for mp4url in mp4List:  
        urllib.urlretrieve(mp4url,"%s.mp4" %filename)  
        print  'file "%s.mp4" done' %filename  
        filename+=1  

url=raw_input("please input the source url:")  

html=getHtml(url)  

getMp4(html) 