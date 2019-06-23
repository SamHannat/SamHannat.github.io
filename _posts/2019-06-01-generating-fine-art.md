---
layout: post
title: "Generating Fine Art"
description: "Using deep neural networks to generate paintings of faces."
comments: true
github: https://github.com/SamHannat/FineViewer
tags: Python, Keras & Tensorflow, JavaScript, Flask, machine learning, data visualization, 
---
 

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>

<script src="{{ base.url | prepend: site.url}}/assets/js/fineart.js" crossorigin="anonymous"></script>


<style type="text/css" onload="initialSetup()">

.tg  {border-collapse:collapse;border-spacing:0; border:none !important;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;overflow:hidden;word-break:normal;border:none !important;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;overflow:hidden;word-break:normal;border:none !important;}
.tg .tg-c3ow{text-align:center;vertical-align:top;border:none !important;}
</style>
<table class="tg">
  <tr>
    <th class="tg-c3ow"><img id="leftimage" src=""/></th>
    <th class="tg-c3ow"><img id="rightimage" src=""/></th>
  </tr>
  <tr>
    <td class="tg-c3ow" colspan="2"><img id="interpolation" src=""/></td>
  </tr>
  <tr>
    <td class="tg-c3ow"><button onclick="getRandomFace(setLeft)">Random Image</button></td>
    <td class="tg-c3ow"><button onclick="getRandomFace(setRight)">Random Image</button></td>
  </tr>
  <tr>
    <td class="tg-c3ow" colspan="2"><button onclick="interpolation(setInterpolation)">Interpolate</button></td>
  </tr>
  <tr>
  	<td class="tg-c3ow" colspan="2">
  		<input id="interpolationNum" type="number" min="2" max="15" value="10"/>
  	</td>
  </tr>
</table>

### Use this theme as you main site

- Download or fork the master branch of this theme repo into your GitHub account.
- Rename the repo into something like `your_username.github.io`.
- Edit `_config.yml` file to your preferences.
- Edit `about.md` file for your About page.
- Inside `_posts` folder, there are sample of blog entries. Learn from it and start yours.
- Now, visit `http://your_username.github.io` and you should see your blog running.

### Use this theme as a project page

If you want to use this theme as a project page blog, you don't need to rename the theme repo into `your_username.github.io`.

All you need to do, open `_config.yml` file, change `baseurl` to your project name which contains this theme, e.g. `baseurl: "/myproject"`.

#### Cheers!
