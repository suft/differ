# Differ
![Original](./QAtest.jpg)
![Result](./differences.jpg)

## Summary
An algorithm written in Node, to spot the differences between two images. The algorithm uses percent differences in RGBA values between pixels of the two images and determines outliers by comparing values against a certain tolerance.

## Differences
* Liquid in the barrel
* Rope tied to the boat
* Fox's nose
* Roof of the well
* Vegetable
* Wheat
* Plowed soil
* Sheep's Ear
* Gazebo railing

## Thinking Process
When I first started the problem, I was able to spot several differences just by inspection, however I decided to write an algorithm to ensure I would spot all the differences. My first attempt at writing the algorithm involved comparing hexidecimal colour values of the pixels of both images, to my suprise, my program was outputing a 94% difference between the two images. 


## Dependencies
Jimp [[https://github.com/oliver-moran/jimp](https://github.com/oliver-moran/jimp)]

## Authors
Sufien Tout [[https://github.com/suft](https://github.com/suft)]
