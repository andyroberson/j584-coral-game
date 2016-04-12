function createCarbon() {
      //container for all carbon graphics
      var carbonContainer = new createjs.Container();
          carbonContainer.x = (rightControlMenu.x + 20); //10 padding
          carbonContainer.y = (leftMenuHeight/3 + (leftMenuHeight/4)); //adding height and padding*2 of tempContainer so displays below
          carbonContainer.width = (leftControlMenu.width - 20); //-20 for 10 padding on left and right
          carbonContainer.height = leftMenuHeight/4;
          carbonHeight = carbonContainer.height;
          carbonWidth = carbonContainer.width;
          carbonContainer.setBounds(carbonContainer.x, carbonContainer.y, carbonContainer.width, carbonContainer.height);

      var carbonBackground = new createjs.Shape();
          carbonBackground.graphics.beginFill("Teal").drawRect(0, 0, carbonWidth, carbonHeight);

      //container for screen that shows carbon (2nd screencontainer because temp had one too)
      var screenContainer2 = new createjs.Container();
          screenContainer2.x = (carbonWidth * (1/7));
          screenContainer2.y = (carbonHeight * (1/4));
          screenContainer2.width = (carbonWidth * (1/2));
          screenContainer2.height = (carbonHeight * (2/4));

          screenHeight2 = screenContainer2.height;
          screenWidth2 = screenContainer2.width;
          screenContainer2.setBounds(screenContainer2.x, screenContainer2.y, screenContainer2.width, screenContainer2.height);

      //background for temperature window
      var carbonScreen = new createjs.Shape();
          carbonBackground.graphics.beginFill("#EEE").drawRect(screenContainer2.x, screenContainer2.y, screenWidth2, screenHeight2);

      var carbon = 7;

      var upArrow2 = new createjs.Shape();
      upArrow2.graphics.beginFill("#eee").drawPolyStar((tempWidth*(4/5)), (tempHeight*(1/3)), (tempWidth*(1/10)), 3, 0, -90);

      //increasing the temperature
      upArrow2.addEventListener("click", function (evt) {
          carbon = carbon + 1;
          carbon = Math.round(carbon * 100) / 100;
          carbonDisplay.text = carbon;

          //TODO add limit to adding / subtracting (if under 20 etc)?
          //TODO CHANGE GRAPHICS OF CORAL DEPENDING ON CARBON AMOUNT
          stage.update();
      });

      var downArrow2 = new createjs.Shape();
      downArrow2.graphics.beginFill("#eee").drawPolyStar((tempWidth*(4/5)), (tempHeight*(2/3)), (tempWidth*(1/10)), 3, 0, 90);

      downArrow2.addEventListener("click", function (evt) {
        carbon = carbon - 1;
        carbon = Math.round(carbon * 100) / 100;
        carbonDisplay.text = carbon;

        //TODO CHANGE GRAPHICS OF CORAL DEPENDING ON CARBON AMOUNT
        stage.update();
      });

      //creating and styling carbondisplay text
      var carbonDisplay = new createjs.Text();
          carbonDisplay.text = (carbon);
          carbonDisplay.color = "#666";
          carbonDisplay.font = "15px arial";
          carbonDisplay.x = (screenWidth2 / 5);
          carbonDisplay.y = (screenHeight2 / 4);

      //creating and styling F in farenheit
      var carbonUnit = new createjs.Text();
          carbonUnit.text = "PH"
          carbonUnit.color = "#666";
          carbonUnit.font = "bold 10px arial";
          carbonUnit.x = (screenWidth2 * (8/13));
          carbonUnit.y = (screenHeight2 / 5);

      makeCarbon();

      function makeCarbon() {
          rightControlMenu.addChild(carbonContainer);
          carbonContainer.addChild(carbonBackground);
          carbonContainer.addChild(screenContainer2);
          carbonContainer.addChild(upArrow2);
          carbonContainer.addChild(downArrow2);
          screenContainer2.addChild(carbonScreen);
          screenContainer2.addChild(carbonDisplay);
          screenContainer2.addChild(carbonUnit);
          stage.update();
      }

} //end createCarbon
