var message = "Hello There!";

function choose()
{
  var URL = (window.location.href).split("#");
  var info = (URL[URL.length - 1]).split("!");
  var num = parseInt(info[0]);
  var m = info[info.length - 1];
  if(m != null && m != "https://kartik-nagpal.github.io/Bubbles/" && m != num)
  {
     message = m;
  }

  if(num != null && num > 0 && num <= 5)
  {
    return num - 1;
  }
  var input = parseInt(prompt("Please Choose a Type(enter the number):\n1. Circle\n2. Square\n3. Triangle\n4. Hexagon\n5. Cross", "1"));

   if(input != null && input > 0 && input <= 5)
	{
    return input - 1;
	}
	else
	{
		return 0;
	}
}

var c = choose();
var myName = [message, "LightningLord Productions"];

var yellow = [50, 100, 50];
var black = [0, 0, 0];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [yellow, black, green, blue, purple];

Shapes = ['circle', 'square', 'triangle', 'hexagon', 'cross'];
bubbleShape = Shapes[c];

drawName(myName, letterColors);
bounceBubbles();
