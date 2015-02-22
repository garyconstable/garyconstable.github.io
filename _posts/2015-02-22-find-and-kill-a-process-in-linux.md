---
layout: post
title: How to find and kill a process in Linux
---


Just a quick one, how to find a process and kill it! When CTRL + ALT +DELETE wont do!

### Find a process.

to find a process the ps command can be used, with the user switch, 
for example the following command will list processes by the root user. 

```
ps -u root
```

### Kill a Process.

With the ps command run we should have a similar output to:

```
  898 ?        00:00:00 file-storage
  908 ?        00:00:00 apache2
  917 ttyGS0   00:00:13 agetty
  924 ?        00:00:00 udevd
  961 ?        00:00:00 udevd
 1048 ?        00:00:00 udhcpd
 1094 ?        00:00:00 lightdm
 1126 ?        00:00:08 wicd
 1159 ?        00:00:03 wicd-monitor
 1176 ?        00:00:00 udisks-daemon
 1177 ?        00:00:00 udisks-daemon
 1262 ?        00:00:00 dhclient
 1285 ?        00:00:00 sshd
 1294 pts/0    00:00:00 bash
 ```
The first colum is the PID (process ID). If I wanted to kill lightdm I would use the following command:

```
sudo kill -9 1094
```

Thats it find and kill!
