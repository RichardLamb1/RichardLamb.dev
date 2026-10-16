---
layout: post
title: "Beefing Up My Website With AI Coding Agents"
summary: "How I'm using ChatGPT Codex to give my personal website a refresh, one change at a time."
description: "A look at how I'm using ChatGPT Codex to refine my Jekyll and Bootstrap website, from a new homepage to small interface improvements."
date: 2026-10-15 00:00:00 -0500
image:
  src: /assets/blog/2026/10/codex/BuildingWebsitesTogether.png
  alt: "Coding with AI agents"
  caption: "<em>Image: ChatGPT</em>"
tags: ["website", "web", "ai", "openai", "codex", "chatgpt", "jekyll", "bootstrap", "html", "css"]
comments: true
---

When I [first launched this site](/blog/2025/12/23/hello-world.html), I built a Bootstrap-based theme on top of Jekyll. It gave me a place to introduce myself, share projects, and write about things I was learning. Now, I've been giving it another pass with some help from ChatGPT Codex.

The goal is pretty straightforward: make the site feel more polished and personal. That means revisiting the homepage, making the contact pages feel like they belong together, and paying attention to the small details that are easy to leave for later.

## Starting With the Homepage

The homepage was the biggest change. I wanted a clear introduction at the top, followed by a little more about me and an easy way to find my latest posts.

I gave Codex a specific layout to work toward: use my professional photo over the Madison skyline at night, add icon-only links to LinkedIn, GitHub, and my contact page, then leave room for a more casual photo beside a short blurb. Below that, keep the existing **Latest Posts** section as it was and add a placeholder for a contact form.

That last detail mattered. I already had a section that pulled in my newest posts, and I wanted to keep it while changing the content around it. Being explicit about what should stay made the request much clearer.

I started with placeholders for the casual photo and homepage contact form so I could work out the layout first. Before publishing this post, I selected the photo and filled in those remaining pieces. The finished page brings together a professional introduction, a more personal glimpse of me, my latest writing, and a way to get in touch.

## Following Up With the Details

Once the main layout was in place, I started asking for smaller refinements.

The social buttons now have hover transitions, with a slight lift and a shadow. The styling also covers keyboard focus and respects reduced-motion preferences. It's a small addition, but it gives the links a little more feedback when you interact with them.

Next came the [contact page](/contact). I asked for a header using the same Madison image as the homepage, with a huge, centered “Contact Me” title. Reusing that image gives the two pages a shared visual thread.

The thank-you page got some attention too. Its confirmation message and “Back Home” button now sit inside a centered card, and the button has a back arrow. Then I added a “More about me” link beneath the homepage introduction, using the same style as the existing “Read my blog” link.

None of those follow-up requests needed to be especially complicated. Each described a concrete change to a particular part of the site.

## Working in Small Steps

For this refresh, I've been using a simple rhythm: describe a change, let Codex edit the relevant files, and follow up with the next adjustment.

One example was asking it to copy the “Read my blog” link, place it below the introduction, rename it “More about me,” and point it to the about page. Referencing an existing element gave the request a clear starting point and helped keep the styling consistent.

I still need to understand the changes going into my site. For me, that means looking at the resulting HTML and CSS, checking links, and making sure the layout works at different screen sizes. A change can look reasonable in the source and still need adjustment in a browser.

There are also practical limits to what a coding session can verify. During the initial homepage work, the Jekyll build was blocked by a Ruby version mismatch in the environment. The image paths and preserved Latest Posts markup could be checked, but that wasn't the same as a successful build or a visual review.

## Looking Back

With the photo selected and the placeholders filled, the refresh feels ready to share. The homepage gives visitors a clearer introduction, and the blog continues to be where I share what I'm working on.

This has been a useful way to revisit a project I already care about. I can bring a specific idea to Codex, get a concrete edit to inspect, and keep refining from there.

Take a look around the [homepage](/), and if you have feedback, feel free to [send me a message](/contact)!
