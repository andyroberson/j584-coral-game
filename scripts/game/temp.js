function createTemp() {

  //container for all temperature graphics
  var tempContainer = new createjs.Container();
      tempContainer.x = (rightControlMenu.x + 20); //10 padding
      tempContainer.y = (leftMenuHeight/6);
      tempContainer.width = (leftControlMenu.width - 20); //-20 for 10 padding on left and right
      tempContainer.height = leftMenuHeight/4;
      tempHeight = tempContainer.height;
      tempWidth = tempContainer.width;
      tempContainer.setBounds(tempContainer.x, tempContainer.y, tempContainer.width, tempContainer.height);
  // new createjs.Shape()
  // tempContainer.graphics.beginFill("Black").drawRect(0, 0, w/8, h/5);


  //bg for temperature graphics
  var tempBackground = new createjs.Shape();
      tempBackground.graphics.beginFill("Teal").drawRect(0, 0, tempWidth, tempHeight);

  //container for screen that shows temp
  var screenContainer = new createjs.Container();
      screenContainer.x = (tempWidth * (1/7));
      screenContainer.y = (tempHeight * (1/4));
      screenContainer.width = (tempWidth * (1/2));
      screenContainer.height = (tempHeight * (2/4));

      screenHeight = screenContainer.height;
      screenWidth = screenContainer.width;
      screenContainer.setBounds(screenContainer.x, screenContainer.y, screenContainer.width, screenContainer.height);

  //background for temperature window
  var tempScreen = new createjs.Shape();
  tempBackground.graphics.beginFill("#EEE").drawRect(screenContainer.x, screenContainer.y, screenWidth, screenHeight);

  var degrees = 70.0;

  //http://www.createjs.com/docs/easeljs/classes/Graphics.html#method_drawPolyStar
  //drawPolyStar(x, y, radius, sides, pointsize, angle)
  var upArrow = new createjs.Shape();
  upArrow.graphics.beginFill("#eee").drawPolyStar((tempWidth*(4/5)), (tempHeight*(1/3)), (tempWidth*(1/10)), 3, 0, -90);

  //increasing the temperature
  upArrow.addEventListener("click", function (evt) {
      degrees = degrees + .10;
      degrees = Math.round(degrees * 100) / 100;
      temperature.text = degrees;

      //TODO CHANGE GRAPHICS OF CORAL DEPENDING ON HOW MUCH DEGREES IS
      stage.update();
  });

  var downArrow = new createjs.Shape();
  downArrow.graphics.beginFill("#eee").drawPolyStar((tempWidth*(4/5)), (tempHeight*(2/3)), (tempWidth*(1/10)), 3, 0, 90);

  downArrow.addEventListener("click", function (evt) {
    degrees = degrees - .1;
    degrees = Math.round(degrees * 100) / 100;
    temperature.text = degrees;
    stage.update();
  });

  //creating and styling temperature text
  var temperature = new createjs.Text();
      temperature.text = (degrees);
      temperature.color = "#666";
      temperature.font = "15px arial";
      temperature.x = (screenWidth / 5);
      temperature.y = (screenHeight / 4);

  //creating and styling F in farenheit
  var farenheit = new createjs.Text();
      farenheit.text = "F"
      farenheit.color = "#666";
      farenheit.font = "bold 10px arial";
      farenheit.x = (screenWidth * (10/13));
      farenheit.y = (screenHeight / 5);

  makeTemp();

  function makeTemp() {
        rightControlMenu.addChild(tempContainer);
        tempContainer.addChild(tempBackground);
        tempContainer.addChild(screenContainer);
        tempContainer.addChild(upArrow);
        tempContainer.addChild(downArrow);
        screenContainer.addChild(tempScreen);
        screenContainer.addChild(temperature);
        screenContainer.addChild(farenheit);
        stage.update();
  }

}
