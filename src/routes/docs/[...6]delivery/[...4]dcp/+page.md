---
title: DCP
description: Digital Cinema Package - for screening in cinemas and at festivals.
---

<span class="wip">WIP</span>

# {$frontmatter.title}

{$frontmatter.description}

The DCP format is a special format for cinema screenings. The DCP will be used for the screening of your project here at EFC. DCP files are also a common additional format to deliver to film festivals. It’s recommended to export DCPs from DaVinci Resolve. They can only be exported from DaVinci Resolve Studio, not the free version, and AVID Media Composer and Premiere Pro do not support export of DCPs.

If you are finishing your project in AVID Media Composer or Adobe Premiere Pro, then use the [DNxHR-HQX export with subtitles](/docs/delivery/hq), and import it into DaVinci Resolve. Set the settings in the project settings > Master Settings to match your export’s resolution.

## How to export a DCP from DaVinci Resolve

:::steps

!!!step title="Video setup"|description="Go to the Delivery page."

!!!
!!!step title="Video Format"|(slot=description)=Select the Format **DCP** from the dropdown.|orientation="vertical"

!!!
!!!step title="DCP Codec"|(slot=description)=Select the Codec **Kakadu JPEG 2000**.|orientation="vertical"

!!!
!!!step title="DCP Type"|(slot=description)=Select the Type **2K DCI Flat** or **2K DCI Scope** depending on your films needs. See [Resolution](/docs/best-practices/resolution) for more info.|orientation="vertical"

!!!
!!!step title="DCP Bitrate"|(slot=description)=Make sure the bitrate is under 250 Mbit/sec. Most projectors don't support bitrates above 250 Mbit/sec. For safety set it to **240 Mbit/sec**.|orientation="vertical"

!!!
!!!step title="Composition Settings Setup"|(slot=description)=For DCPs it's required to write several details about the film. For starters open up the _Composition Settings_ and write your name in the _Issuer_ field.|orientation="vertical"

!!!
!!!step title="Content Kind"|(slot=description)=Next select the kind of content that you are exporting at the Content Kind field. That will probably be **SHR - Short**.|orientation="vertical"

!!!
!!!step title="Composition Name"|(slot=description)=Click the _Edit_ button next to the _Composition Name_ field, and fill out the field according to the follow information. Once you're done click _OK_.|orientation="vertical"
| Field | Description |
| ----- | ----------- |
| Film Title | The film’s title, limited to 14 characters.<br>Therefore don’t use spaces but WriteTheTitleLikeThis.<br>If there still aren't enough characters for the film title, make an abbreviation<br>by either cutting something off or using the first letter of<br>each word escaping words like: and, of, by, the, etc. |
| Content Version | The version of the export. Most likely **1** |
| Audio Language | The primary spoken language of the film. If none select custom and write **XX** |
| Subtitle Language | The subtitle language, likely **EN (English)**. If none select custom and write **XX** |
| Audio Type | Select the according to the provided sound mix |
| Resolution | **2K** |
| Include date | ✅ |
| Standard | **SMPTE** |
| Package Type | **OV** |

<script>
  import DCPComp from '$img/docs/DCPComp.png'
</script>
<img src={DCPComp} alt='DCP Composition Name options'>
!!!

!!!step title="Subtitle setup"|(slot=description)=If you are using subtitles, make sure the subtitle format is set to **Burn into video**.|orientation="vertical"

!!!
!!!step title="Audio setup"|(slot=description)=Select the following options on the audio tab.<br>Codec: **PCM**<br>Sample Rate: **48000**<br>Configuration: **Wild Track Format**<br><br>And make sure the correct output bus is selected at _Output Track 1_. Ideally this would be in surround sound. If you are exporting stereo, you'll get a warning message on export, but you can just ignore it and continue the export.|orientation="vertical"

!!!
!!!step title="Filename setup"|(slot=description)=Go to the _File_ tab, and at _Package name uses_, select the option **Composition name**|orientation="vertical"

!!!
!!!step title="Export"|(slot=description)=Select the location for the export at the top, and click _Add to Render Queue_ at the bottom.<br>Next to the the section to the left and click _Render All_.<br>You'll notice that the colours will look quite weird. This is normal and the file will look correct once played back.|orientation="vertical"

!!!

:::

The output will be a folder titled the composition name. This folder contains all the files needed to play back the file.

To verify and playback the DCP after it has been exported use the Media page in Resolve and it will show up as a normal video file.
