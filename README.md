#Rellax.js
###Javascript Parallax framework

Rellax was made so anyone can easily implement advanced parallax into their website without writing a single piece of Javascript code. Simply include jQuery and Rellax into your website header:
```
<head>
	<script src="jquery.js"></script>
	<script src="Rellax.js"></script>
</head>
```
To say our DOM object will use Rellax, include the attribute rellax into your element, preferrably a div.
```
<div rellax></div>
```
Then we have to determine how large our div will be.
```
<div rellax width="100%" height="500px"></div>
```
We can give our image a background. We can either give it a hexadecimal value for a background color or we can use a url. We must use one or the other.
```
<div rellax backgroundColor="#1d1d1d"></div>
<div rellax backgroundURL="url/image.jpg"></div>
````

###APIs

rellax     - Instantiates Rellax object. Takes no arguments.

width      - Instantiates object width. Takes a string that is either of pixel measurement or percentage.  If not defined, takes in img width by default. It is recommended that this object is not changed.

height     - Instantiates object height. Takes one integer of pixel measurement or a string of percentage measreument. If not defined, takes in the img height by default.

backgroundURL - Instantiates a background. Takes a url string argument.

backgroundColor - Instantiates a background. Takes a hex value or color.

If you find any bugs or suggestions, please email me at nohharri@umich.edu.
