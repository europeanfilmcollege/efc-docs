---
title: Creating proxies
description: When shooting in high-quality video formats or highly compressed formats, it can be difficult to edit the material. The solution is to create proxies for the footage. Proxies are versions of the original footage with lower resolution and in an edit-friendly codec.
---

<span class="wip">WIP</span>

# {$frontmatter.title}

{$frontmatter.description}

DaVinci Resolve is a great software for creating proxies.

## Creating proxies with DaVinci Resolve (Colour Managed)

:::steps

!!!step title="Project Creation"|orientation="vertical"
First go ahead and open up DaVinci Resolve and create a new project for your film.
!!!

!!!step title="Project Settings"|orientation="vertical"
Open up the Project Settings and make the _Master Settings_ match the settings for the camera.

If you for example shot in a resolution of 4096x2160 pixels and 25 fps, then select that here. At this moment we don't care about the aspect ratio or output resolution of the film. We just need to get the footage into the project. However, if you shot at a high resolution of 4K or greater, then you could choose to divide the resolution down to get it to 2K as the timeline resolution.

!!!

!!!step title="Colour Management"|orientation="vertical"
Set up the colour management for your project according to the camera configuration used. See the section on [colour management](/docs/grading-setup/colour-management).

!!!

!!!step title="Bin setup"|orientation="vertical"
Set up a bin structure that you like. You need to have a bin for each reel. A001, A002, etc.

!!!

!!!step title="Ingesting Media"|orientation="vertical"
Import the media into your project by drag and drop or by going to the Media Page.

On the Media Page in the Media Storage section to the top left, find the folder containing the reels.
The bin for the reels can be automatically created by selecting the folders, right-clicking and selecting the option _Add Folders and SubFolders into Media Pool (Create Bins)_. Make sure that you have navigated to the destination bin to where you want the reels to be added.

!!!

!!!step title="Creating Timeline"|orientation="vertical"
Right-click the bin for the reel and select _Create New Timeline Using Selected Bin_. Give the timeline the same name as the reel, and click _Create_. All the takes of the reel should populate the timeline. Repeat the following and this step until you have a timeline for each reel.

!!!

!!!step title="Proxy Export Settings"|orientation="vertical"

1. Go to the Deliver page.
2. Start by selecting **Individual clips** as the render method at the top of the section to the left.
3. On the _Video_ tab, select the format **MXF OP1A**. This format is native to AVID Media Composer, which means that the files don't need any processing before editing.
4. Select the Codec **DNxHR** and the Type **DNxHR LB**.
5. Make sure the resolution is in the realm of 2K. Examples could be 2048x1080, 2048x1152, 1920x1080 and similar.
6. Go to the _Audio_ tab, and make sure the Sample Rate is at **48000**, and the Bit Depth is at **16**. However, if you plan on using the audio from the camera, select a Bit Depth of 24 instead.
7. Go to the _File_ tab, and at _Filename uses_ select **Source name**. This will ensure that proxy files keep the same name as the originals so they easily can be relinked to the originals at export.
8. In the _File subfolder_ field, write **%timeline name** and press <kbd>ENTER</kbd>. This will automatically create a folder with the name of the timeline, for the export of the proxies.

It'd be a good idea to save these settings as a preset. You can do that by clicking on the three vertical dots at the top of the _Render Settings_ section. In the dropdown, select **Save As New Preset** and give it a name. Next time you can just select this preset, but check the settings, especially resolution as some settings are not saved in the preset.
!!!

!!!step title="Proxies Export Location"|orientation="vertical"
Go to the top of the section to the left and click _Browse_. Create a folder called **Proxies** in your film project directory and click _Select Folder_. It's recommended that the originals and the export location of the proxies are located on two storage mediums. For example, an external hard drive and your AVID NEXIS workspace. Rendering the proxies will be quite faster doing it this way.

!!!
!!!step title="Queue Proxies Export"|orientation="vertical"
Click **Add to Render Queue** at the bottom of the section to the left.

!!!
!!!step title="Start Proxies Render"|orientation="vertical"
Once you have added all the reels to the render queue, click **Render All** in the _Render Queue_ section to the right. You can also do one reel at a time.
!!!
:::
