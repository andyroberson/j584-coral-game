function createBottomControls() {
  //creating controls menu container
controlsMenu = new createjs.Container();
     //needs to align with tankContainer
     controlsMenu.x = tankContainer.x + 1;

     //needs to start where tankContainer ends
     controlsMenu.y = tankContainer.height;

     controlsMenu.width = tankContainer.width;
     controlsMenu.height = (h*(228/500));
     menuHeight = controlsMenu.height;
     controlsMenu.setBounds(controlsMenu.x, controlsMenu.y, controlsMenu.width, controlsMenu.height);
     console.log(controlsMenu.getBounds());

 //adding background color to menu container
 thecontrols = new createjs.Shape();
     thecontrols.graphics.drawRect(0, 0, controlsMenu.width, controlsMenu.height);
         //drawRect(x, y, w, h)
     thecontrols.height = controlsMenu.height;
     thecontrols.width = controlsMenu.width;
     console.log("control height is " + thecontrols.height);
     console.log("control width is " + thecontrols.width);
     thecontrols.setBounds(thecontrols.x, thecontrols.y, thecontrols.width, thecontrols.height);

//container to log all actions
 actionLog = new createjs.Container();
     actionLog.x = (tankContainer.width/4)
     actionLog.y = 20;
     actionLog.width = (tankContainer.width/2);
     actionLog.height = (menuHeight - 40);
     actionLog.setBounds(actionLog.x, actionLog.y, actionLog.width, actionLog.height);

//actionLog background
actionLogBG = new createjs.Shape();
    actionLogBG.graphics.drawRect(0, 0, actionLog.width, actionLog.height);

var logTitle = new createjs.Text();
    logTitle.text = "Notes"
    logTitle.color = "#666";
    logTitle.font = "bold 20px arial";
    logTitle.x = (actionLog.width/3 + 10);
    logTitle.y = 5;

    $( "#bottom-aquarium" ).css({width: controlsMenu.width});
    $( "#test" ).css({top: controlsMenu.y + 60, left: logTitle.x + 270, width: actionLog.width});
    $( "#test" ).append( "the height is " + tankHeight);


     makeBottomControls();

     function makeBottomControls() {
         stage.addChild(controlsMenu);
         controlsMenu.addChild(thecontrols);
         controlsMenu.addChild(actionLog);
         actionLog.addChild(actionLogBG);
         //actionLog.addChild(logTitle);
     }

}
