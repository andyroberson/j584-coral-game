function createLight() {

  switchContainer = new createjs.Container();
        switchContainer.x = (leftControlMenu.width/4);
        switchContainer.y = 5;
        switchContainer.width = (leftControlMenu.width * (70/113));
        switchContainer.height = 112; //lightSwitch height plus y value of 10 * 2 to give padding on both sides

  switchBackground = new createjs.Bitmap("assets/lights-bg.png");
        switchBackground.x = 0;
        switchBackground.y = 0
        switchBackground.width = (switchContainer.width);
        switchBackground.height = 101;

  lightSwitch = new Slider(0, 0, 60, 20).set({x: ((switchContainer.width/2)+5), y: 27, value: 50});
		    lightSwitch.on("change", handleSliderChange, this);

        //rotate slider to be like a light switch
        lightSwitch.rotation=90;

		updateEffect(lightSwitch.value);

  //handling light switch changes
	function handleSliderChange(evt) {
		updateEffect(evt.target.value);

        //if slider light switch is below 25, keep it off
    		if (lightSwitch.value < 25) {
          //snap to low
          lightSwitch.value = 0;
    			console.log("light off");
          light.alpha = 0;

          lowBleach();

          stage.update();
    		}


        //light switch in the middle, make it middle light
    		else if (lightSwitch.value >= 25 && lightSwitch.value < 75) {
          //snap to medium
          lightSwitch.value = 50;
    			console.log("medium");
          light.alpha = .5;

          coralReset();

          stage.update();
    		}

        //light switch high, show bright light
        else if (lightSwitch.value >= 75 && lightSwitch.value < 101) {
          //snap to high
          lightSwitch.value = 100;
          console.log("high");
          light.alpha = 1;

          lowBleach();

          stage.update();
        }
	  }

    // function resetLight()

    makeLight();

    function makeLight() {
      leftControlMenu.addChild(switchContainer);
      switchContainer.addChild(switchBackground);
      switchContainer.addChild(lightSwitch);
      stage.update();
    }

    //needed for lightSwitch
    function updateEffect(value) {
      stage.update();
    }


    //light image
    var light = new createjs.Bitmap("assets/lights.png");
        light.alpha = .5;
        light.x = (tankWidth * 1/12);
        light.y = (tankHeight * 1/5);
        light.scaleX = 1.2;

        //setbounds x, y, w, h
        lightBounds = light.getBounds();
        //lightHeight = light.height;
        console.log("light bounds is " + lightBounds);
        tankContainer.addChild(light);

    //load image
    light.image.onload = function() {
      stage.update();
    }

}
