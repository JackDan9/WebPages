# Django异常 - ImportError: No module named django.core.management
- Django异常 - ImportError: No module named django.core.management

## 问题描述:
- 在命令行输入`python manage.py runserver`, 提示找不到`django.core.management`

## 问题分析:
- 1. 确定Django已安装, 进行Django安装目录查看, `django.core.management`确实存在;
- 2. 电脑上有两个版本的python, 查看环境变量设置的那个Python版本有安装Django;
- 3. 依次在当前终端命令行输入:

``` python
python

Python 2.7.12 (default, Nov 12 2018, 14:36:49) 
[GCC 5.4.0 20160609] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import django
>>> django.VERSION
(1, 11, 25, u'final', 0)
>>> 
# 有打印出Django版本为V1.11.25
```

- 如果第3步出错，需要安装django服务才能使用:

``` python
python -m pip install django
```

``` python3
python3 -m pip install django
```

- 4. 继续第3步，在命令行输入:

```
# django Version版本在2之前
>>> from django.core.management import execute_from_command_line
>>> 
# django Version 版本在2之后
>>> from django.core.management import execute_manager
>>>
```

- 5. 可以确定Django功能正常，有听说Python如果同时安装多个版本可能会有版本兼容问题，尝试手动指定Python版本来运行Django工程，在命令行输入：
```
python27 manage.py runserver
```
- 问题得到解决

## 解决方案：
- 在命令`python manage.py runserver`前面指定要使用的Python版本，即在命令行输入：
```
python27 manage.py runserver
```

## 小结：
- 当电脑上装有多个版本的Python时，有时即使已在环境变量中正确设置了要运行的版本，还是有可能出错，这时可尝试在命令行指定要使用的Python，比如`python27 manage.py runserver`

------

> JackDan Thinking
