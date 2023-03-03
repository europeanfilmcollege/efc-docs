---
title: Web Delivery
description: A compressed version for playback on the web is also needed.
---

<span class="wip">WIP</span>

# {$frontmatter.title}

{$frontmatter.description}

## Options

- Format: Quicktime
- Video
  - Codec: H265 (HEVC)
  - Resolution: the native resolution of the film's aspect ratio with a max width of 2048px and a max height of 1080px. See the [resolution](/docs/best-practices/resolution) section for more information.
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

---

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
!!!step title="Step 4"|(slot=description)=From the dropdown at _Export As_ select: **MOV**|orientation="vertical"

!!!
!!!step title="Step 5"|(slot=description)=In the video section at _Video compression_ select: **H265**|orientation="vertical"

!!!
!!!step title="Step 6"|(slot=description)=In the audio section make sure the _Sampling rate_ is at **48000**, _Bits per sample_ is **24**, _Interleaved_ is ✅ **checked**, and select _Mix_ according to the provided sound mix.|orientation="vertical"

!!!
!!!step title="Step 7"|(slot=description)=At last click _Save_ and _Export_ the film.|orientation="vertical"

!!!
:::

### Adobe Premiere Pro

...
