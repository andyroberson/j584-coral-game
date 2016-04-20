function createBottomControls() {
  //creating controls menu container
controlsMenu = new createjs.Container();
     //needs to align with tankContainer
     controlsMenu.x = tankContainer.x - 61;

     //needs to start where tankContainer ends
     controlsMenu.y = tankContainer.height;

     controlsMenu.width = (w*(582/700));
     controlsMenu.height = (h*(228/500));
     menuHeight = controlsMenu.height;
     controlsMenu.setBounds(controlsMenu.x, controlsMenu.y, controlsMenu.width, controlsMenu.height);
     console.log(controlsMenu.getBounds());

 //adding background color to menu container
 controlsMenuBackground= new createjs.Bitmap("assets/tank-bottom.png");
     controlsMenuBackground.x = 0;
     controlsMenuBackground.y = 0;
     controlsMenuBackground.width = controlsMenu.width;
     controlsMenuBackground.height = controlsMenu.height;
     controlsMenuBackground.scaleX = 1.15;

     controlsMenuBackground.setBounds(controlsMenuBackground.x,  controlsMenuBackground.y,  controlsMenuBackground.width,  controlsMenuBackground.height);

buttonContainer = new createjs.Container();
      buttonContainer.x = (controlsMenu.width * 2/5);
      buttonContainer.y = 1;
      buttonContainer.width = (controlsMenu.width / 5);
      buttonContainer.height = 42;
      buttonContainer.setBounds(buttonContainer.x, buttonContainer.y, buttonContainer.width, buttonContainer.height);


startButton = new createjs.Shape();
     startButton.x = 0;
     startButton.y = 0;
     startButton.width = buttonContainer.width;
     startButton.height = buttonContainer.height;
     startButton.graphics.beginFill("Teal").beginStroke("White").drawRect(startButton.x, startButton.y, startButton.width, startButton.height);
     startButton.cursor = "pointer";

buttonText = new createjs.Text();
      buttonText.text = "START";
      buttonText.color = "#fff";
      buttonText.font = "25px arial";
      buttonText.x = 27;
      buttonText.y = 7;

startButton.on("click", function (evt) {
      console.log(activeControl);
      if (activeControl == null) {
            //alert("change a control before you press start");
            // Get the modal
            var modal = document.getElementById('myModal');

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            var button = document.getElementsByClassName("close-button")[0];

            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }

            button.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
      }
    }

      else {
      startClicked = true;
      findActiveControl();
    }
});

     makeBottomControls();

     function makeBottomControls() {
         stage.addChild(controlsMenu);
         controlsMenu.addChild(controlsMenuBackground);
         controlsMenu.addChild(buttonContainer);
         buttonContainer.addChild(startButton);
         buttonContainer.addChild(buttonText);
         stage.update();
        //  controlsMenu.addChild(actionLog);
        //  actionLog.addChild(actionLogBG);
         //actionLog.addChild(logTitle);
     }

}
