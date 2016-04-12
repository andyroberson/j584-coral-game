// python -m SimpleHTTPServer 8080 -- terminal syntax for testing on a server THANKS LINDSAY!!!

//variables for making food move
var tick = 0;
var xP = 50;
var yP = 50;
var xT = 200;
var yT = 200;
var dirX = 1;
var dirY = 1;


var stage;
var w;
var h;
var menuHeight;
var tankHeight;
var tankWidth;
var controlsMenu;
var leftControlMenu;
var leftControls;
var tankContainer;
var coral;
var thecontrols;

var foodArr = [];

//how to add functionality to this???

  function init() {
    console.log("init");
    stage = new createjs.Stage("gameCanvas");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    console.log("width is " + w + " height is " + h);

    //creating a tank container because coral and food need bounds
    tankContainer = new createjs.Container();
        // tankContainer.x = 0;
        // tankContainer.y = 0;
        tankContainer.x = (w * (113/700));
        tankContainer.y = 0;
        tankContainer.width = (w*(474/700));
        tankContainer.height = (h*(272/500));
        tankHeight = tankContainer.height;
        tankWidth = tankContainer.width;
        tankContainer.setBounds(tankContainer.x, tankContainer.y, tankContainer.width, tankContainer.height);
        console.log(tankContainer.getBounds() + "and the height is" + tankHeight);

    tankBackground =  new createjs.Shape();
    tankBackground.graphics.beginFill("White").drawRect(0, 0, tankWidth, tankHeight);


    stage.addChild(tankContainer);
    tankContainer.addChild(tankBackground);
    stage.update();

    createCoral();
    createBottomControls();
    createLeftControls();
    createRightControls();
    createFood();
    createLight();
    createTemp();

    //createCarbon();

    //TODO - change the above create functions to START?
}
//end init function

//make things draggable make anything draggable with makeDraggable(yourItemHere);
function makeDraggable(o) {
    o.addEventListener("pressmove", function (evt) {
        evt.currentTarget.x = evt.stageX;
        evt.currentTarget.y = evt.stageY;
        o.getStage().update();
        console.log("Being dragged");

        //TODO - if food is Being dragged, random motion should not be happening
    });
}

function testCollision(img1, img2) {
  var intersection = ndgmr.checkRectCollision(img1, img2);

  if (intersection != null) {
    //if the intersection isn't null, it means it's interesecing
    //console.log("It's intersecting!!!!");
    return true;
    //Remove or delete Food on intersection, make coral more happy
  }
}

// TO DO - make food only droppable in the tankContainer ; (target example?)
//when there's a collision with coral, make coral happiness
//add happiness to coral
//(make coral happiness in the end get only to a certain color)
//so face / color for happiness is like if (coral.happiness >= 100) {color = green} etc
//toolbar popups thing for starting game
