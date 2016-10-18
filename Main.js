function choose() 
{
    var input = prompt("Please Choose a Type(enter the number):\n1. Circle\n2. Square\n3. Triangle\n4. Hexagon\n5. Cross", "1");
    
    if (input != null && parseInt(input) > 0 && parseInt(input) <= 5) 
	{
        return parseInt(input) - 1;
	}
	else
	{
		return 0;
	}
}


var myName = ["Created By", "LightningLord Productions"];

var yellow = [50, 100, 50];
var black = [0, 0, 0];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [yellow, black, green, blue, purple];

var c = choose();

Shapes = ['circle', 'square', 'triangle', 'hexagon', 'cross'];
bubbleShape = Shapes[c];

drawName(myName, letterColors);
bounceBubbles();
