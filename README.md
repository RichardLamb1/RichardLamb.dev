# [RichardLamb.dev](https://www.richardlamb.dev)
My personal website and blog. Built with [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/). Hosted on [GitHub Pages](https://pages.github.com/).

## Creating a New Post
Under the `/blog` directory, there is a subdirectory called `_posts`. Jekyll doesn't require this, but I like to create subdirectories for the month and year to keep things organized. Create a Markdown file following the format `yyyy-mm-dd-post-title.md` and paste in the following template:

```
---
# Layout must be of type 'post'
layout: post

# Title, summary, and description of the post
# The summary is shown below the title
# The description is shown in Google search results
title:  "A Descriptive Title of the Post"
summary: "A summary of the post contents that will be shown under the title"
description: "A summary of the post contents that will be shown in Google search results"

# Date of the post
date: 2026-01-01 00:00:00 -0600

# [Optional] Image and caption to display at the top of the post
# The image is also displayed as a thumbnail on the homepage and /blog page
image:
  src: /assets/blog/2026/01/...
  alt: "Will be set as the <img alt> property. Useful for screenreaders and when the image doesn't load properly."
  caption: "Will be displayed under the image"
tags: ["list", "of", "tags", "spaces are supported"]

# Set to 'true' to enable the comments section below the post
comments: false

# Set to 'true' to show a table of contents beside the post
# The table of contents is only displayed on large screens (such as laptops and desktops)
toc: false
---
```

Assets for blog content (images, etc.) are stored under `/assets/blog/*`. Again, I like to create subdirectories for the month and year to keep things organized.

Colored tags are supported. See `/_data/tagdata.yml`.

## Exposing a Development Webserver

Use the following command to expose a devserver on localhost:4000 including all unpublished posts:

```
jekyll serve --drafts --unpublished --future
```

## Licensing and Reuse
Copyright © 2025-present Richard Lamb. Unless otherwise noted, all website **content** (text, images, video, audio, documents, etc.) is all rights reserved.

You are free to reuse any of the website **code** (HTML Layouts, CSS, JavaScript, Ruby, Liquid, etc.) without attribution.

You are also free to fork or clone this repository and explore the code. However, you may not distribute any of my content without my explicit written permission.

*If you are unsure whether or not you are allowed to reuse something, please [reach out to me and ask](https://www.richardlamb.dev/contact).*

## Third-Party Credits
This project makes use of the work of the third-parties listed below. You are free to reuse it according to their licensing.
- [Jekyll](https://jekyllrb.com/)
- [Jekyll Compress HTML](http://jch.penibelst.de/)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Animate on Scroll (AOS)](https://github.com/michalsnik/aos)
- [Lunr Search](https://lunrjs.com/)
- [Tocbot](https://github.com/tscanlin/tocbot)
- [Lightense Images (zooming)](https://sparanoid.com/work/lightense-images/)
- [Giscus](https://giscus.app/)
- [SVG Repo](https://www.svgrepo.com/)