# Space Invaders

Application to detect Aliens in a binary image similar to a screen in SpaceInvader, but with a lot of noise.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone https://github.com/Gilfell87/Space.git # or download it
cd Space
```
## Options

**-f** or **--file** <PATH> directory to input file
**-t** or **--threshold** <number> threshold from 0..1 to tuning the algorithm
**-r** or **--factor** <number> Integer from 1..3 to tuning the reduce algorithm to clean some noise  

```sh
node main -f <PATH> -t <number> -r <decimal>
```

## Algorithm and Concepts

There two types of strategy to find a Alien pattern into the image.

1. One that iterate over the raw input image and store all the subm images that have similiar area with the aliens. After that, iterate over all sub images returns that all the most similar ones. To overcome the edges cases the input image is reshaped to add the alien matrix to the borders of the original image.

2. Reduce the noise by iterating over the input image and matching it with a small matrix in the points that could possible be a false positive value (noise). After that execute the step **1.**

Tunning the algorithm
** Threshold ** -  change the this value the sub images in ** 1. ** need (higher value)more or (smaller value)less similar than the original.
** Factor ** - change this value you can change the value of noise in ** 2.**




## Results for threshold=0.67  and factor=3

```
node main -t 0.67 -r 3
Name: , Matrix:
W: 11, H: 8
Matrix:
-----------
-----------
-ooo--ooo--
ooo-oooooo-
oo-oo-oo-oo
o--o-oo-o--
-ooo----o--
-o-ooooo-o-


W: 11, H: 8
Matrix:
-----------
---o--ooo--
oooooooo-oo
-oo-ooo-oo-
oooooo--o-o
o-ooo-ooo--
o-o---o-ooo
----ooooo-o


W: 11, H: 8
Matrix:
ooo-----o--
o--o-o-o---
--o-ooooo--
oo--ooo-oo-
ooooooo-ooo
oooo--ooo-o
o-o-----o-o
---oo-oo---


W: 11, H: 8
Matrix:
--oo----o--
-------o---
o--oooooo--
-oo--oo--o-
oo-oooooooo
o-ooooooo-o
oo-o----o-o
--ooo-oo--o


W: 11, H: 8
Matrix:
-oo----o---
------o----
--oooooo---
oo--oo--o--
o-oooooooo-
-ooooooo-o-
o-o----o-oo
-ooo-oo--o-


W: 11, H: 8
Matrix:
--o-----o--
-------o---
--oooo-oo--
----ooo-oo-
o--oooooo-o
o-o-ooooo-o
o-o-----o-o
---oo-oo---



Name: , Matrix:
W: 8, H: 8
Matrix:
--------
-ooo--oo
ooo-oooo
oo-oo-oo
o--o-oo-
-ooo----
-o-ooooo
oooo-o--


W: 8, H: 8
Matrix:
--------
o--ooo--
-oooooo-
oo-oo-oo
o-oo-o--
o----o--
ooooo-o-
o-o--o--


W: 8, H: 8
Matrix:
---oo---
--ooo-o-
--ooooo-
oo--o-oo
oo-ooooo
-----o--
oo-oo-o-
o-o--ooo


W: 8, H: 8
Matrix:
o--o-o-o
--o-oooo
oo--ooo-
ooooooo-
oooo--oo
o-o-----
---oo-oo
o--o-o--


W: 8, H: 8
Matrix:
o-o-o---
-ooooo--
-ooo-oo-
oooo-ooo
o--ooo-o
-----o-o
oo-oo---
o-o---o-


W: 8, H: 8
Matrix:
oo----o-
-----o--
-oooooo-
o--oo--o
-ooooooo
ooooooo-
-o----o-
ooo-oo--


W: 8, H: 8
Matrix:
----o---
oooooo--
--oo--o-
oooooooo
oooooo-o
o----o-o
oo-oo--o
-o--o-o-


W: 8, H: 8
Matrix:
---oo---
--oooo--
oooooooo
oo-oo--o
-ooooooo
--o--ooo
-o-oo---
oo--oo-o


W: 8, H: 8
Matrix:
---o-o--
-ooooo--
-oooooo-
o--oo-oo
oooooooo
-ooo-o--
--ooo-o-
o-o--ooo


W: 8, H: 8
Matrix:
ooooo---
oooooo-o
--oo-oo-
oooooooo
ooo-o---
-ooo-o--
-o--ooo-
------o-


W: 8, H: 8
Matrix:
---oo---
--ooooo-
-oo-ooo-
oo-o-ooo
o-oooooo
--o--o--
oo-oo-o-
--oooo-o


W: 8, H: 8
Matrix:
---ooo--
o-oooo--
-oooooo-
oo--o-oo
oooooooo
--------
--------
--------

```

