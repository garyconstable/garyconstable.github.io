---
layout: post
title: How to install MPC MPD on Beaglebone black, with a USB Soundcard
---

I have to admitm this was a bitch to get going! somewhere along the way I bricked the beaglebone, but dont let that out you off, if something does go wrong Just re flash your bone!


##How to setup a USB Soundacrd


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

## Installing MPC, MOD

The next part if fairly simple the package manager can install the packages.

```
apt-get install mpc mpd
```

### MPD config 

Next edit the MPD config file.

```
sudo nano /etc/mpd.conf
```

Set the user and group:

```
user                            "mpd"
#
# This setting specifies the group that MPD will run as. If not specified
# primary group of user specified with "user" setting will be used (if set).
# This is useful if MPD needs to be a member of group such as "audio" to
# have permission to use sound card.
#
group                          "audio"
```

Setup the output device:

```
# Audio Output ################################################################
#
# MPD supports various audio output types, as well as playing through multiple
# audio outputs at the same time, through multiple audio_output settings
# blocks. Setting this block is optional, though the server will only attempt
# autodetection for one sound card.
#
# See <http://mpd.wikia.com/wiki/Configuration#Audio_Outputs> for examples of
# other audio outputs.
#
# An example of an ALSA output:
#
audio_output {
        type            "alsa"
        name            "My ALSA Device"
        device          "hw:0,0"        # optional
        format          "44100:16:2"    # optional
#       mixer_device    "default"       # optional
#       mixer_control   "PCM"           # optional
#       mixer_index     "0"             # optional
}
```

Setup the mixer, for my soundcard and beagle bone, the software mixer works.

```
# Volume control mixer ########################################################
#
# These are the global volume control settings. By default, this setting will
# be detected to the available audio output device, with preference going to
# hardware mixing. Hardware and software mixers for individual audio_output
# sections cannot yet be mixed.
#
# An example for controlling an ALSA, OSS or Pulseaudio mixer; If this
# setting is used other sound applications will be affected by the volume
# being controlled by MPD.
#
#mixer_type                     "hardware"
#
# An example for controlling all mixers through software. This will control
# all controls, even if the mixer is not supported by the device and will not
# affect any other sound producing applications.
#
mixer_type                      "software"
#
# This example will not allow MPD to touch the mixer at all and will disable
# all volume controls.
#
#mixer_type                     "disabled"
#
###############################################################################
```

Thats pretty much it!

There is a log file, it will help:

```
cat /var/log/mpd/mpd.log
```

If all working the following command should work.

```
mpc volume 50
```

### Lets hear some music!

```
sudo mpc add http://uwstream3.somafm.com:6200
```

```
mpc play
```

It looks easier when i write it down!

