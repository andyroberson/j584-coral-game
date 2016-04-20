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
var temperature;
var degrees;
var coralIntersect;
var thecontrols;
var lightSwitch;
var switchContainer;
var screenContainer2;
var switchBackground;
var tempContainer;
var carbonDisplay;
var carbon;

var littleFood;
var moreFood;
var mostFood;
var foodArr = [];
var foodArr2 = [];
var foodArr3 = [];

var foodButton;
var foodButton2;
var foodButton3;

var activeControl; //changes depending on which control is being manipulated; can be temp, light, carbon, or food
var startTemp;
var startLight;
var startCarbon;
var startFood;
var startClicked;
var experiment = 0;

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
    stage.enableMouseOver();
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
if (experiment > 0) {
  $( ".current" ).css({"display": "none"});
}
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
createjs.Ticker.addEventListener("tick", updateValues);

function updateValues(activeControl) {
   if (activeControl == "light") {
     resetCarbon();
     resetTemp();
     resetFood();
     stage.update();
   }

   if (activeControl == "temp") {
     resetCarbon();
     resetFood();
     resetLight();
     carbon = .04;
     console.log("Carbon is: " + carbon);
     stage.update();
   }

   if (activeControl == "carbon") {
     resetTemp();
     resetLight();
     resetFood()
     stage.update();
   }
 }

 function resetCarbon() {
   carbon = .04;
   carbonDisplay.text = carbon;
   stage.update();
 }

 function resetLight() {
   lightSwitch.value = 50;
   stage.update();
 }

 function resetTemp() {
   degrees = 82;
   temperature.text = degrees;
   stage.update();
 }

 function resetFood() {
   littleFood = false;
   moreFood = false;
   mostFood = false;
   foodButton.alpha = .7;
   foodButton2.alpha = .7;
   foodButton3.alpha = .7;
 }

 function findActiveControl() {
   if ((activeControl == "light") && startClicked == true) {
     detectLightLevel();
     startClicked = false;
   }

   if ((activeControl == "temp") && startClicked == true) {
     detectTemp();
     startClicked = false;
   }

   if ((activeControl == "carbon") && startClicked == true) {
     detectCarbon();
     startClicked = false;
   }

   if ((activeControl == "food") && startClicked == true) {
     makeNewFood();
     startClicked = false;
   }
 }

 function makeNewFood() {
       if (littleFood == true) {
             foodArr.push(new createjs.Bitmap("assets/shrimp-sm.gif"));
             console.log("We just added a little bit of food");
       }

       if (moreFood == true) {
             foodArr.push(new createjs.Bitmap("assets/shrimp-md.gif"));
             console.log("We just added more food");
       }

       if (mostFood == true) {
             foodArr.push(new createjs.Bitmap("assets/shrimp-lg.gif"));
             console.log("We just added the MOST food");
       }

       for (var i = 0; i < foodArr; i ++) {
         foodArr[i].x = 0;
         foodArr[i].y = 0;
       }

       console.log(foodArr[i].x);

       makeDraggable(foodArr[i]);
       tankContainer.addChild(foodArr[i]);
       stage.update();

 };

 function detectCarbon() {
   //coral high coral happy
       if (carbon < .03) {
         experiment++;
         $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached!</b>"
         + "<br>After 30 days in this water, you can definitely tell that Big Red bleached. Though lower acidity is usually better, Big Red bleached because he doesn't handle drastic changes (such as the change in carbon dioxide) well."
         );
         startClicked = false;
         fullBleach();
       }

       if (carbon == .03) {
         experiment++;
         $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red started bleaching!</b>"
         + "<br>This percentage of carbon dioxide is close to the level of ocean acidity prior to the industrial revolution, which was .028%."
         + " Lower acidity, like what you selected, is almost always better, but Big Red still bleached a little because he's sensitive to change.");
         startClicked = false;
         lowBleach();
       }

       if (carbon == .04) {
         experiment++;
         $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red is healthy.</b>"
         + "<br>This was the recommended carbon dioxide setting for Big Red, and he didn't bleach.");
         startClicked = false;
         coralReset();
       }

       //carbon rising, sad coral
       if ((carbon > .04) && (carbon < .06)) {
         experiment++;
         $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red started bleaching!</b>"
         + "<br>This CO2 level is too high. This is what scientists predict the ocean's acidity will be like in a century if humans continue become more environmentally conscious and slow their pollution rate. Your 30-day lab setting was too extreme and shows that pollution is generally bad for Big Red, "
         + "but there is hope that he would adapt if this number increased slowly over more time.");
         startClicked = false;
         lowBleach();
       }

       if (carbon >= .06) {
         experiment++;
         $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached!</b>"
         +  "<br>This CO2 level is way too high! This is what scientists predict the ocean's acidity will be like in a century if humans continue at their current pollution rate. Your 30-day lab setting was too extreme and shows that pollution is generally bad for Big Red, "
          + "but there is hope that he would adapt if this number increased slowly over more time and he could slowly get used to the change");
          startClicked = false;
         fullBleach();

       }

 }


 function detectTemp() {
   //if the degrees are super low, coral bleach
   if (degrees <= 75) {
     experiment++;
      $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached!</b>"
      + "<br>Big Red is very picky about temperatures and doesn't like to be too cold. " );
      startClicked = false;
     fullBleach();
   }

   //coral bleach
   if ((degrees > 75) && (degrees < 81)) {
     experiment++;
      $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached a little</b>"
      + "<br>Big Red was a bit too cold, and after 30 days in water of this temperature, he started bleaching." );
      startClicked = false;
     lowBleach();
   }

   //coral high coral happy
   if (degrees == 82) {
     experiment++;
     $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red is healthy</b>"
     + "<br>This is the recommended temperature for Big Red and he stayed happy in water at this temperature." );
     startClicked = false;
     coralReset();
   }

   //coral high coral happy
   if ((degrees > 82) && (degrees < 89)) {
     experiment++;
     $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached</b>"
     + "<br>The water was too warm for Big Red, and he bleached during your 30-day lab experiment." );
     startClicked = false;
     highBleach();
   }

   if (degrees > 88) {
     experiment++;
     $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached</b>"
     + "<br>Big Red was really hot in water of this temperature and was very bleached after 30 days of living in it." );
     startClicked = false;
     fullBleach();
   }

 }

 function detectLightLevel() {
   if (lightSwitch.value < 25) {
     experiment++;
     $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red bleached a bit</b>"
     + "<br>Big Red needs light for photosynthesis, which is a source of nutrition. Feeling hungry makes him start to bleach." );
     startClicked = false;
     lowBleach();
     stage.update();
   }

   if (lightSwitch.value >= 25 && lightSwitch.value < 75) {
     experiment++;
     $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red didn't bleach!/b>"
     + "<br>This is the recommended setting for light and Big Red didn't bleach." );
     startClicked = false;
     coralReset();
     stage.update();
   }

   //light switch high, show bright light
   else if (lightSwitch.value >= 75 && lightSwitch.value < 101) {
     experiment++;
     $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red started bleaching!</b>"
     + "<br>Extra light means extra food for Big Red since he uses it for photosynthesis, so it may seem strange that he bleached. This happened because the extra heat from the light made him too hot." );
     startClicked = false;
     lowBleach();
     stage.update();
   }
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
