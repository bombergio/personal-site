---
title: Started my blog
summary: 'Why I started my blog on yet another platform'
date: 2023-01-24
---
## Why I started my blog on yet another platform
Why would you need another blog in 2023? Well, I had an experience with the [Astro](https://astro.build) and wanted to try out to build a blog from the scratch.

Starting from complete scratch for the blog seems like overkill, but "no pain - no gain" 😅
I'm not sure if I'll post here regularly, so let's see how it goes.

## Why Astro?
Astro is relatively a new guy in the block, but I already had experience with it. I was impressed with the performance and the developer experience.
In addition, Astro version 2 released just now brought new features and improvements, like [content collections and many others](https://astro.build/blog/astro-2/).

But the most important is that it is a static site generator, which means that it is fast and secure and it is easy to deploy. 
I'm not a fan of JavaScript, but Astro is written in TypeScript, which is a good compromise for me. There is a native integration with the [Tailwind CSS](https://tailwindcss.com/) framework, which I like as well.

As this website is static and the amount of client-side JS is kept to the absolute minimum, it is easy to get 100 points on performance from the Lighthouse.
## Hosting
Astro allows the use of any static hosting provider, but I decided to use [Cloudflare](https://www.cloudflare.com/), because it is free and extremely easy to use.

By integrating Cloudflare Pages with the GitHub repository, I can deploy the fresh blog version just by committing the changes to the repository. No CI/CD setup is required. No infrastructure to manage. No servers to maintain. No worries.

## Source code
The source code is located in my GitHub repository. You can check it [here](https://github.com/bombergio/personal-site)
