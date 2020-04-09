# URL相关模块
## 理解urllib、urllib2以及requests区别以及运用---针对于python2

### urllib and urllib2 区别
- `urllib`和`urllib2`模块都做与URL相关的操作, 但他们提供不同的功能.
- `urllib2.urlopen` accepts an instance of the Request class or a url, (whereas urllib.urlopen only accepts a url): `urllib2.urlopen`可以接受一个`Request对象`或者`url`, (在接受Request对象时候, 并以此可以来设置一个URL的headers), `urllib.urlopen`只接收一个url
- `urllib`有`urlencode`, `urllib2`没有, 这也是为什么总是`urllib`, `urllib2`常会一起使用的原因.

``` python
r = Request(url='http://www.mysite.com')
r.add_header('User-Agent', 'awesome fetcher')
r.add_data(urllib.urlencode({'foo': 'bar'}))
response = urllib2.urlopen(r) # post ,ethod
```

#### urllib 模块
- 

