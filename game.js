//variables for making food move
var tick = 0;
var xP = 50;
var yP = 50;
var xT = 200;
var yT = 200;
var dirX = 1;
var dirY = 1;


var food = [];
//how to add functionality to this???

  function init() {
    var stage = new createjs.Stage("tankCanvas");

    // grab canvas width and height for later calculations:
    w = stage.canvas.width;
    h = stage.canvas.height;

    console.log("width is " + w + " height is " + h);

    //creating a tank container because coral and food need bounds
    var tankContainer = new createjs.Container();
        tankContainer.x = 0;
        tankContainer.y = 0;
        tankContainer.width = w;
        tankContainer.height = (h*(4/5));
        tankHeight = tankContainer.height;
        tankContainer.setBounds(tankContainer.x, tankContainer.y, tankContainer.height, tankContainer.width);
        console.log(tankContainer.getBounds() + "and the height is" + tankHeight);

//creating coral
    //TODO - center bitmap later!
    var coral = new createjs.Bitmap("coral-test2.png");
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

    //for when coral was a shape; will it still be responsive in above?
    // var coral = new createjs.Shape();
    //     coral.graphics.beginFill("DarkRed").drawCircle(0, 0, h/10);
    //     //resetting x and y coordinates with w and h; first must be declared 0 above though
    //     coral.x = w / 2;
    //     coral.y = h / 2;
    //     coral.width = (h/5);
    //     coral.height = (h/5);
    //     coral.setBounds(coral.x, coral.y, coral.width, coral.height);
    //     //setbounds x, y, w, h
    //     coralBounds = coral.getBounds();
    //     coralHeight = coral.height;
    //     console.log("coral bounds is " + coralBounds + " coralHeight is  " + coralHeight);

     //creating controls menu container
    var controlsMenu = new createjs.Container();
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

    //creating food button
    var foodButton = new createjs.Shape().set({cursor: "pointer"});

        foodButton.graphics.beginFill("Orange").drawCircle(0, 0, 20);
        foodButton.x = w / 6;
        foodButton.y = menuHeight / 2;
        foodButton.width = w / 6;
        foodButton.height = menuHeight / 2;
        foodButton.setBounds(foodButton.x, foodButton.y, foodButton.height, foodButton.width);


    //setting up initial tank layout
    stage.addChild(coral);
    stage.addChild(controlsMenu);
    stage.addChild(tankContainer);
    controlsMenu.addChild(thecontrols);
    controlsMenu.addChild(foodButton);
    stage.update();

//section for drag and drop food***********************************************

    //highlight foodButton when hovered not accessing mouseover?
    foodButton.addEventListener("mouseover", function (evt) {
      foodButton.graphics.clear().beginFill("Red").drawCircle(0, 0, 20).endFill();
      foodButton.x = w / 6;
      foodButton.y = menuHeight / 2;
      console.log("food button is hovered");
      stage.update();
    });

    //when not hovered, remove the highlight
    foodButton.addEventListener("mouseout", function (evt) {
      foodButton.graphics.clear().beginFill("Orange").drawCircle(0, 0, 20).endFill();
      foodButton.x = w / 6;
      foodButton.y = menuHeight / 2;
      console.log("food button isn't hovered");
      stage.update();
    });

    //when the mouse is clicked, make a new food instance and make this draggable
    foodButton.addEventListener("mousedown", function (evt) {
    if (evt.nativeEvent.button >= 0) {
        makeNewFood();
    }
    stage.update();
});

//how to rename newFood each time so that it will keep making it randomly move each time
//maybe create an array to add these shapes into? and when newFood intersects with coral, detect
//which # in the array it's in and remove that one? but would that help with keeping them all moving?
//counter = 0;
newFoodTest = new createjs.Bitmap("test-shrimp.jpg");
function makeNewFood() {
    console.log("We're at the make new food function");
    //when newFood is an image, it wont let you create multiple ones; need to store in array and rename or something
    newFood = new createjs.Bitmap("test-shrimp.jpg"); //add to array; when deleted, POP it
    newFood.crossOrigin="Anonymous";
    newFood.x = 40;
    newFood.y = 40;
    //newFood = new createjs.Shape();
    //newFood.graphics.beginFill("blue").drawCircle(0, 0, 20);

    //TODO - DRAGGABILITY isn't working right now?
    makeDraggable(newFood);
    tankContainer.addChild(newFood);
    stage.update();
    //testCollision(coral,newFood);
}

//Update stage will render next frame this is for animating food
createjs.Ticker.framerate = 40;
createjs.Ticker.addEventListener("tick", moveFood);
//createjs.Ticker.on("tick", foodIntersect);

//makes food move randomly
function moveFood() {

  //TODO - make this only work if mousedown on newFood is false
      if(tick > 100) {
        xT = Math.ceil(Math.random()* w);
        yT = Math.ceil(Math.random()* h * 4/5);
        tick = 0;
      }

        tick++;

        xP += (xT - xP)/15;
        yP += (yT - yP)/15;

      newFood.x += ((xP - newFood.x)/60);
      newFood.y += ((yP - newFood.y)/60);

      stage.update();
      //test collision between coral and newFood ; if collide is true, the coral "ate" the food
      foodCollision = testCollision(coral,newFood);
      if (foodCollision == true) {
        //console.log("the food is colliding");
        //remove food because it got eaten
        tankContainer.removeChild(newFood);
        console.log("food is removed");
        //TODO - make images add to array and remove image in array; at the moment it's removing the image but still listenting
        stage.update();
      }

}

//tests intersection between two images
function testCollision(img1, img2) {
  var intersection = ndgmr.checkRectCollision(img1, img2);

  if (intersection != null) {
    //if the intersection isn't null, it means it's interesecing
    //console.log("It's intersecting!!!!");
    return true;
    //Remove or delete newFood on intersection, make coral more happy
  }
}

}
//end init function

//make things draggable make anything draggable with makeDraggable(yourItemHere);
function makeDraggable(o) {
o.addEventListener("pressmove", function (evt) {
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
    o.getStage().update();
});
}

// TO DO - make food only droppable in the tankContainer ; (target example?)
//make food move randomly
//when there's a collision with coral, make coral happiness
//add happiness to coral
//(make coral happiness in the end get only to a certain color)
//so face / color for happiness is like if (coral.happiness >= 100) {color = green} etc
//toolbar popups thing for starting game
