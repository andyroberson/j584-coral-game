function createFood() {

  var foodContainer = new createjs.Container();
      foodContainer.x = (switchContainer.x);
      foodContainer.y = (switchContainer.height + 1);
      foodContainer.height = 170;
      foodContainer.width = switchContainer.width;

//foodContainerBackground image
 var foodContainerBg = new createjs.Bitmap("assets/food-bg.png");
      foodContainerBg.x = 0;
      foodContainerBg.y = 0;

  //creating food button;
  var foodButton = new createjs.Bitmap("assets/shrimp-button1.png");
      foodButton.x = 14;
      foodButton.y = 26;
      foodButton.cursor = "pointer";
      // foodButton.width = tankWidth / 10;
      // foodButton.height = menuHeight / 2;
      // foodButton.setBounds(foodButton.x, foodButton.y, foodButton.width, foodButton.height);

var foodButton2 = new createjs.Bitmap("assets/shrimp-button2.png");
     foodButton2.x = 14;
     foodButton2.y = 73;//(switchContainer.height + 10 + 20);
     foodButton2.cursor = "pointer";

var foodButton3 = new createjs.Bitmap("assets/shrimp-button3.png");
     foodButton3.x = 14;
     foodButton3.y = 120;//(switchContainer.height + 10 + 20);
     foodButton3.cursor = "pointer";

     littleFood = false;
     moreFood = false;
     mostFood = false;

     makeFood();

function makeFood() {
    leftControlMenu.addChild(foodContainer);
    foodContainer.addChild(foodContainerBg);
    foodContainer.addChild(foodButton);
    foodContainer.addChild(foodButton2);
    foodContainer.addChild(foodButton3);
    stage.update();
}

function resetFoodValues() {
  littleFood = false;
  moreFood = false;
  mostFood = false;
}

//when the mouse is clicked, set the appropriate value to true and make new Food
//little shrimp
foodButton.on("click", function (evt) {

      activeControl = "food";
      resetLight();
      resetCarbon();
      resetTemp();

      if (evt.nativeEvent.button >= 0) {
          littleFood = true;
          moreFood = false;
          mostFood = false;
          findActiveControl();

      }

stage.update();
});

//more shrimp
foodButton2.on("click", function (evt) {

      activeControl = "food";
      resetLight();
      resetCarbon();
      resetTemp();

      if (evt.nativeEvent.button >= 0) {
          moreFood = true;
          littleFood = false;
          mostFood = false;
          findActiveControl();
      }

stage.update();
});

//most shrimp
foodButton3.on("click", function (evt) {

      activeControl = "food";
      resetLight();
      resetCarbon();
      resetTemp();

      if (evt.nativeEvent.button >= 0) {
          mostFood = true;
          littleFood = false;
          moreFood = false;
          findActiveControl();
      }
stage.update();
});

    //Update stage will render next frame this is for animating food
    createjs.Ticker.framerate = 40;
    createjs.Ticker.addEventListener("tick", moveFood);


    //makes food move randomly
    function moveFood() {

      if(tick > 100) {
        xT = Math.ceil(Math.random()* tankWidth);
        yT = Math.ceil(Math.random()* tankHeight * 4/5);
        tick = 0;
      }

        tick++;

        xP += (xT - xP)/15;
        yP += (yT - yP)/15;

      for (var i = 0; i < foodArr.length; i++) {
          foodArr[i].x += ((xP - foodArr[i].x)/60);
          foodArr[i].y += ((yP - foodArr[i].y)/60);
          stage.update();

          foodCollision2 = testCollision(coral2,foodArr[i]);
          if (foodCollision2 == true) {

            tankContainer.removeChild(foodArr[i]);
            foodArr.splice(foodArr[i], 1);
            console.log("coral ate the food");

            if (littleFood == true) {
              fullBleach();
              experiment++;
              $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red Bleached!</b>"
              + "<br>After 30 days, <u>too little food</u> starved Big Red. He can get some nutrients from photosynthesis, but still needs"
              + " food like microscopic shrimp to keep him healthy." );
            }

            if (moreFood == true) {
              coralReset();
              experiment++;
              $( "#results" ).append("<br>Experiment " + experiment + ": <b>No bleaching</b>"
              + "<br>We're currently giving Big Red a medium amount of food, which seems to be keeping him happy." );
            }

            if (mostFood == true) {
              coralReset();
              experiment++;
              $( "#results" ).append("<br>Experiment " + experiment + ": <b>Big Red is healthy</b>"
              + "<br>More food just means more nutrients for Big Red, so no bleaching occurred. It's hard to overfeed this guy!" );
            }

            resetFoodValues();
            stage.update();
          }

          // foodCollision3 = testCollision(coral3,foodArr[i]);
          // if (foodCollision3 == true) {
          //   tankContainer.removeChild(foodArr[i]);
          //   foodArr.splice(foodArr[i], 1);
          //   console.log("coral 3 ate the food");
          //
          //   stage.update();
          // }
      }

    } //end makeFood function
}
