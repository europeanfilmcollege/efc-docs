---
title: Web Delivery
description: A compressed version for playback on the web is also needed.
---

# {$frontmatter.title} <span style="background-color:#ff0033; margin-left:16px; padding:4px 8px; border-radius:.3rem;">WIP</span>

{$frontmatter.description}

## Options

- Format: Quicktime
- Video
  - Codec: H265 (HVEC)
  - Resolution: the native resolution of film's aspect ratio with a max width of 2048px and a max height of 1080px. See the [resolution](/docs/best-practices/resolution) section for more information.
  - Quality: Best
  - Encoding Profile: Main10
- Audio
  - Codec: AAC
  - Data Rate: 192 Kb/s for stereo
  - Sample Rate: 48000
  - Channels: Stereo (if a stereo mix doesn't exist reference the [sound section](/docs/best-practices/sound)).
- Subtitles (check the section on [subtitles](/docs/best-practices/subtitles))
  - Format: As a separate file
  - Export As: WebVTT

----------------------------------------------------------------

## Configuration

Follow along for setting up the options for your editing software

### DaVinci Resolve


### AVID Media Composer

:::steps

!!!step title="Step 1"|description="Go to File -> Export or right-click the timeline in the bin and click Export, and choose the export location"|orientation="vertical"


!!!
!!!step title="Step 2"|description="Select the preset WEB EXPORT"


!!!
!!!step title="Step 3"|description="Check the options"


!!!
!!!step title="Step 4"|(slot=description)=From the dropdown at *Export As* select: **MOV**|orientation="vertical"

!!!
!!!step title="Step 5"|(slot=description)=In the video section at *Video compression* select: **H265**|orientation="vertical"

!!!
!!!step title="Step 6"|(slot=description)=In the audio section make sure *Sampling rate* is at **48000**, *Bits per sample* is **24**, *interleaved* is :white_check_mark: checked, and select *Mix* according to the provided sound mix.|orientation="vertical"

!!!
!!!step title="Step 7"|(slot=description)=At last click *Save* and *Export* the film.|orientation="vertical"

!!!
:::

### Adobe Premiere Pro
...