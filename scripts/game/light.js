

function createLight() {
//setting up light controls
var lightControlOff = new createjs.Shape();

    lightControlOff.graphics.beginFill("Purple").drawRect(-150, 0, (w/6), (menuHeight / 2));
    lightControlOff.x = tankWidth / 2;
    lightControlOff.y = menuHeight / 4;
    lightControlOff.width = tankWidth / 6;
    lightControlOff.height = menuHeight / 4;
    lightControlOff.setBounds(lightControlOff.x, lightControlOff.y, lightControlOff.width, lightControlOff.height);
    console.log(lightControlOff.x);
    makeLight();

    function makeLight() {
      controlsMenu.addChild(lightControlOff);
      stage.update();
    }

var lightControlDim = new createjs.Shape();

    lightControlDim.graphics.beginFill("Green").drawRect(0, 0, (w/6), (menuHeight / 2));
    lightControlDim.x = tankWidth / 2;
    lightControlDim.y = menuHeight / 4;
    lightControlDim.width = tankWidth / 6;
    lightControlDim.height = menuHeight / 4;
    lightControlDim.setBounds(lightControlDim.x, lightControlDim.y, lightControlDim.width, lightControlDim.height);
    console.log(lightControlDim.x);
    makeLight();

    function makeLight() {
      controlsMenu.addChild(lightControlOff);
      controlsMenu.addChild(lightControlDim);
      stage.update();
    }

var lightControlDark = new createjs.Shape();

    lightControlDark.graphics.beginFill("Yellow").drawRect(150, 0, (w/6), (menuHeight / 2));
    lightControlDark.x = tankWidth / 2;
    lightControlDark.y = menuHeight / 4;
    lightControlDark.width = tankWidth / 6;
    lightControlDark.height = menuHeight / 4;
    lightControlDark.setBounds(lightControlDark.x, lightControlDark.y, lightControlDark.height, lightControlDark.width);
    console.log(lightControlDark.x);
    makeLight();

    function makeLight() {
      controlsMenu.addChild(lightControlOff);
      controlsMenu.addChild(lightControlDim);
      controlsMenu.addChild(lightControlDark);
      stage.update();
    }

var light = new createjs.Bitmap("assets/cone.png");
    light.alpha = .5;
    light.x = 190;
    light.y = 0;
    light.width = (h/5);
    light.height = (h/5);
    light.setBounds(light.x, light.y, light.width, light.height);
    //setbounds x, y, w, h
    lightBounds = light.getBounds();
    //lightHeight = light.height;
    console.log("light bounds is " + lightBounds);
    tankContainer.addChild(light);

light.image.onload = function() {
  stage.update();
  console.log("the image loaded");
};

//when the mouse is clicked, make light turn off
lightControlOff.addEventListener("mousedown", function (evt) {
  console.log("Hi");
if (evt.nativeEvent.button === 0) {
  console.log("hi again");
    light.alpha = 0;
}
 stage.update();
});


//when the mouse is clicked, make light dim
lightControlDim.addEventListener("mousedown", function (evt) {
  console.log("Hi");
if (evt.nativeEvent.button === 0) {
  console.log("hi again");
    light.alpha = .5;
}
 stage.update();
});

//when the mouse is clicked, make light bright
lightControlDark.addEventListener("mousedown", function (evt) {
  console.log("Hi");
if (evt.nativeEvent.button === 0) {
  console.log("hi again");
    light.alpha = 1;
}
 stage.update();
});

}
