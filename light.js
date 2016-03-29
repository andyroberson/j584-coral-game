var light = new createjs.Bitmap("assets/cone.png");
    light.crossOrigin="Anonymous";
    light.x = 190;
    light.y = 0;
    light.width = (h/5);
    light.height = (h/5);
    light.setBounds(light.x, light.y, light.width, light.height);
    //setbounds x, y, w, h
    lightBounds = light.getBounds();
    //lightHeight = light.height;
    console.log("light bounds is " + lightBounds);

light.image.onload = function() {
  stage.update();
};

// function brightenLight() {
//     console.log("We're at the brighten light function");
//     //when newFood is an image, it wont let you create multiple ones; need to store in array and rename or something
//     var brightLight = new createjs.Bitmap("assets/empty-cone.png"); //add to array; when deleted, POP it
//     //foodArr.push(newFood);
//     brightLight.x = 290;
//     brightLight.y = 0;
//     //newFood = new createjs.Shape();
//     //newFood.graphics.beginFill("blue").drawCircle(0, 0, 20);
//     stage.update();
//     tankContainer.addChild(brightLight);
//     stage.update();
// }
//
//
// // when the mouse is clicked, make a new light instance and make this draggable
// lightControls.addEventListener("mousedown", function (evt) {
//   console.log("Hi");
// if (evt.nativeEvent.button >= 0) {
//     brightenLight();
// }
// stage.update();
// });
