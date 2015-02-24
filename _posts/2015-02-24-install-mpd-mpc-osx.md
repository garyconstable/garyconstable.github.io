---
layout: post
title: How to install MPC MPD on mac osx Yosemite (10.10.2)
---

### Install via Homebrew

```
brew install mpd
brew install mpc
```

### MPD Config File

Create a file called ~/.mpdconf and add the following:

```
music_directory         "~/Music"
playlist_directory              "~/.mpd/playlists"
db_file                 "~/.mpd/database"
pid_file                        "~/.mpd/pid"
state_file              "~/.mpd/state"
sticker_file                    "~/.mpd/sticker.sql"
port                            "6600"
auto_update     "yes"
audio_output {
        type            "osx"
        name            "My Mac Device"
        mixer_type      "software"
}
```

### Create Directories

```
mkdir ~/.mpd
mkdir ~/.mpd/playlists
touch ~/.mpd/database
```
