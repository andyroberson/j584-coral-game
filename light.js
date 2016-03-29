var light = new createjs.Bitmap("assets/cone.jpg");
    light.crossOrigin="Anonymous";
    light.x = 270;
    light.y = 190;
    light.width = (h/5);
    light.height = (h/5);
    light.setBounds(light.x, light.y, light.width, light.height);
    //setbounds x, y, w, h
    coralBounds = light.getBounds();
    //coralHeight = coral.height;
    console.log("light bounds is " + lightBounds);

light.image.onload = function() {
  stage.update();
};
