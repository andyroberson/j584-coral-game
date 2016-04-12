function createFood() {
  var littleFood;
  var moreFood;
  var mostFood;
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

     makeFood();

function makeFood() {
    leftControlMenu.addChild(foodButton);
    leftControlMenu.addChild(foodButton2);
    leftControlMenu.addChild(foodButton3);
    stage.update();
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

//when the mouse is clicked, make a new food instance and make this draggable
foodButton.addEventListener("mousedown", function (evt) {
if (evt.nativeEvent.button >= 0) {
    makeNewFood();
}
stage.update();
});

foodButton2.addEventListener("mousedown", function (evt) {
if (evt.nativeEvent.button >= 0) {
    makeMoreFood();
}
stage.update();
});

foodButton3.addEventListener("mousedown", function (evt) {
if (evt.nativeEvent.button >= 0) {
    makeMostFood();
}
stage.update();
});

function makeNewFood() {
          foodArr.push(new createjs.Bitmap("assets/test-shrimp.jpg"));
          console.log("We're at the make A LITTLE new food function");

          for (var i = 0; i < foodArr; i ++) {
            foodArr[i].x = 40;
            foodArr[i].y = 40;
          }
          console.log(foodArr[i].x);

          makeDraggable(foodArr[i]);
          tankContainer.addChild(foodArr[i]);
          stage.update();
          //testCollision(coral,newFood);

          littleFood ==  true;
}

function makeMoreFood() {
          foodArr.push(new createjs.Bitmap("assets/test-shrimp.jpg"));
          console.log("We're at the make MORE food function");

          for (var i = 0; i < foodArr2; i ++) {
            foodArr2[i].x = 100;
            foodArr2[i].y = 40;
          }
          console.log(foodArr2[i].x);

          makeDraggable(foodArr2[i]);
          tankContainer.addChild(foodArr2[i]);
          stage.update();

          return true;
}

function makeMostFood() {
          foodArr.push(new createjs.Bitmap("assets/test-shrimp.jpg"));
          console.log("We're at the make MOST food function");

          for (var i = 0; i < foodArr; i ++) {
            foodArr[i].x = 40;
            foodArr[i].y = 40;
          }

          console.log(foodArr[i].x);

          makeDraggable(foodArr[i]);
          tankContainer.addChild(foodArr[i]);
          stage.update();

          return true;
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

            if (littleFood == true) {
                for (var i = 0; i < foodArr.length; i++) {
                    foodArr[i].x += ((xP - foodArr[i].x)/60);
                    foodArr[i].y += ((yP - foodArr[i].y)/60);
                    stage.update();
                    // console.log("in food array?");
                }
            }

            else if (moreFood == true) {
                for (var i = 0; i < foodArr2.length; i++) {
                  foodArr2[i].x += ((xP - foodArr2[i].x)/60);
                  foodArr2[i].y += ((yP - foodArr2[i].y)/60);
                  stage.update();
                }
              }

            else if (mostFood == true) {
                for (var i = 0; i < foodArr3.length; i++) {
                  foodArr3[i].x += ((xP - foodArr3[i].x)/60);
                  foodArr3[i].y += ((yP - foodArr3[i].y)/60);
                  stage.update();
                }
            }


            foodCollision = testCollision(coral,foodArr[i]);
                if (foodCollision == true) {
                  //console.log("the food is colliding");
                  //remove food because it got eaten
                  tankContainer.removeChild(foodArr[i]);
                  foodArr.splice(foodArr[i], 1);
                  console.log("coral 1 ate the food");
                  //TODO - make images add to array and remove image in array; at the moment it's removing the image but still listenting
                  stage.update();
                }

            foodCollision2 = testCollision(coral2,foodArr2[i]);
                if (foodCollision2 == true) {
                  tankContainer.removeChild(foodArr2[i]);
                  foodArr2.splice(foodArr2[i], 1);
                  console.log("coral 2 ate the food");
                  //TODO - make images add to array and remove image in array; at the moment it's removing the image but still listenting
                  stage.update();
                }

            foodCollision3 = testCollision(coral3,foodArr3[i]);
                if (foodCollision3 == true) {
                  tankContainer.removeChild(foodArr3[i]);
                  foodArr3.splice(foodArr3[i], 1);
                  console.log("coral 3 ate the food");
                  //TODO - make images add to array and remove image in array; at the moment it's removing the image but still listenting
                  stage.update();
                }
            }



}
