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
3. Create two new folders inside of the openCV directory, one called StaticLibs and the other SharedLibs.

###StaticLibs
1. Open CMake.
2. Click Browse Source and navigate to your openCV folder.
3. Click Browse Build and navigate to your StaticLib Folder.
4. Click the configure button. You will be asked how you would like to generate the files. Choose Unix-Makefile from 7. the Drop Down menu and Click OK. CMake will perform some tests and return a set of red boxes appear in the CMake Window.
5. Uncheck BUILD_SHARED_LIBS
6. Uncheck BUILD_TESTS
7. Add an SDK path to CMAKE_OSX_SYSROOT, it will look something like this “/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.9.sdk”.
8. Add x86_64 to CMAKE_OSX_ARCHITECTURES, this tells it to compile against the current system
8. Uncheck WITH_1394
10. Uncheck WITH_FFMPEG
11. Click Configure again, then Click Generate.

```
- cd <path/to/your/opencv/staticlibs/folder/>
- make (This will take awhile)
- sudo make install
```
###SharedLibs

1. Open CMake.
2. Click Browse Source and navigate to your openCV folder.
3. Click Browse Build and navigate to your SharedLib Folder.
4. Click the configure button. You will be asked how you would like to generate the files. Choose Unix-Makefile from the Drop Down menu and Click OK. CMake will perform some tests and return a set of red boxes appear in the CMake Window.
5. Check BUILD_SHARED_LIBS
6. Uncheck BUILD_TESTS
7. Add an SDK path to CMAKE_OSX_SYSROOT, it will look something like this “/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.9.sdk”.
8. Add x86_64 to CMAKE_OSX_ARCHITECTURES, this tells it to compile against the current system
9. Uncheck WITH_1394
10. Uncheck WITH_FFMPEG
11. Click Configure again, then Click Generate.

```
- cd <path/to/your/opencv/SharedLibs/folder/>
- make (This will take awhile)
- sudo make install
```


There you go, OpenCv should now be installed. 
