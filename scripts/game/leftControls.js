//left container for controls or left contols?

function createLeftControls() {
  //light controls
  //food controls
  leftControlMenu = new createjs.Container();
  leftControlMenu.x = 0;
  leftControlMenu.y = 0;
  leftControlMenu.width = (w*(113/700));
  leftControlMenu.height = tankHeight;
  leftMenuHeight = leftControlMenu.height;
  leftControlMenu.setBounds(leftControlMenu.x, leftControlMenu.y, leftControlMenu.width, leftControlMenu.height);
  console.log("left controls: " + leftControlMenu.getBounds());

  //adding background color to menu container
  leftControls = new createjs.Shape();
      leftControls.graphics.drawRect(leftControlMenu.x, leftControlMenu.y, leftControlMenu.width, leftControlMenu.height);
          //drawRect(x, y, w, h)
      leftControls.height = leftControlMenu.height;
      leftControls.width = leftControlMenu.width;
      console.log("control height is " + leftControls.height);
      console.log("control width is " + leftControls.width);
      leftControls.setBounds(leftControls.x, leftControls.y, leftControls.height, leftControls.width);

  makeLeftControls();

      function makeLeftControls() {
          stage.addChild(leftControlMenu);
          leftControlMenu.addChild(leftControls);

          stage.update();
      }

}
