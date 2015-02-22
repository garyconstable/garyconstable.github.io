---
layout: post
title: How to install MPC MPD on Beaglebone black, with a USB Soundcard
---

I have to admitm this was a bitch to get going! somewhere along the way I bricked the beaglebone, but dont let that out you off, if something does go wrong Just re flash your bone!

### Install ALSA
My beaglebone is running debian, I installed ALSA with the following command:

```
apt-get install alsa-base alsa-utils
```

### Enable a USB soundcard

To enable a usb soudcard, the bones HDMI card needs to be turned off to do this will will be editing the uEnv.txt file.

```
nano /boot/uboot/uEnv.txt
```

Find and un comment the following lines:

```
##Audio Cape (needs HDMI Audio disabled)
cape_disable=capemgr.disable_partno=BB-BONELT-HDMI
cape_enable=capemgr.enable_partno=BB-BONE-AUDI-02
```

Next edit you alsa config to load the usb soundcard as device 0.

```
sudo nano /etc/modprobe.d/alsa-base.conf
```

Find the following line, un comment and set the index as 0.

```
# Keep snd-usb-audio from beeing loaded as first soundcard
options snd-usb-audio index=0
```

### Reboot and verify soundcard works

Once your system has rebooted, verify that your usb soundcard had been installed and the system can see it, use the aplay -l command:

```
aplay -l
```

Hopefully you will see something similar to:

```
**** List of PLAYBACK Hardware Devices ****
card 0: Device [USB PnP Sound Device], device 0: USB Audio [USB Audio]
  Subdevices: 0/1
  Subdevice #0: subdevice #0
```

You can also test a file, with the command:

```
aplay /path/to/your/file.wav 
```

