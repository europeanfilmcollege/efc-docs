---
title: Colour Management
description: To get good colour management setup in DaVinci Resolve, navigate to the Project Settings, and go to Color Management.
---

<span class="wip">WIP</span>

# {$frontmatter.title}

<!-- {$frontmatter.description} -->

To get good colour management setup in DaVinci Resolve, navigate to the Project Settings, and go to _Color Management_. Change the settings to the following:

| Setting                                                                            | Selection                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Color Science                                                                      | DaVinci YRGB Color Managed                                          |
| Automatic Colour Management                                                        | ❌                                                                  |
| Color processing mode                                                              | Custom                                                              |
| Use separate color space and gamma                                                 | ✅                                                                  |
| Input color space<br>_If majority of footage is shoot on the **BMD URSA 4.6K G2**_ | Blackmagic Design Wide Gamut Gen 4/5<br>Blackmagic Design 4.6K Film |
| Input color space<br>_If majority of footage is shoot on the **Canon C100**_       | Rec.709<br>Rec.709                                                  |
| Timeline color space                                                               | DaVinci WG<br>DaVinci Intermediate                                  |
| Output color space                                                                 | Rec.709<br>Rec.709                                                  |
