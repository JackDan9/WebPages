# -*- coding: utf-8 -*-

import urllib2

# response = urllib2.urlopen("http://www.baidu.com")
# print(response) # <addinfourl at 82634696L whose fp = <socket._fileobject object at 0x0000000004DDEDE0>>
# print(response.read())

# request = urllib2.Request("http://www.baidu.com")
# response = urllib2.urlopen(request)
# print response.read()
# print response.read()
# IOError: [Errno 0] Error

import urllib
import sys

## POST_SEND
# values = { "username": "1835812864@qq.com", "password": "***" }
# data = urllib.urlencode(values)
# url = "https://password.csdn.net/account/login?from=http://my.csdn.net/my/mycsdn"
# url = "https://passport.csdn.net/account/login?from=https://passport.csdn.net/account/verify"
# request = urllib2.Request(url, data)
# response = urllib2.urlopen(request)
# print(unicode(response.read(), "utf-8"))

# values = {}
# values['username'] = "1835812864@qq.com"
# values['password'] = "***"
# data = urllib.urlencode(values)
# url = "https://passport.csdn.net/account/login?from=https://passport.csdn.net/account/verify;jsessionid=7B77D1C7C1C00D8E0AE06BEA89BCDE7A.tomcat1"
# https://passport.csdn.net/account/verify;jsessionid=B0909BD75234C364A8BA7DE1A21E1F60.tomcat1
# request = urllib2.Request(url, data)
# response = urllib2.urlopen(request)
# print(unicode(response.read(), "utf-8"))

## Get_SEND
# values = {}
# values['username'] = "1835812864@qq.com"
# values['password'] = "***"
# data = urllib.urlencode(values)
# url = "https://passport.csdn.net/account/login"
# geturl = url + "?" + data
# request = urllib2.Request(geturl)
# response = urllib2.urlopen(request)
# print(unicode(response.read(), "utf-8"))
# print(geturl)
# https://passport.csdn.net/account/login?username=1835812864%40qq.com&password=XXX


## USER_Agent
# url = 'https://passport.csdn.net/account/login'
# user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36'
# values = {'username': '1835812864@qq.com', 'password': '***'}
# headers = {'User-Agent': user_agent}
# data = urllib.urlencode(values)
# request = urllib2.Request(url, data, headers)
# response = urllib2.urlopen(request)
# page = response.read()
# print(headers)

## HTTP_PROXY
# enable_proxy = True
# proxy_handler = urllib2.ProxyHandler({"https": 'http://some-proxy.com:8080'})
# null_proxy_handler = urllib2.ProxyHandler({})
# if enable_proxy:
# 	opener = urllib2.build_opener(proxy_handler)
# else:
# 	opener = urllib2.build_opener(null_proxy_handler)
# urllib2.install_opener(opener)

## Timeout
# response = urllib2.urlopen('http://www.baidu.com', timeout=10)
# page = response.read()
# print(unicode(response.read(), 'utf-8'))
# response = urllib2.urlopen('http://www.baidu.com', data, 10)


## http_protocol_request_method(get, head, put, delete, post, options)
## PUT usually specify the storage location of resources
## POST data storage location by the server itself
# request = urllib2.Request(uri, data=data)
# request.get_method = lambda: 'PUT' # or 'DELETE'
# response = urllib2.urlopen(request)

## Debuglog(Accept and send the package file will be printed on the screen)
# httpHandler = urllib2.HTTPHandler(debuglevel=1)
# httpsHandler = urllib2.HTTPSHandler(debuglevel=1)
# opener = urllib2.build_opener(httpHandler, httpsHandler)
# urllib2.install_opener(opener)
# response = urllib2.urlopen('http://www.baidu.com')

## URLError
# request = urllib2.Request('http://www.baidu.com')
# try:
# 	urllib2.urlopen(request)
# except urllib2.URLError, e:
# 	print(e.reason)
## Such as: Broken network([Errno 11001] getaddrinfo failed)

## HTTPError:(HTTP status code)
## 100: Continue——The client should continue to send the request. The client should continue to send the rest of the request, or ignore the response if the request has been completed.
## 100: 继续——客户端应当继续发送请求。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。
## 101: 转换协议  在发送完这个响应最后的空行后，服务器将会切换到在Upgrade 消息头中定义的那些协议。只有在切换新的协议更有好处的时候才应该采取类似措施。
## ... https://cuiqingcai.com/961.html
## 503: 
# request = urllib2.Request('http://www.baidu.com/jackdan9')
# try:
# 	urllib2.urlopen(request)
# except urllib2.HTTPError as e:
# 	print(e.code)
# 	print(e.reason)

# request = urllib2.Request('http://www.baidu.com/jackdan9')
# try:
# 	urllib2.urlopen(request)
# except urllib2.URLError as e:
# 	if hasattr(e, "reason"):
# 		print(e.reason)
# else:
# 	print("OK")

## Cookie: 指某些网站为了辨别用户身份、进行session跟踪而储存在用户本地终端上的数据(通常经过加密).
## 比如说有些网站需要登录后才能访问某个页面, 在登录之前, 你想抓取某个页面内容是不允许的. 那么我们可以利用Urllib2库保存我们登录的Cookie, 然后再抓取其他页面就达到目的了.
## Opernr:
## Cookielib:
import cookielib

# cookie = cookielib.CookieJar()
# handler = urllib2.HTTPCookieProcessor(cookie)
# opener = urllib2.build_opener(handler)
# response = opener.open('http://www.baidu.com')
# for item in cookie:
#  	print('Name = ' + item.name)
#  	print('Value = ' + item.value)
## print:
# Name = BAIDUID
# Value = 63C7DDA4CC964B74029BF9D081D42ED5:FG=1
# Name = BIDUPSID
# Value = 63C7DDA4CC964B74029BF9D081D42ED5
# Name = H_PS_PSSID
# Value = 1432_21125_25437_25177_22157
# Name = PSTM
# Value = 1514538950
# Name = BDSVRTM
# Value = 0
# Name = BD_HOME
# Value = 0

## Save the cookie to file