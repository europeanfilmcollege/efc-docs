---
title: High Quality version for archival and screening
description: A version is needed for high quality screenings and archival. New exports can also be made from this version.
---

# {$frontmatter.title}

{$frontmatter.description}

## Options

- Format: MXF OP1A
- Video
  - Codec: DNxHR HQX 10 bit (for films shot with the Canon EOS C100 select DNxHR HQ 8 bit)
  - Resolution: the resolution that best fits the film's aspect ratio. See the [resolution](/docs/best-practices/resolution) section for more information.
- Audio
  - Codec: PCM
  - Sample Rate: 48000
  - Bit Depth: 24
  - Channels: if a surround sound version exists choose that, if not then export the stereo version.

You need to create a version with subtitles burned in, and one without any subtitles and titles or credits overlaying any footage.
- Subtitles
  - Format: Burn into video
  - Recommended style: reference  the [best practices](/docs/best-practices/subtitles).

----------------------------------------------------------------

## Configuration

Follow along for setting up the options for your editing software

### DaVinci Resolve

:::steps

!!!step title="Setup"|(slot=description)=Go to the Deliver page and select the **Custom Export** preset at the top.|orientation="vertical"


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

!!!step title="Step 1"|description="Go to File -> Export or right-click the timeline in the bin and click Export, and choose the export location"|orientation="vertical"


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
:::steps

!!!step title="Setup export"|(slot=description)=Go to File -> Export -> Media or press the shortcut <kbd>CTRL</kbd> + <kbd>M</kbd>.<br><br>Click the filename at *Output Name* and select the export location and filename of the export.|orientation="vertical"


!!!

!!!step title="Video format"|(slot=description)=In the dropdown at *Format* select DNxHR/DNxHD MXF OP1a

![Premiere Pro format setting](/src/img/docs/PremiereVideo1.png)

!!!

!!!step title="URSA video settings"|(slot=description)=Select the *Preset* **DNxHR HQX 2K 25** if you filmed on the BMD URSA G2.|orientation="vertical"

!!!

!!!step title="C100 video settings"|(slot=description)=If you filmed on the Canon EOS C100, select the *Preset* **DNX HQ 1080p 25**. Next go to the video section below and change *Resolution* to **DNxHR HQ 8-bit**.

![Premiere Pro preset setting](/src/img/docs/PremiereVideo2.png)

!!!

!!!step title="Audio settings"|(slot=description)=In the Audio tab, select the amount of channels that you have.<br>That would usually be:<br>2 channels for stereo<br>6 channels for surround sound<br><br>Make sure the *Sample Size* is **24 bit**.

![Premiere Pro audio setting](/src/img/docs/PremiereAudio1.png)

!!!

!!!step title="Subtitles"|(slot=description)=Go to subtitles and Captions tab and select the format to be burn in.|orientation="vertical"

!!!

!!!step title="Export"|(slot=description)=At last click *Save* and *Export* the film.|orientation="vertical"

!!!
:::