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
var rightControlMenu;
var rightControls;
var tankContainer;
var coral;
var coral2;
var coralIntersect;
var thecontrols;
var lightSwitch;
var switchContainer;
var switchBackground;
var tempContainer;

var littleFood;
var moreFood;
var mostFood;
var foodArr = [];
var foodArr2 = [];
var foodArr3 = [];


  function init() {
    console.log("init");
    stage = new createjs.Stage("gameCanvas");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    console.log("width is " + w + " height is " + h);

    //creating a tank container because coral and food need bounds
    tankContainer = new createjs.Container();
        tankContainer.x = (w * (113/700));
        tankContainer.y = 0;
        tankContainer.width = (w*(500/700));
        tankContainer.height = (h*(272/400));
        tankHeight = tankContainer.height;
        tankWidth = tankContainer.width;
        tankContainer.setBounds(tankContainer.x, tankContainer.y, tankContainer.width, tankContainer.height);
        console.log(tankContainer.getBounds() + "and the height is" + tankHeight);

    //tank background image
    tankBackground = new createjs.Bitmap("assets/tank-3.png");
        tankBackground.x = -12;
        tankBackground.y = 0;
        tankBackground.width = tankWidth;
        tankBackground.height = tankHeight;
        tankBackground.scaleX = 1.2;

    stage.addChild(tankContainer);
    tankContainer.addChild(tankBackground);
    stage.update();

    createCoral();
    createBottomControls();
    createLeftControls();
    createRightControls();
    createLight();
    createFood();
    createTemp();
    createCarbon();

    //TODO - change the above create functions to START?
}
//end init function
//fully bleach coral
function fullBleach() {
   coral2.gotoAndPlay("bleach");
 }

//fully bleach coral
 function highBleach() {
    coral2.gotoAndPlay("bleach-19");
 }

 //partially bleach coral
 function lowBleach() {
   coral2.gotoAndPlay("bleach-13");
 }

 //reset coral to happy coral
 function coralReset() {
   coral2.gotoAndPlay("stare");
 }

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
