---
title: High Quality for screening & archival
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
  - Recommended style: reference the [best practices](/docs/best-practices/subtitles).

---

## Configuration

Follow along for setting up the options for your editing software

### DaVinci Resolve

:::steps

!!!step title="Setup"|(slot=description)=Go to the Deliver page and select the **Custom Export** preset at the top.|orientation="vertical"

!!!

!!!step title="Video Format"|(slot=description)=In the Video tab from the dropdown at _Format_ select **MXF OP1A**|orientation="vertical"

!!!

!!!step title="Video codec"|(slot=description)=From the dropdown at _Codec_ select **DNxHR**|orientation="vertical"

!!!

!!!step title="Codec Type"|(slot=description)=From the dropdown at _Type_ select **DNxHR HQX 10-bit**|orientation="vertical"

!!!

!!!step title="Resolution"|(slot=description)=Select the appropriate [resolution](/docs/best-practices/resolution) either from the drop-down or select Custom and type it in yourself.|orientation="vertical"

!!!

!!!step title="Subtitles"|(slot=description)=In the _Subtitle Settings_ at _Format_ select **Burn into video** from the drop-down.

<script>
  import DaVinciArchiveVideo from '$img/docs/DaVinciArchiveVideo.jpg'
</script>
<img src={DaVinciArchiveVideo} alt='Configuration for DaVinci Resolve video options'>
!!!

!!!step title="Check Audio Settings"|(slot=description)=Go to the audio tab. Make sure the _Sample Rate_ is at **48000**, and _Bit Depth_ at **24**.|orientation="vertical"

!!!

!!!step title="Audio Output"|(slot=description)=Select the appropriate output track for the export.

<script>
  import DaVinciArchiveAudio from '$img/docs/DaVinciArchiveAudio.jpg'
</script>
<img src={DaVinciArchiveAudio} alt='Configuration for DaVinci Resolve audio options'>
!!!

!!!step title="Render"|(slot=description)=Click _Add to Render Queue_ at the bottom. The render job will show up in the queue to the right. Once you have the jobs queued that you want, click the _Render All_ button.|orientation="vertical"

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

!!!step title="Step 4"|(slot=description)=From the dropdown at _Export As_ select: **MXF OP1A**|orientation="vertical"

!!!

!!!step title="Step 5"|(slot=description)=In the video section at _Video compression_ select: **DNxHR HQX Avid OP-Atom**|orientation="vertical"

!!!

!!!step title="Step 6"|(slot=description)=In the audio section make sure the _Sampling rate_ is at **48000**, _Bits per sample_ is **24**, _interleaved_ is ✅ **checked**, and select _Mix_ according to the provided sound mix.|orientation="vertical"

!!!

!!!step title="Step 7"|(slot=description)=At last click _Save_ and _Export_ the film.|orientation="vertical"

!!!
:::

### Adobe Premiere Pro

:::steps

!!!step title="Setup export"|(slot=description)=Go to File -> Export -> Media or press the shortcut <kbd>CTRL</kbd> + <kbd>M</kbd>.<br><br>Click the filename at _Output Name_ and select the export location and filename of the export.|orientation="vertical"

!!!

!!!step title="Video format"|(slot=description)=In the dropdown at _Format_ select DNxHR/DNxHD MXF OP1a

<script>
  import PremiereVideo1 from '$img/docs/PremiereVideo1.png'
</script>
<img src={PremiereVideo1} alt='Premiere Pro format setting'>

!!!

!!!step title="URSA video settings"|(slot=description)=Select the _Preset_ **DNxHR HQX 2K 25** if you filmed on the BMD URSA G2.|orientation="vertical"

!!!

!!!step title="C100 video settings"|(slot=description)=If you filmed on the Canon EOS C100, select the _Preset_ **DNX HQ 1080p 25**. Next go to the video section below and change _Resolution_ to **DNxHR HQ 8-bit**.

<script>
  import PremiereVideo2 from '$img/docs/PremiereVideo2.png'
</script>
<img src={PremiereVideo2} alt='Premiere Pro preset setting'>

!!!

!!!step title="Audio settings"|(slot=description)=In the Audio tab, select the amount of channels that you have.<br>That would usually be:<br>2 channels for stereo<br>6 channels for surround sound<br><br>Make sure the _Sample Size_ is **24 bit**.

<script>
  import PremiereAudio1 from '$img/docs/PremiereAudio1.png'
</script>
<img src={PremiereAudio1} alt='Premiere Pro audio setting'>

!!!

!!!step title="Subtitles"|(slot=description)=Go to subtitles and Captions tab and select the format to be burn in.|orientation="vertical"

!!!

!!!step title="Export"|(slot=description)=At last click _Save_ and _Export_ the film.|orientation="vertical"

!!!
:::
