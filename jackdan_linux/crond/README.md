# crond-linux定时任务

## 定义
- crond和crontab是不可分割的。crontab是一个命令, 常见于Unix和类Unix的操作系统之中, 用于设置周期性被执行的指令。该命令从标准输入设备读取指令，并将其存放于"crontab"文件中，以供之后读取和执行。
- 而crond正是它的守护进程。cron服务是一个定时执行的服务，可以通过crontab命令添加或者编辑需要定时执行的任务。


``` shell
systemctl status crond
# 查看服务是否启动

# crond 服务启动状态下去执行下面的操作
crontab -u #设定某个用户的cron服务 
crontab -l #列出某个用户cron服务的详细内容 
crontab -r #删除某个用户的cron服务 
crontab -e #编辑某个用户的cron服务
crontab -i #打印提示，输入yes等确认信息

# 基本格式
# For details see man 4 crontabs
# Example of job definition:
# .---------------- minute (0 - 59)
# | .------------- hour (0 - 23)
# | | .---------- day of month (1 - 31)
# | | | .------- month (1 - 12) OR jan,feb,mar,apr ...
# | | | | .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# | | | | |
# * * * * * user-name command to be executed
定时任务的每段为：分，时，日，月，周，用户，命令
第1列表示分钟1～59 每分钟用*或者 */1表示
第2列表示小时1～23（0表示0点）
第3列表示日期1～31
第4列表示月份1～12
第5列标识号星期0～6（0表示星期天）
第6列要运行的命令

*：表示任意时间都，实际上就是“每”的意思。可以代表00-23小时或者00-12每月或者00-59分
-：表示区间，是一个范围，00 17-19 * * * cmd，就是每天17,18,19点的整点执行命令
,：是分割时段，30 3,19,21 * * * cmd，就是每天凌晨3和晚上19,21点的半点时刻执行命令
/n：表示分割，可以看成除法，*/5 * * * * cmd，每隔五分钟执行一次

# Example-举例
24 6 * * * bash /home/jackdan/test.sh
# 这个定时任务例子表示每天6点24分执行以下test.sh脚本

# Example
45 4 1,10,22 * * /usr/local/etc/rc.d/lighttpd restart 
# 这个定时任务例子表示每个月1, 10, 22号的4点45分重启apache

#Example
10 1 * * 6,0 /usr/local/etc/rc.d/lighttpd restart
# 这个定时任务例子表示每周六、周日的1 : 10重启apache

# Example
0,30 18-23 * * * /usr/local/etc/rc.d/lighttpd restart
# 这个定时任务例子表示在每天18:00至23:00之间每隔30分钟重启apache。最后一次的任务执行时间为23:30

# Example
* */1 * * * /usr/local/etc/rc.d/lighttpd restart
# 这个定时任务例子代表每分钟就执行一次，每隔一小时的每分钟都在执行重启apache

# Example
0 4 1 jan * /usr/local/etc/rc.d/lighttpd restart
# 这个定时任务例子表示一月一号的4点重启apache
```

------

> JackDan Thinking