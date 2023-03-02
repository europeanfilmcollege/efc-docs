---
title: Transferring material
description: Page description
---
<span class="wip">WIP</span>
# {$frontmatter.title}

{$frontmatter.description}

## Data handling

It's very important to always have at least two copies of your material. Ideally you should follow the 3:2:1 rule that says the following:
- 3 copies of data
- On 2 different media (e.g one being an SSD, the other a server)
- 1 being off-site (an other location than the 2 other copies)

## Transferring the material

When transferring the material from the SD cards to your harddrives, you want to make sure that you can trust the transfer you are doing. A transfer using the operating systems built-in drag and drop or copy and paste utility. If the connection to the SD card or disk is lost for a short moment, it's quite possible that a part of a file that was being transferred at that moment would be corrupted.

The solution to this problem is to use a file transfer program that used checksum verification. You can imaging a checksum as a unique fingerprint for a file. If the file at the destination has a different fingerprint than the one at the source media, then it is a red flag and we'll know that the file didn't tranfer correctly. Even if the filename of the file has changed, the fingerprint of the file won't be the same anymore.

There are two great free software for transferring files safely with checksum verification, that I would recommend.

### TeraCopy

TeraCopy is a free program for file transferring, that supports file verification. It usally also copies files faster than a regular file transfer. It can be downloaded [here](https://www.codesector.com/teracopy) for both Windows and MacOS.

### DaVinci Resolve's Clone Tool

Another great option is DaVinci Resolve. If you don't already have it installed you can get it [here](https://www.blackmagicdesign.com/products/davinciresolve) for Windows, MacOS, and Linux.

On the Media Page there's a great tool for copying material from cards to your disks. A nice feature about this tool is that it can copy to two destinations at the same time without reading from the card another time for each destination you are transferring to. However if you are using a harddrive together with a fast SSD it might be a good idea to spilt the transfer up, as it will be slowest drive that determines the transfer speed.