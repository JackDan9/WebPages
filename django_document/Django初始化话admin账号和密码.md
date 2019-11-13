# Django初始化话admin账号和密码
- Django提供admin后台, 便于统一管理用户、权限和权限组, 超级用户初始化方法;
- 初始化命令:

``` python
# python2
python manage.py createsuperuser
# python3
python3 manage.py createsuperuser
```

- 根据提示设置用户名、邮箱和密码:

``` python
# 这里使用的是pymysql链接的数据库
python manage.py createsuperuser
===============install pymysql==============
Username: admin
# 如果用户已经存在了就不能在新增这个用户了
Error: That username is already taken.
Username: admin@example.org
Error: That username is already taken.
Username: admin123
Email address: admin123@example.org
Password:
Password (again):
# 密码不能设置得太简单了
This password is too common.
Password:
Password (again):
Superuser created successfully.
```

------

``` python3
python3 manage.py createsuperuser
===============install pymysql==============
Username: admin
# 如果用户已经存在了就不能在新增这个用户了
Error: That username is already taken.
Username: admin@example.org
Error: That username is already taken.
Username: admin123
Email address: admin123@example.org
Password:
Password (again):
# 密码不能设置得太简单了
This password is too common.
Password:
Password (again):
Superuser created successfully.
```

------

- 完整的实例:
``` python
Username (leave blank to use 'sh'):
Email address: test@sh.com
Password:
Password (again):
Error: Your passwords didn't match.
Password:
Password (again):
The password is too similar to the email address.
This password is too short. It must contain at least 8 characters.
Password:  
Password (again):
Error: Your passwords didn't match.
Password:
Password (again):
This password is too common.  #设置12345678时的提示
This password is entirely numeric.
Password:
Password (again):
Superuser created successfully.
```

> JackDan Thinking