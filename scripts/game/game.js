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
var controlsMenu;
var tankContainer;
var coral;

var foodArr = [];

//how to add functionality to this???

  function init() {
    console.log("init");
    stage = new createjs.Stage("tankCanvas");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    console.log("width is " + w + " height is " + h);

    //creating a tank container because coral and food need bounds
    tankContainer = new createjs.Container();
        tankContainer.x = 0;
        tankContainer.y = 0;
        tankContainer.width = w;
        tankContainer.height = (h*(4/5));
        tankHeight = tankContainer.height;
        tankContainer.setBounds(tankContainer.x, tankContainer.y, tankContainer.height, tankContainer.width);
        console.log(tankContainer.getBounds() + "and the height is" + tankHeight);

//creating coral
    //TODO - center bitmap later!
     coral = new createjs.Bitmap("assets/coral-test2.png");
        coral.crossOrigin="Anonymous";
        coral.x = 170;
        coral.y = 190;
        coral.width = (h/5);
        coral.height = (h/5);
        coral.setBounds(coral.x, coral.y, coral.width, coral.height);
        //setbounds x, y, w, h
        coralBounds = coral.getBounds();
        //coralHeight = coral.height;
        console.log("coral bounds is " + coralBounds);

    coral.image.onload = function() {
      stage.update();
    };

     //creating controls menu container
   controlsMenu = new createjs.Container();
        controlsMenu.x = 0;
        controlsMenu.y = (h*(4/5));
        controlsMenu.width = w;
        controlsMenu.height = (h/5);
        menuHeight = controlsMenu.height;
        controlsMenu.setBounds(controlsMenu.x, controlsMenu.y, controlsMenu.width, controlsMenu.height);
        console.log(controlsMenu.getBounds());

    //adding background color to menu container
    var thecontrols = new createjs.Shape();
        thecontrols.graphics.beginFill("Black").drawRect(0, 0, w, controlsMenu.height);
            //drawRect(x, y, w, h)
        thecontrols.height = controlsMenu.height;
        thecontrols.width = w;
        console.log("control height is " + thecontrols.height);
        console.log("control width is " + thecontrols.width);
        thecontrols.setBounds(thecontrols.x, thecontrols.y, thecontrols.height, thecontrols.width);


    //setting up initial tank layout
    stage.addChild(coral);
    stage.addChild(controlsMenu);
    stage.addChild(tankContainer);
    controlsMenu.addChild(thecontrols);

    stage.update();

    createFood();
    createLight();
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
