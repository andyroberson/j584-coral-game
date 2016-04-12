function createFood() {

  //creating food button
  var foodButton = new createjs.Bitmap("assets/shrimp1.png");
      //foodButton.graphics.beginFill("Orange").drawCircle(0, 0, 20);
      // foodButton.scaleX = 1.2;
      // foodButton.scaleY = 1.2;
      foodButton.x = (leftControlMenu.width*(3/7));
      foodButton.y = 120;
      // foodButton.width = tankWidth / 10;
      // foodButton.height = menuHeight / 2;
      // foodButton.setBounds(foodButton.x, foodButton.y, foodButton.width, foodButton.height);

var foodButton2 = new createjs.Bitmap("assets/shrimp2.png");
     foodButton2.x = (leftControlMenu.width*(4/11));
     foodButton2.y = 165;//(switchContainer.height + 10 + 20);

var foodButton3 = new createjs.Bitmap("assets/shrimp3.png");
     foodButton3.x = (leftControlMenu.width*(4/11));
     foodButton3.y = 215;//(switchContainer.height + 10 + 20);

     littleFood = false;
     moreFood = false;
     mostFood = false;

     makeFood();

function makeFood() {
    leftControlMenu.addChild(foodButton);
    leftControlMenu.addChild(foodButton2);
    leftControlMenu.addChild(foodButton3);
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
      if (evt.nativeEvent.button >= 0) {
          littleFood = true;
          makeNewFood();
      }
stage.update();
});

//more shrimp
foodButton2.on("click", function (evt) {
      if (evt.nativeEvent.button >= 0) {
          moreFood = true;
          makeNewFood();
          console.log("moreFood");
      }
stage.update();
});

//most shrimp
foodButton3.on("click", function (evt) {
      if (evt.nativeEvent.button >= 0) {
          mostFood = true;
          makeNewFood();
          console.log("mostFood");
      }
stage.update();
});

//add appropriate food image based on which value is true (which is set depending on which button was clicked)
function makeNewFood() {
      if (littleFood == true) {
            foodArr.push(new createjs.Bitmap("assets/test-shrimp.jpg"));
            resetFoodValues();
            console.log("We just added a little bit of food");
      }

      if (moreFood == true) {
            foodArr.push(new createjs.Bitmap("assets/test-fish.png"));
            resetFoodValues();
            console.log("We just added more food");
      }

      if (mostFood == true) {
            foodArr.push(new createjs.Bitmap("assets/test-whale.png"));
            resetFoodValues();
            console.log("We just added the MOST food");
      }

      for (var i = 0; i < foodArr; i ++) {
        foodArr[i].x = 40;
        foodArr[i].y = 40;
      }

      console.log(foodArr[i].x);

      makeDraggable(foodArr[i]);
      tankContainer.addChild(foodArr[i]);
      stage.update();

      }

    //Update stage will render next frame this is for animating food
    createjs.Ticker.framerate = 40;
    createjs.Ticker.addEventListener("tick", moveFood);
    //createjs.Ticker.on("tick", foodIntersect);

    //makes food move randomly
    function moveFood() {

    //TODO - make this only work if mousedown on newFood is false
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

          foodCollision = testCollision(coral,foodArr[i]);
          if (foodCollision == true) {

            //remove food because it got eaten
            tankContainer.removeChild(foodArr[i]);
            foodArr.splice(foodArr[i], 1);
            console.log("coral 1 ate the food");
            //update stage to reflect removed food
            stage.update();
          }

          foodCollision2 = testCollision(coral2,foodArr[i]);
          if (foodCollision2 == true) {
            tankContainer.removeChild(foodArr[i]);
            foodArr.splice(foodArr[i], 1);
            console.log("coral 2 ate the food");

            stage.update();
          }

          foodCollision3 = testCollision(coral3,foodArr[i]);
          if (foodCollision3 == true) {
            tankContainer.removeChild(foodArr[i]);
            foodArr.splice(foodArr[i], 1);
            console.log("coral 3 ate the food");

            stage.update();
          }
      }

    } //end makeFood function
}
