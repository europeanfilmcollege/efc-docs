---
title: Web Delivery
description: Page description.
---

# {$frontmatter.title}

{$frontmatter.description}

## Options

- Format: Quicktime
- Video:
  - Codec: H265 (HVEC)
  - Resolution: the native resolution of film's aspect ratio with a max width of 2048px and a max height of 1080px. See the [Resolution](/docs/best-practices/resolution) section for more information.
  - Quality: Best
  - Encoding Profile: Main10
- Audio:
  - Codec: AAC
  - Data Rate: 192 Kb/s for stereo
  - Sample Rate: 48000
  - Channels: Stereo (if a stereo mix doesn't exist reference the [sound section](/docs/best-practices/sound)).
- Subtitles check the section on [subtitles](/docs/best-practices/subtitles):
  - Format: As a separate file
  - Export As: WebVTT

----------------------------------------------------------------

## Configuration

Follow along for setting up the options for your editing software

### DaVinci Resolve

:::steps

!!!step title="Setup"|(slot=description)=Go to the Deliver page and select the **Custom Export** preset at the top.


!!!

!!!step title="Video Format"|(slot=description)=In the Video tab from the dropdown at *Format* select **MXF OP1A**|orientation="vertical"


!!!

!!!step title="Video codec"|(slot=description)=From the dropdown at *Codec* select **DNxHR**|orientation="vertical"


!!!

!!!step title="Codec Type"|(slot=description)=From the dropdown at *Type* select **DNxHR HQX 10-bit**|orientation="vertical"


!!!

!!!step title="Resolution"|(slot=description)=Select the appropriate [resolution](/docs/best-practices/resolution) either from the drop-down or select Custom and type it in yourself.|orientation="vertical"

!!!

!!!step title="Subtitles"|(slot=description)=In the *Subtitle Settings* at *Format* select **Burn into video** from the drop-down.|orientation="vertical"

![Configuration for DaVinci Resolve video options](/src/img/docs/DaVinciArchiveVideo.jpg)
!!!

!!!step title="Check Audio Settings"|(slot=description)=Go to the audio tab. Make sure the *Sample Rate* is at **48000**, and *Bit Depth* at **24**.|orientation="vertical"


!!!
!!!step title="Audio Output"|(slot=description)=Select the appropriate output track for the export.|orientation="vertical"

![Configuration for DaVinci Resolve audio options](/src/img/docs/DaVinciArchiveAudio.jpg)
!!!

!!!step title="Render"|(slot=description)=Click *Add to Render Queue* at the bottom. The render job will show up in the queue to the right. Once you have the jobs queued that you want, click the *Render All* button.|orientation="vertical"

!!!
:::


### AVID Media Composer

:::steps

!!!step title="Step 1"|description="Go to File -> Export and choose the export location"|orientation="vertical"


!!!
!!!step title="Step 2"|description="Select the preset SPRING EXPORT"


!!!
!!!step title="Step 3"|description="Check the options"


!!!
!!!step title="Step 4"|(slot=description)=From the dropdown at *Export As* select: **MXF OP1A**|orientation="vertical"

!!!
!!!step title="Step 5"|(slot=description)=In the video section at *Video compression* select: **DNxHR HQX  Avid OP-Atom**|orientation="vertical"

!!!
!!!step title="Step 6"|(slot=description)=In the audio section make sure *Sampling rate* is at **48000**, *Bits per sample* is **24**, *interleaved* is :white_check_mark: checked, and select *Mix* according to the provided sound mix.|orientation="vertical"

!!!
!!!step title="Step 7"|(slot=description)=At last click *Save* and *Export* the film.|orientation="vertical"

!!!
:::

### Adobe Premiere Pro
...