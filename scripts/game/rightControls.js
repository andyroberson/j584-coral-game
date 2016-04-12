function createRightControls() {

  //temp controls
  //co2 controls

  rightControlMenu = new createjs.Container();
      rightControlMenu.x = (w*294/700);
      rightControlMenu.y = 0;
      rightControlMenu.width = leftControlMenu.width;
      rightControlMenu.height = tankHeight;
      rightMenuHeight = rightControlMenu.height;
      rightControlMenu.setBounds(rightControlMenu.x, rightControlMenu.y, rightControlMenu.width, rightControlMenu.height);
  // console.log("right controls: " + rightControlMenu.getBounds());

  //adding background color to menu container
  rightControls = new createjs.Shape();
      rightControls.graphics.drawRect(rightControlMenu.x, rightControlMenu.y, rightControlMenu.width, rightControlMenu.height);
          //drawRect(x, y, w, h)
      rightControls.height = rightControlMenu.height;
      rightControls.width = rightControlMenu.width;
      console.log("RIGHT control height is " + rightControls.height);
      console.log("right control width is " + rightControls.width);
      rightControls.setBounds(rightControls.x, rightControls.y, rightControls.height, rightControls.width);

      makeRightControls();

      function makeRightControls() {
        stage.addChild(rightControlMenu);
        rightControlMenu.addChild(rightControls);

        stage.update();
      }

}
