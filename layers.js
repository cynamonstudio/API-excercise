// // Select the object
// var obj = app.activeDocument.selection[0];

// var testColor = new RGBColor();
// testColor.red = 45;
// testColor.green = 255;
// testColor.blue = 115;

// // Set the fill color to a hex color
// obj.fillColor = testColor;

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : null;
  }


//define the array of colors
var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#000000", "#800000"];

var doc = app.activeDocument;
//get the first artboard
var artboard = app.activeDocument.artboards[0];

//create a loop that will iterate 10 times
for (var i = 0; i < 10; i++) {
 //duplicate the artboard
  var newArtboard = doc.artboards.add(artboard.artboardRect);
  
  //get all the objects on the "square" layer
  var squareLayer = app.activeDocument.layers.getByName("square");
  var objects = squareLayer.PathItems(1)
  
  //loop through all the objects and change their color
  for (var j = 0; j < objects.length; j++) {
    
    for (var j = 0; j < 5; j++) {
        var color = new RGBColor();
        color.red = hexToRgb(colors[i]).red
        color.green = hexToRgb(colors[i]).green 
        color.blue = hexToRgb(colors[i]).blue
      }
       
      var testColor = new RGBColor();
testColor.red = 45;
testColor.green = 255;
testColor.blue = 115;

    objects[j].fillColor =testColor  ;
  }
}


