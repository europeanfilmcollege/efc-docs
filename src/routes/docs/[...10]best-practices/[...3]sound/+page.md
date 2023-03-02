---
title: Sound
description: Details on sound
---

# {$frontmatter.title}

{$frontmatter.description}

The channel order of surround sound exports must adhere to the ITU standard. That being the channels following this order: **L R C LFE Ls Rs**. For DaVinci Resolve this channel order is called 5.1. You need to make sure that the surround sound mix is located on a surround sound track and that the Main Audio Bus is also set up for surround sound.

## How to make a surround sound mix into stereo in DaVinci Resolve

After the project is set up for surround sound, we can add another bus for stereo exports.

:::steps

!!!step title="Step 1"|(slot=description)=Change to the Fairlight page.|orientation="vertical"


!!!

!!!step title="Step 2"|(slot=description)=Go to the top bar, select Fairlight, then, Bus Format.


!!!

!!!step title="Step 3"|(slot=description)=Add a new bus and set the format to Stereo. Make sure to give the surround sound and stereo busses descriptive names.

![Audio bus setting](/src/img/docs/SurroundStereo1.png)

!!!

!!!step title="Step 4"|(slot=description)=In the mixer window, find your 5.1 bus and in the *Bus Outputs* section click the plus and add the stereo bus you just made.

![Make surround sound bus to output to stereo bus](/src/img/docs/SurroundStereo2.jpg)

!!!

!!!step title="Step 5"|(slot=description)=You should now have audio playing in the stereo bus. You can monitor that bus by changing to it by selecting it from the dropdown at the video player on the Fairlight page.

![Select stereo bus for monitoring](/src/img/docs/SurroundStereo3.png)

!!!

!!!step title="Step 6"|(slot=description)=Now on the Delivery page under Audio settings you can select the stereo bus for the web delivery.

![Select stereo bus for output](/src/img/docs/SurroundStereo4.png)

!!!

:::