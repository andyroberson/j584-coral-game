function createCarbon() {
      //container for all carbon graphics
      var carbonContainer = new createjs.Container();
          carbonContainer.x = (rightControlMenu.x + 20); //10 padding
          carbonContainer.y = tempContainer.height + 60; //adding height and padding*2 of tempContainer so displays below
          carbonContainer.width = tempContainer.width; //-20 for 10 padding on left and right
          carbonContainer.height = 102;
          carbonHeight = carbonContainer.height;
          carbonWidth = carbonContainer.width;
          carbonContainer.setBounds(carbonContainer.x, carbonContainer.y, carbonContainer.width, carbonContainer.height);

      var carbonBackground = new createjs.Bitmap("assets/carbon-bg.png");
          carbonBackground.x = 0;
          carbonBackground.y = 0;

      //container for screen that shows carbon (2nd screencontainer because temp had one too)
      screenContainer2 = new createjs.Container();
          screenContainer2.x = (carbonWidth * (1/7));
          screenContainer2.y = (carbonHeight * (1/4));
          screenContainer2.width = (carbonWidth * (1/2));
          screenContainer2.height = (carbonHeight * (2/4));

          screenHeight2 = screenContainer2.height;
          screenWidth2 = screenContainer2.width;
          screenContainer2.setBounds(screenContainer2.x, screenContainer2.y, screenContainer2.width, screenContainer2.height);

      //background for temperature window
      // var carbonScreen = new createjs.Shape();
      //     carbonScreen.graphics.beginFill("#EEE").drawRect(screenContainer2.x, screenContainer2.y, screenWidth2, screenHeight2);

      carbon = .04;

      var upArrow2 = new createjs.Shape();
          upArrow2.graphics.beginFill("#fff").drawPolyStar((tempWidth*(5/11)), (tempHeight*(5/13)), (tempWidth*(1/6)), 3, 0, -90);
          upArrow2.cursor = "pointer";

      //increasing the temperature
      upArrow2.addEventListener("click", function (evt) {
          carbon = carbon + .01;
          carbon = Math.round(carbon * 100) / 100;
          carbonDisplay.text = carbon;

          activeControl = "carbon";
          //resetFood();
          resetLight();
          resetTemp();
          console.log(activeControl);


          detectCarbon();
          stage.update();
      });

      var downArrow2 = new createjs.Shape();
      downArrow2.graphics.beginFill("#fff").drawPolyStar((tempWidth*(5/11)), (tempHeight*(14/17)), (tempWidth*(1/6)), 3, 0, 90);
                downArrow2.cursor = "pointer";

      downArrow2.addEventListener("click", function (evt) {
        carbon = carbon - .01;
        carbon = Math.round(carbon * 100) / 100;
        carbonDisplay.text = carbon;

        activeControl = "carbon";
        //resetFood();
        resetLight();
        resetTemp();
        console.log(activeControl);


        detectCarbon();
        stage.update();
      });

      function detectCarbon() {
        //coral high coral happy
            if (carbon < .03) {
              fullBleach();
            }

            if (carbon == .03) {
              lowBleach();
            }

            if (carbon == .04) {
              coralReset();
            }

            //coral high coral happy
            if ((carbon > .04) && (carbon < .06)) {
              lowBleach();
            }

            if (carbon == .06) {
              fullBleach();
            }

            if (carbon > .06) {
              fullBleach();
            }
      }

      //creating and styling carbondisplay text
      carbonDisplay = new createjs.Text();
          carbonDisplay.text = (carbon);
          carbonDisplay.color = "#fff";
          carbonDisplay.font = "15px arial";
          carbonDisplay.x = (screenWidth2 / 7);
          carbonDisplay.y = (screenHeight2 * (5/9));

      //creating and styling F in farenheit
      // var carbonUnit = new createjs.Text();
      //     carbonUnit.text = "PH"
      //     carbonUnit.color = "#fff";
      //     carbonUnit.font = "bold 10px arial";
      //     carbonUnit.x = (screenWidth2 * (10/13));
      //     carbonUnit.y = (screenHeight2 * (5/9));

      makeCarbon();

      function makeCarbon() {
          rightControlMenu.addChild(carbonContainer);
          carbonContainer.addChild(carbonBackground);
          carbonContainer.addChild(screenContainer2);
          carbonContainer.addChild(upArrow2);
          carbonContainer.addChild(downArrow2);
          // screenContainer2.addChild(carbonScreen);
          screenContainer2.addChild(carbonDisplay);
          // screenContainer2.addChild(carbonUnit);
          stage.update();
      }

} //end createCarbon
