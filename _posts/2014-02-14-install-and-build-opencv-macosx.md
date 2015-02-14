---
layout: post
title: Install and Build OpenCv MacOSX
---

##About this Guide
There are lots of posts on the internet on how to do install opencv, most would seem out of date or just do not work, this is how I instlled opencv on OSX Yosemite 10.10.2

##You will need
+ OSX
+ XCODE
+ CMAKE
+ OpenCv

##Install Steps
1. Install XCODE and CMake.
2. Download and extract OpenCv to a folder of your choice, your desktop will do.
3. Open CMake.
4. Click Browse Source and navigate to your openCV folder.
5. Click Browse Build and navigate to your StaticLib Folder.
6. Click the configure button. You will be asked how you would like to generate the files. Choose Unix-Makefile from 7. the Drop Down menu and Click OK. CMake will perform some tests and return a set of red boxes appear in the CMake Window.
7. Uncheck BUILD_SHARED_LIBS
8. Uncheck BUILD_TESTS
9. Add an SDK path to CMAKE_OSX_SYSROOT, it will look something like this “/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.9.sdk”.
10. Add x86_64 to CMAKE_OSX_ARCHITECTURES, this tells it to compile against the current system
11. Uncheck WITH_1394
12. Uncheck WITH_FFMPEG

