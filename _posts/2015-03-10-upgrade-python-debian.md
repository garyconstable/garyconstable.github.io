---
layout: post
title: Upgrade - Install Python Debian (Beaglebone Black)
---

### Install Build Essentials

```
sudo apt-get install build-essential
sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev
```

### Download Python

```
cd ~
wget https://www.python.org/ftp/python/2.7.9/Python-2.7.9.tgz
```

### Extract and go to directory

```
tar -xvf Python-2.7.5.tgz
cd Python-2.7.5
```

### Install Python

```
./configure
make
sudo make install
```

### Change default Python version

```
nano ~/.bashrc 
alias python='/usr/local/bin/python2.7'
```

### Install Setup tools / easy_install

```
wget https://bootstrap.pypa.io/ez_setup.py -O - | python
```
