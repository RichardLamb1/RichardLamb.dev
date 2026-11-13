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

## Updating Projects

The `/projects/` page reads from `_data/projects.yml`. Add or edit entries there
to change titles, dates, descriptions, bullet points, and links. Each optional
link has a `text` label and a `url`, which can point to a local page or an external site.
Remove `links` or use `links: []` for a project without links.

To replace a photo placeholder, add an image to `assets/projects/` and set the
entry's `image.src` to its path (for example, `/assets/projects/khkade.jpg`). Set
`image.alt` to a description of the photo. An empty `image.src` displays the placeholder.

## Updating Skills

The `/about2.html` page reads its skill cards and category filters from
[`_data/skills.yml`](_data/skills.yml). Each entry has a `category` name and a
`skills` list:

```yaml
- category: "Software"
  skills:
    - "Java"
    - "Python"
```

Add, rename, or remove items in a `skills` list to update a category. To add a
category, copy the structure above with a new name and its skills. Remove the
entire entry to delete a category. Categories and skills appear in file order,
so move entries to reorder them. Preserve the YAML indentation using spaces.

After Jekyll rebuilds, the page generates the updated cards and filter buttons
automatically. Search uses the skill names; no HTML or JavaScript edits are needed.
Preview `/about2.html` to check the results.

## Updating Experience

The “Experience in practice.” section on `/about2.html` reads from
[`_data/experience.yml`](_data/experience.yml). Each entry describes a role:

```yaml
- category: "software"
  organization: "Organization name"
  role: "Job title"
  dates: "May 2026 — present"
  image: "/assets/img/work_exp/organization.png"
  location: "Madison, Wisconsin"
  summary: "A short introduction to the work."
  highlights:
    - title: "Application development."
      description: >-
        Describe the work and its results here. Longer descriptions can
        span multiple indented lines, which YAML joins into one paragraph.
```

Copy an entry to add a role, edit its fields to update it, or remove the entire
entry to delete it. Entries appear in file order, and the first starts expanded.
Add or remove items under `highlights` to change the role's bullet points.
Preserve the YAML indentation using spaces, and point `image` to an existing
image file in the site.

Use `software`, `field`, or `community` for `category` to match the existing
Software & IT, Field engineering, or Community filters. Adding another category
also requires adding its filter button in `about2.html`.

After Jekyll rebuilds, preview `/about2.html` and check the role's content,
accordion, and category filter. Existing categories require no HTML or
JavaScript edits when adding or updating roles.

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
