# Centos7扩展磁盘空间（LVM管理）

## Shell详细操作

```shell
[root@localhost Redmine_Service]# fdisk -l /dev/sdb

Disk /dev/sdb: 214.7 GB, 214748364800 bytes, 419430400 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

[root@localhost Redmine_Service]# fdisk -l /dev/sda

Disk /dev/sda: 107.4 GB, 107374182400 bytes, 209715200 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x000b3f8e

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200   209715199   103808000   8e  Linux LVM

[root@localhost Redmine_Service]# df -h
Filesystem           Size  Used Avail Use% Mounted on
/dev/mapper/cl-root   50G   40G  10G   80% /
devtmpfs             1.9G     0  1.9G   0% /dev
tmpfs                1.9G     0  1.9G   0% /dev/shm
tmpfs                1.9G  175M  1.7G  10% /run
tmpfs                1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/mapper/cl-home   46G   33M   46G   1% /home
/dev/sda1           1014M  140M  875M  14% /boot
tmpfs                378M     0  378M   0% /run/user/0
overlay              250G   40G  211G  16% /var/lib/docker/overlay2/bfa39cc306cc0e954c21c5edf1754b19d6a0bc000fb3fbdcdc98cbbecd0c6919/merged
shm                   64M  8.0K   64M   1% /var/lib/docker/containers/69a1b32797ed1551ea714087c36b6133849cc236c78253541903b8b7744e2647/shm

[root@localhost Redmine_Service]# lsblk
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda           8:0    0  100G  0 disk 
├─sda1        8:1    0    1G  0 part /boot
└─sda2        8:2    0   99G  0 part 
  ├─cl-root 253:0    0   50G  0 lvm  /
  ├─cl-swap 253:1    0  3.9G  0 lvm  [SWAP]
  └─cl-home 253:2    0 45.1G  0 lvm  /home
sdb          8:16    0  200G  0 disk 
sr0          11:0    1  680M  0 rom 

[root@localhost Redmine_Service]# pvcreate /dev/sdb
  Physical volume "/dev/sdb" successfully created.

[root@localhost Redmine_Service]# vgextend cl /dev/sdb
  Volume group "cl" successfully extended

[root@localhost Redmine_Service]# lvextend /dev/cl/root /dev/sdb
  Size of logical volume cl/root changed from 50.00 GiB (12800 extents) to 250.00 GiB (63999 extents).
  Logical volume cl/root successfully resized.

[root@localhost Redmine_Service]# xfs_growfs /dev/cl/root 
meta-data=/dev/mapper/cl-root    isize=512    agcount=4, agsize=3276800 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=13107200, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=6400, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 13107200 to 65534976

[root@localhost Redmine_Service]# lvscan
  ACTIVE            '/dev/cl/swap' [3.88 GiB] inherit
  ACTIVE            '/dev/cl/home' [45.12 GiB] inherit
  ACTIVE            '/dev/cl/root' [250.00 GiB] inherit

[root@localhost Redmine_Service]# df -h
Filesystem           Size  Used Avail Use% Mounted on
/dev/mapper/cl-root  250G   40G  211G  16% /
devtmpfs             1.9G     0  1.9G   0% /dev
tmpfs                1.9G     0  1.9G   0% /dev/shm
tmpfs                1.9G  175M  1.7G  10% /run
tmpfs                1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/mapper/cl-home   46G   33M   46G   1% /home
/dev/sda1           1014M  140M  875M  14% /boot
tmpfs                378M     0  378M   0% /run/user/0
overlay              250G   40G  211G  16% /var/lib/docker/overlay2/bfa39cc306cc0e954c21c5edf1754b19d6a0bc000fb3fbdcdc98cbbecd0c6919/merged
shm                   64M  8.0K   64M   1% /var/lib/docker/containers/69a1b32797ed1551ea714087c36b6133849cc236c78253541903b8b7744e2647/shm

[root@localhost Redmine_Service]# lsblk
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda           8:0    0  100G  0 disk 
├─sda1        8:1    0    1G  0 part /boot
└─sda2        8:2    0   99G  0 part 
  ├─cl-root 253:0    0  250G  0 lvm  /
  ├─cl-swap 253:1    0  3.9G  0 lvm  [SWAP]
  └─cl-home 253:2    0 45.1G  0 lvm  /home
sdb           8:16   0  200G  0 disk 
└─cl-root   253:0    0  250G  0 lvm  /
sr0          11:0    1  680M  0 rom
```

------

## Shell操作总结

```shell
fdisk -l /dev/sda

fdisk -l /dev/sdb

df -h

lsblk

vgdisplay

pvcreate /dev/sdb

vgextend cl /dev/sdb

lvextend /dev/cl/root /dev/sdb

xfs_growfs /dev/cl/root 

lvscan

df -h

lsblk
```

------


> Thinking in JackDan