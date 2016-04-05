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
  screenContainer.x = (tempWidth / 3);
  screenContainer.y = (tempHeight / 3);
  screenContainer.width = (tempWidth / 3);
  screenContainer.height = (tempHeight / 3);
  screenHeight = screenContainer.height;
  screenWidth = screenContainer.width;
  screenContainer.setBounds(screenContainer.x, screenContainer.y, screenContainer.width, screenContainer.height);

  //background for temperature window
  var tempScreen = new createjs.Shape();
  tempBackground.graphics.beginFill("Navy").drawRect(screenContainer.x, screenContainer.y, screenWidth, screenHeight);

  makeTemp();

  function makeTemp() {
        stage.addChild(tempContainer);
        tempContainer.addChild(tempBackground)
        tempContainer.addChild(screenContainer);
        screenContainer.addChild(tempScreen);
        stage.update();
  }
}
