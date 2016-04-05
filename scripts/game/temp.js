function createTemp() {

  var tempContainer = new createjs.Container();
  tempContainer.x = (w*(5/7));
  tempContainer.y = 0;
  tempContainer.width = (w*(2/7));
  tempContainer.height = (h*(1/4));
  tempHeight = tempContainer.height;
  tempWidth = tempContainer.width;
  tempContainer.setBounds(tempContainer.x, tempContainer.y, tempContainer.width, tempContainer.height);
  // new createjs.Shape()
  // tempContainer.graphics.beginFill("Black").drawRect(0, 0, w/8, h/5);

  var tempBackground = new createjs.Shape();
  tempBackground.graphics.beginFill("Purple").drawRect(0, 0, tempWidth, tempHeight);


  var screenContainer = new createjs.Container();
  screenContainer.x = (tempWidth * (1/4));
  screenContainer.y = (tempHeight * (1/4));
  screenContainer.width = (tempWidth * (2/5));
  screenContainer.height = (tempHeight * (2/4));
  screenHeight = screenContainer.height;
  screenWidth = screenContainer.width;
  screenContainer.setBounds(screenContainer.x, screenContainer.y, screenContainer.width, screenContainer.height);

  //background for temperature window
  var tempScreen = new createjs.Shape();
  tempBackground.graphics.beginFill("Navy").drawRect(screenContainer.x, screenContainer.y, screenWidth, screenHeight);


  //http://www.createjs.com/docs/easeljs/classes/Graphics.html#method_drawPolyStar
  //drawPolyStar(x, y, radius, sides, pointsize, angle)
  var upArrow = new createjs.Shape();
  upArrow.graphics.beginFill("Black").drawPolyStar((tempWidth*(4/5)), (tempHeight*(1/3)), (tempWidth*(1/10)), 3, 0, -90);

  var downArrow = new createjs.Shape();
  downArrow.graphics.beginFill("Black").drawPolyStar((tempWidth*(4/5)), (tempHeight*(2/3)), (tempWidth*(1/10)), 3, 0, 90);

  var temperature = new createjs.Text();

  var degrees = "70 F";

  temperature.text = (degrees);
  temperature.color = "white";
  temperature.font = "20px arial";
  temperature.x = (screenWidth / 4);
  temperature.y = (screenHeight / 3);


  makeTemp();

  function makeTemp() {
        stage.addChild(tempContainer);
        tempContainer.addChild(tempBackground);
        tempContainer.addChild(screenContainer);
        tempContainer.addChild(upArrow);
        tempContainer.addChild(downArrow);
        screenContainer.addChild(tempScreen);
        screenContainer.addChild(temperature);
        stage.update();
  }
}
