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

 // var foodButtonBg = new createjs.Shape();
 //     foodButtonBg.graphics.beginFill("White").drawCircle(33, 48, 21);
 //     foodButtonBg.cursor = "pointer";
 //
 // var foodButtonBg2 = new createjs.Shape();
 //     foodButtonBg2.graphics.beginFill("White").drawCircle(33, 94, 21);
 //     foodButtonBg2.cursor = "pointer";
 //
 // var foodButtonBg3 = new createjs.Shape();
 //     foodButtonBg3.graphics.beginFill("White").drawCircle(33, 141, 21);
 //     foodButtonBg3.cursor = "pointer";

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
    // foodContainer.addChild(foodButtonBg);
    // foodContainer.addChild(foodButtonBg2);
    // foodContainer.addChild(foodButtonBg3);
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

// //highlight foodButton when hovered not accessing mouseover?
// foodButton.addEventListener("mouseover", function (evt) {
//   foodButton.graphics.clear().beginFill("Red").drawCircle(0, 0, 20).endFill();
//   foodButton.x = (leftControlMenu.width/4);
//   foodButton.y = menuHeight / 2;
//   console.log("food button is hovered");
//   stage.update();
// });
//
// //when not hovered, remove the highlight
// foodButton.addEventListener("mouseout", function (evt) {
//   foodButton.graphics.clear().beginFill("Orange").drawCircle(0, 0, 20).endFill();
//   foodButton.x = tankWidth / 6;
//   foodButton.y = menuHeight / 2;
//   console.log("food button isn't hovered");
//   stage.update();
// });

//when the mouse is clicked, set the appropriate value to true  and make new Food
//little shrimp
foodButton.on("click", function (evt) {

      activeControl = "food";
      resetLight();
      resetCarbon();
      resetTemp();

      if (evt.nativeEvent.button >= 0) {
          littleFood = true;
          makeNewFood();
          $( "#test" ).append( "<br>We added a more food which means the coral might still be hungry");
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
          makeNewFood();
          console.log("moreFood");
          $( "#test" ).append( "<br>We added a more food which means the coral is probably happy");
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
          makeNewFood();
          console.log("mostFood");
          $( "#test" ).append( "<br>We added a lot of food which means the coral is probably overfed");
      }
stage.update();
});

//add appropriate food image based on which value is true (which is set depending on which button was clicked)
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
        foodArr[i].x = 200;
        foodArr[i].y = 0;
      }

      console.log(foodArr[i].x);

      makeDraggable(foodArr[i]);
      tankContainer.addChild(foodArr[i]);
      stage.update();

  }

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

          // foodCollision = testCollision(coral,foodArr[i]);
          // if (foodCollision == true) {
          //
          //   //remove food because it got eaten
          //   tankContainer.removeChild(foodArr[i]);
          //   foodArr.splice(foodArr[i], 1);
          //   console.log("coral 1 ate the food");
          //   //update stage to reflect removed food
          //   stage.update();
          // }

          foodCollision2 = testCollision(coral2,foodArr[i]);
          if (foodCollision2 == true) {

            tankContainer.removeChild(foodArr[i]);
            foodArr.splice(foodArr[i], 1);
            console.log("coral 2 ate the food");

            if (littleFood == true) {
              fullBleach();
            }

            if (moreFood == true) {
              coralReset();
            }

            if (mostFood == true) {
              coralReset();
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
