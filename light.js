

function createLight() {
//setting up light controls
var lightControls = new createjs.Shape();

    lightControls.graphics.beginFill("Purple").drawRect(0, 0, (w/6), (menuHeight / 2));
    lightControls.x = w / 2;
    lightControls.y = menuHeight / 4;
    lightControls.width = w / 6;
    lightControls.height = menuHeight / 4;
    lightControls.setBounds(lightControls.x, lightControls.y, lightControls.height, lightControls.width);
    console.log(lightControls.x);
    makeLight();

    function makeLight() {
      controlsMenu.addChild(lightControls);
      stage.update();
    }

var light = new createjs.Bitmap("assets/cone.png");
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

// NEEDS TO GO IN GAME.JS
//when the mouse is clicked, make a new light image
lightControls.addEventListener("mousedown", function (evt) {
  console.log("Hi");
if (evt.nativeEvent.button === 0) {
  console.log("hi again");
    light.alpha = 0;
}
 stage.update();
});

//stage.update();

function brightenLight() {
    console.log("We're at the brighten light function");

     var brightLight = new createjs.Bitmap("assets/empty-cone.png"); //add to array; when deleted, POP it

    brightLight.x = 290;
    brightLight.y = 0;

    stage.update();
    tankContainer.addChild(brightLight);
    stage.update();
}
}
