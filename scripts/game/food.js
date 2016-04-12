function createFood() {

  //creating food button
  var foodButton = new createjs.Shape().set({cursor: "pointer"});

      foodButton.graphics.beginFill("Orange").drawCircle(0, 0, 20);
      foodButton.x = tankWidth / 8;
      foodButton.y = menuHeight / 2;
      foodButton.width = tankWidth / 10;
      foodButton.height = menuHeight / 2;
      foodButton.setBounds(foodButton.x, foodButton.y, foodButton.width, foodButton.height);
      makeFood();


  function makeFood() {
        controlsMenu.addChild(foodButton);
        stage.update();
  }

//highlight foodButton when hovered not accessing mouseover?
foodButton.addEventListener("mouseover", function (evt) {
  foodButton.graphics.clear().beginFill("Red").drawCircle(0, 0, 20).endFill();
  foodButton.x = tankWidth / 6;
  foodButton.y = menuHeight / 2;
  console.log("food button is hovered");
  stage.update();
});

//when not hovered, remove the highlight
foodButton.addEventListener("mouseout", function (evt) {
  foodButton.graphics.clear().beginFill("Orange").drawCircle(0, 0, 20).endFill();
  foodButton.x = tankWidth / 6;
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

function makeNewFood() {
foodArr.push(new createjs.Bitmap("assets/test-shrimp.jpg"));
console.log("We're at the make new food function");

for (var i = 0; i < foodArr; i ++) {
  foodArr[i].x = 40;
  foodArr[i].y = 40;
}
console.log(foodArr[i].x);

makeDraggable(foodArr[i]);
tankContainer.addChild(foodArr[i]);
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
      // console.log("in food array?");

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

      foodCollision2 = testCollision(coral2,foodArr[i]);
      if (foodCollision2 == true) {
        //console.log("the food is colliding");
        //remove food because it got eaten
        tankContainer.removeChild(foodArr[i]);
        foodArr.splice(foodArr[i], 1);
        console.log("coral 2 ate the food");
        //TODO - make images add to array and remove image in array; at the moment it's removing the image but still listenting
        stage.update();
      }

      foodCollision3 = testCollision(coral3,foodArr[i]);
      if (foodCollision3 == true) {
        //console.log("the food is colliding");
        //remove food because it got eaten
        tankContainer.removeChild(foodArr[i]);
        foodArr.splice(foodArr[i], 1);
        console.log("coral 3 ate the food");
        //TODO - make images add to array and remove image in array; at the moment it's removing the image but still listenting
        stage.update();
      }
  }

  //test collision between coral and newFood ; if collide is true, the coral "ate" the food


  //IF food.x is within the x + width of coral then remove food

}
}
