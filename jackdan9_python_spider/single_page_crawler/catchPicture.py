# -*- coding: utf-8 -*-

import urllib.request
import re
#py抓取页面图片并保存到本地

#获取页面信息
def getHtml(url):
    page = urllib.request.urlopen(url)
#html = response.read().decode('utf-8').
    html = page.read().decode('utf-8')
    return html

#通过正则获取图片
def getImg(html):
    reg = r'src="(.+?\.jpg)" pic_ext'
    imgre = re.compile(reg)
    imglist = re.findall(imgre,html)
    return imglist
#循环把图片存到本地
    x = 0
    for imgurl in imglist:
        #保存到本地
        urllib.urlretrieve(imgurl,'C:/catchPicture/%s.jpg' % x)
        x+=1

html = getHtml("http://tieba.baidu.com/p/2460150866")

print (getImg(html))