# Django2.0 下在项目urls文件导入app的urls
- Django2.0 在url的配置上较之以前的版本有点区别, 在之前的版本是通过`django.conf.urls.url`函数来实现路径配置的

``` python
from django.conf.urls import url


urlpatterns = [
    
    url(r'index/',views.index),
    
]
```

- 在2.0版本中, 通过`django.urls.path`函数来配置
```
from django.urls import path


urlpatterns = [
    path("index/",views.index)
]
```

- 并且`path`函数在`url`的配置上还有一些新特性, 比较明显的就是不用`正则表达式`来配置了, 不过也可以通过`django.urls.re_path`函数来实现正则表达式来配置。
- 如果在app目录下创建了`urls`, 那么需要在项目`urls`文件中导入
- 在`views`创建视图函数

``` python
from django.shortcuts import render,HttpResponse
# Create your views here.

def index(request):
    return HttpResponse("index page")

```

- 在app下的`urls`

``` python
from django.urls import path
from . import views

urlpatterns = [
    path("index/",views.index)
]
```

- 此时就需要在项目的`urls`导入在app下配置的`url`

``` python
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("quickstart/",include('quickstart.urls'))
]
```

- 然后就可以通过`http://localhost:8000/quickstart/index`访问到视图函数index提供的服务

## django2.0之前接入app的方式
- 一般所熟知的就是在`myproject/myproject/urls.py`中的`urlpatterns`列表中来配置url, 每一个列表就是一个由url函数的调用。
- 例如假定我们想在`myapp`中定义一个主页, 然后通过`http://localhost:8000/myapp/homepage`来访问, 首先我们在`myproject/myapp/view.py`中定义一个叫`home_page`的函数(这里的名字随意, 不一定叫这名字):

``` python
from django.shortcuts import render
from django.http.response import HttpResponse

# Create your view here.
def home_page(request):
    return HttpResponse("<h1>This is home page</h1>")

```

- 然后在`myproject/myproject/urls.py`的urlpatterns列表中添加一个url配置:

``` python
from django.conf.urls import url
from django.contrib import admin
from myapp.views import home_page 
# 记得导入
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^myapp/homepage', home_page)
]

```
- 然后运行项目, 就可以用浏览器通过`http://localhost:8000/myapp/homepage`来访问。

- 但假如一个`project`中有多个app, 用以上的方式来管理url可能会造成比较混乱的局面, 为了解决这个问题, 我们可以用include的方法来配置url, 首先我们在自己的app中建立一个`urls.py`, 即`myproject/myapp`目录下建立`urls.py`, 然后在其中输入如下内容:
``` python
from django.conf.urls import url

from myapp.views import home_page

urlpatterns = [
    url(r'homepage', home_page)
]
```
- 然后在项目的`urls`中包含刚刚`app`中添加的url配置, 我们要做的是在`myproject/myproject/urls.py`输入如下内容:
``` python
from django.conf.urls import url, include
# 导入了include函数
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^myapp/', include("myapp.urls"))
]

# 包含myapp中的urls
```
- 然后通过刚刚相同的`url(http://localhost:8000/myapp/homepage)`访问发现也可以访问了, 通过这样的url管理会发现更加整洁, 可扩展性更强。

------

> JackDan Thinking
