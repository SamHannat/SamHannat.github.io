---
layout: post
title: "DeepFake Art"
description: "Using deep neural networks to generate paintings of faces."
comments: true
github: https://github.com/SamHannat/FineViewer
tags: Python, Keras & Tensorflow, JavaScript, Flask, Machine Learning, Data Visualization 
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
#interpolationNum {display:inline-block;width:4em; padding-left:5em;}
#leftdimension, #rightdimension, #leftslider, #rightslider {display: inline-block; margin-left:1em;}
#leftslider, #rightslider {
  margin-left:2em;
}
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
    <td class="tg-c3ow"><button onclick="getRandomFace(setLeft)">Generate Face</button></td>
    <td class="tg-c3ow"><button onclick="getRandomFace(setRight)">Generate Face</button></td>
  </tr>
  <tr>
    <td class="tg-c3ow" colspan="2">
    	<button onclick="interpolation(setInterpolation)">Interpolate</button> 
    	# of Images: <select value="10" id="interpolationNum">
    		<option>3</option>
    		<option>4</option>
    		<option>5</option>
    		<option>6</option>
    		<option>7</option>
    		<option>8</option>
    		<option>9</option>
    		<option selected>10</option>
    		<option>11</option>
    		<option>12</option>
    		<option>13</option>
    		<option>14</option>
    		<option>15</option>
    	</select>
    </td>
  </tr>
  <tr>
  	<td class="tg-c3ow" ><span>Latent Dimension</span>
  		<select value="10" id="leftdimension" onchange="getScalerValue(setScalerValue, 'left')">
    	</select>
  		<input id="leftslider" type="range" min="1" max="10" value="5" onchange="changeLatent(setLatent, 'left')">
  	</td>
  	<td class="tg-c3ow" ><span>Latent Dimension</span>
  		<select value="10" id="rightdimension" onchange="getScalerValue(setScalerValue, 'right')">
    	</select>
  		<input id="rightslider" type="range" min="1" max="10" value="5" onchange="changeLatent(setLatent, 'right')">
  	</td>
  </tr>
</table>

Everyone has heard about the buzz generated from deepfakes, artifical images generated that could be mistaken for real ones. 


### Use this theme as a project page

If you want to use this theme as a project page blog, you don't need to rename the theme repo into `your_username.github.io`.

All you need to do, open `_config.yml` file, change `baseurl` to your project name which contains this theme, e.g. `baseurl: "/myproject"`.

#### Cheers!
