# Nginx

![Nginx](./images/NGINX-Logo-White-Endorsement-RGB.svg)

## 配置文件说明

```shell
# 定义Nginx运行的用户和用户组
user www www;

# nginx进程数, 建议设置为等于CPU总核心数
worker_processes 8;

# 全局日错误志定义类型[ debug | info | notice | warn | error | crit ]
error_log /var/log/nginx/error.log info;

# 进程文件
pid /var/run/nginx.pid;

```

```shell
# centos7下可以看下用户和用户组信息的方法
[root@localhost ~]# users
root
[root@localhost ~]# groups
root

# centos7下第二种查看用户和用户组信息的方法
[root@localhost ~]# ls -al
[root@localhost ~]# ls -al
total 28000192
dr-xr-x---. 41 root     root            4096 Sep  5 13:14 .
dr-xr-xr-x. 18 root     root             256 Mar 19 14:34 ..
#文件操作权限 用户名 用户组            文件大小 更新日期 ..(目录)

# Centos7下查看CPU总核心数
# CPU的解释
# CPU个数即CPU芯片个数
# CPU的核心数是指物理上，也就是硬件上存在着几个核心。比如，双核就是包括2个相对独立的CPU核心单元组，四核就包含4个相对独立的CPU核心单元组。
# 线程数是一种逻辑的概念，简单地说，就是模拟出的CPU核心数。比如，可以通过一个CPU核心数模拟出2线程的CPU，也就是说，这个单核心的CPU被模拟成了一个类似双核心CPU的功能。我们从任务管理器的性能标签页中看到的是两个CPU。 比如Intel赛扬G460是单核心-双线程的CPU，Intel酷睿i3 3220是双核心-四线程，Intel酷睿i7-4770K是四核心-八线程，Intel 酷睿i5-4570是四核心-四线程等等。对于一个CPU，线程数总是大于或等于核心数的。一个核心最少对应一个线程，但通过超线程技术，一个核心可以对应两个线程，也就是说它可以同时运行两个线程。 
# CPU的线程数概念仅仅只针对Intel的CPU才有用，因为它是通过Intel超线程技术来实现的，最早应用在Pentium4上。如果没有超线程技术，一个CPU核心对应一个线程。所以，对于AMD的CPU来说，只有核心数的概念，没有线程数的概念。 

[root@localhost ~]# cat /proc/cpuinfo
processor	: 0
vendor_id	: GenuineIntel
cpu family	: 6
model		: 58
model name	: Intel(R) Xeon(R) CPU E3-1225 V2 @ 3.20GHz
stepping	: 9
microcode	: 0x20
cpu MHz		: 3199.968
cache size	: 8192 KB
physical id	: 0
siblings	: 1
core id		: 0
cpu cores	: 1
apicid		: 0
initial apicid	: 0
fpu		: yes
fpu_exception	: yes
cpuid level	: 13
wp		: yes
flags		: fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx rdtscp lm constant_tsc arch_perfmon nopl xtopology tsc_reliable nonstop_tsc pni pclmulqdq vmx ssse3 cx16 pcid sse4_1 sse4_2 x2apic popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm arat tpr_shadow vnmi ept vpid fsgsbase tsc_adjust smep
bogomips	: 6402.00
clflush size	: 64
cache_alignment	: 64
address sizes	: 43 bits physical, 48 bits virtual
power management:

```