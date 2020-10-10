# MYSQL数据库查看被锁状态以及解锁
## 前言
- 在信息时代，数据时最重要的,数据库一般都存在数据库的表中，但当表被锁的时候，数据无法读或者写，造成数据的丢失,进而产生严重的后果...  

## 方式

- 查询mysql 哪些表正在被锁状态（两种方式）

```shell
method 1: show OPEN TABLES where In_use > 0;
method 2: SHOW PROCESSLIST查看数据库中表的状态，是否被锁；
```

## 解锁
- 解锁锁定的表
```shell
kill id
```

