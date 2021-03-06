function createTemp() {

  //container for all temperature graphics
  tempContainer = new createjs.Container();
      tempContainer.x = (rightControlMenu.x + 20); //10 padding
      tempContainer.y = (leftMenuHeight/6);
      tempContainer.width = (leftControlMenu.width * (70/113)); //-20 for 10 padding on left and right
      tempContainer.height = 102;
      tempHeight = tempContainer.height;
      tempWidth = tempContainer.width;
      tempContainer.setBounds(tempContainer.x, tempContainer.y, tempContainer.width, tempContainer.height);
  // new createjs.Shape()
  // tempContainer.graphics.beginFill("Black").drawRect(0, 0, w/8, h/5);


  //bg for temperature graphics
  var tempBackground = new createjs.Bitmap("assets/temp-bg.png");
      tempBackground.x = 0;
      tempBackground.y = 0;


  //container for screen that shows temp
  var screenContainer = new createjs.Container();
      screenContainer.x = (tempWidth * (1/8));
      screenContainer.y = (tempHeight * (2/7));
      screenContainer.width = (tempWidth * (6/8));
      screenContainer.height = (tempHeight * (3/7));

      screenHeight = screenContainer.height;
      screenWidth = screenContainer.width;
      screenContainer.setBounds(screenContainer.x, screenContainer.y, screenContainer.width, screenContainer.height);

  degrees = 82;

  //http://www.createjs.com/docs/easeljs/classes/Graphics.html#method_drawPolyStar
  //drawPolyStar(x, y, radius, sides, pointsize, angle)
  var upArrow = new createjs.Shape();
      upArrow.graphics.beginFill("#fff").drawPolyStar((tempWidth*(5/11)), (tempHeight*(5/13)), (tempWidth*(1/6)), 3, 0, -90);
      upArrow.cursor = "pointer";

  //increasing the temperature
  upArrow.addEventListener("click", function (evt) {
      degrees = degrees + 1;
      temperature.text = degrees;

      activeControl = "temp";
      resetFood();
      resetLight();
      resetCarbon();
      console.log(activeControl);

      findActiveControl();
      stage.update();
  });

  var downArrow = new createjs.Shape();
      downArrow.graphics.beginFill("#fff").drawPolyStar((tempWidth*(5/11)), (tempHeight*(10/12)), (tempWidth*(1/6)), 3, 0, 90);
      downArrow.cursor = "pointer";

      downArrow.addEventListener("click", function (evt) {
        degrees = degrees - 1;
        temperature.text = degrees;

        activeControl = "temp";
        resetFood();
        resetLight();
        resetCarbon();
        console.log(activeControl);

        findActiveControl();
        stage.update();
      });

  //creating and styling temperature text
  temperature = new createjs.Text();
      temperature.text = (degrees);
      temperature.color = "#fff";
      temperature.font = "15px arial";
      temperature.x = (screenWidth / 8);
      temperature.y = (screenHeight * (5/9));

  //creating and styling F in farenheit
  var farenheit = new createjs.Text();
      farenheit.text = "F"
      farenheit.color = "#fff";
      farenheit.font = "bold 10px arial";
      farenheit.x = (screenWidth * (9/14));
      farenheit.y = (screenHeight *(5/9));

  makeTemp();

  function makeTemp() {
        rightControlMenu.addChild(tempContainer);
        tempContainer.addChild(tempBackground);
        tempContainer.addChild(screenContainer);
        tempContainer.addChild(upArrow);
        tempContainer.addChild(downArrow);
        screenContainer.addChild(temperature);
        screenContainer.addChild(farenheit);
        stage.update();
  }

}
