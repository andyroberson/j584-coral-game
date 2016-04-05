function createTemp() {

  var tempContainer = new createjs.Container();
  tempContainer.x = (w*(4/5));
  tempContainer.y = 0;
  tempContainer.width = (w*(1/5));
  tempContainer.height = (h*(1/8));
  tempHeight = tempContainer.height;
  tempWidth = tempContainer.width;
  tempContainer.setBounds(tempContainer.x, tempContainer.y, tempContainer.height, tempContainer.width);
  // new createjs.Shape()
  // tempContainer.graphics.beginFill("Black").drawRect(0, 0, w/8, h/5);

  var tempBackground = new createjs.Shape();
  tempBackground.graphics.beginFill("Red").drawRect(0, 0, tempHeight, tempWidth);
  console.log("hey we made temperature");

  makeTemp();

  function makeTemp() {
        stage.addChild(tempContainer);
        tempContainer.addChild(tempBackground)
        stage.update();
  }
}
