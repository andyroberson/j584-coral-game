function createBottomControls() {
  //creating controls menu container
controlsMenu = new createjs.Container();
     //needs to align with tankContainer
     controlsMenu.x = tankContainer.x;

     //needs to start where tankContainer ends
     controlsMenu.y = tankContainer.height;

     controlsMenu.width = tankContainer.width;
     controlsMenu.height = (h*(228/500));
     menuHeight = controlsMenu.height;
     controlsMenu.setBounds(controlsMenu.x, controlsMenu.y, controlsMenu.width, controlsMenu.height);
     console.log(controlsMenu.getBounds());

 //adding background color to menu container
 thecontrols = new createjs.Shape();
     thecontrols.graphics.beginFill("Black").drawRect(0, 0, controlsMenu.width, controlsMenu.height);
         //drawRect(x, y, w, h)
     thecontrols.height = controlsMenu.height;
     thecontrols.width = controlsMenu.width;
     console.log("control height is " + thecontrols.height);
     console.log("control width is " + thecontrols.width);
     thecontrols.setBounds(thecontrols.x, thecontrols.y, thecontrols.width, thecontrols.height);

     makeBottomControls();

     function makeBottomControls() {
       stage.addChild(controlsMenu);
       controlsMenu.addChild(thecontrols);
     }
}
