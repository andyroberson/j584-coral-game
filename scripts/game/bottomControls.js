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


     controlsMenuBackground.setBounds( controlsMenuBackground.x,  controlsMenuBackground.y,  controlsMenuBackground.width,  controlsMenuBackground.height);

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
         stage.update();
        //  controlsMenu.addChild(actionLog);
        //  actionLog.addChild(actionLogBG);
         //actionLog.addChild(logTitle);
     }

}
