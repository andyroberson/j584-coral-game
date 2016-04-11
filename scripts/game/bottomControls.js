function createBottomControls() {
  //creating controls menu container
controlsMenu = new createjs.Container();
     controlsMenu.x = 0;
     controlsMenu.y = (h*(4/5));
     controlsMenu.width = w;
     controlsMenu.height = (h/5);
     menuHeight = controlsMenu.height;
     controlsMenu.setBounds(controlsMenu.x, controlsMenu.y, controlsMenu.width, controlsMenu.height);
     console.log(controlsMenu.getBounds());

 //adding background color to menu container
 thecontrols = new createjs.Shape();
     thecontrols.graphics.beginFill("Black").drawRect(0, 0, w, controlsMenu.height);
         //drawRect(x, y, w, h)
     thecontrols.height = controlsMenu.height;
     thecontrols.width = w;
     console.log("control height is " + thecontrols.height);
     console.log("control width is " + thecontrols.width);
     thecontrols.setBounds(thecontrols.x, thecontrols.y, thecontrols.height, thecontrols.width);

     makeBottomControls();

     function makeBottomControls() {
       stage.addChild(controlsMenu);
       controlsMenu.addChild(thecontrols);
     }
}
