function createBottomControls() {
  //creating controls menu container
controlsMenu = new createjs.Container();
     //needs to align with tankContainer
     controlsMenu.x = tankContainer.x - 61;

     //needs to start where tankContainer ends
     controlsMenu.y = tankContainer.height;

     controlsMenu.width = (w*(582/700));
     controlsMenu.height = (h*(228/500));
     menuHeight = controlsMenu.height;
     controlsMenu.setBounds(controlsMenu.x, controlsMenu.y, controlsMenu.width, controlsMenu.height);
     console.log(controlsMenu.getBounds());

 //adding background color to menu container
 controlsMenuBackground= new createjs.Bitmap("assets/tank-bottom.png");
     controlsMenuBackground.x = 0;
     controlsMenuBackground.y = 0;
     controlsMenuBackground.width = controlsMenu.width;
     controlsMenuBackground.height = controlsMenu.height;
     controlsMenuBackground.scaleX = 1.15;

     controlsMenuBackground.setBounds(controlsMenuBackground.x,  controlsMenuBackground.y,  controlsMenuBackground.width,  controlsMenuBackground.height);

buttonContainer = new createjs.Container();
      buttonContainer.x = (controlsMenu.width * 2/5);
      buttonContainer.y = 1;
      buttonContainer.width = (controlsMenu.width / 5);
      buttonContainer.height = 42;
      buttonContainer.setBounds(buttonContainer.x, buttonContainer.y, buttonContainer.width, buttonContainer.height);


startButton = new createjs.Shape();
     startButton.x = 0;
     startButton.y = 0;
     startButton.width = buttonContainer.width;
     startButton.height = buttonContainer.height;
     startButton.graphics.beginFill("Teal").beginStroke("White").drawRect(startButton.x, startButton.y, startButton.width, startButton.height);
     startButton.cursor = "pointer";

buttonText = new createjs.Text();
      buttonText.text = "START";
      buttonText.color = "#fff";
      buttonText.font = "25px arial";
      buttonText.x = 27;
      buttonText.y = 7;
// //container to log all actions
//  actionLog = new createjs.Container();
//      actionLog.x = (tankContainer.width/4)
//      actionLog.y = 20;
//      actionLog.width = (tankContainer.width/2);
//      actionLog.height = (menuHeight - 40);
//      actionLog.setBounds(actionLog.x, actionLog.y, actionLog.width, actionLog.height);
//
// //actionLog background
// actionLogBG = new createjs.Shape();
//     actionLogBG.graphics.drawRect(0, 0, actionLog.width, actionLog.height);
//
// var logTitle = new createjs.Text();
//     logTitle.text = "Notes"
//     logTitle.color = "#666";
//     logTitle.font = "bold 20px arial";
//     logTitle.x = (actionLog.width/3 + 10);
//     logTitle.y = 5;
//
//     $( "#bottom-aquarium" ).css({width: controlsMenu.width});
//     $( "#test" ).css({top: controlsMenu.y + 60, left: logTitle.x + 270, width: actionLog.width});
//     $( "#test" ).append( "the height is " + tankHeight);


     makeBottomControls();

     function makeBottomControls() {
         stage.addChild(controlsMenu);
         controlsMenu.addChild(controlsMenuBackground);
         controlsMenu.addChild(buttonContainer);
         buttonContainer.addChild(startButton);
         buttonContainer.addChild(buttonText);
         stage.update();
        //  controlsMenu.addChild(actionLog);
        //  actionLog.addChild(actionLogBG);
         //actionLog.addChild(logTitle);
     }

}
