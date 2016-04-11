// coral needs to change based on amount of food it's received, temperature of water, CO2, and light
//for FOOD: needs to count amount of food received --- make happy when received enough food ; POP up?
//for LIGHT: needs to be happy based on amount of light received. coral also receives FOOD from light so be careful of overfeeding
//for CO2: ??
//for temperature -- happy in warmer...
//coral animation?

function createCoral() {
  //creating coral
      //TODO - center bitmap later!
      console.log("making coral");

       coral = new createjs.Bitmap("assets/coral-test2.png");
          coral.crossOrigin="Anonymous";
          coral.x = 170;
          coral.y = 190;
          coral.width = (h/5);
          coral.height = (h/5);
          coral.setBounds(coral.x, coral.y, coral.width, coral.height);
          //setbounds x, y, w, h
          coralBounds = coral.getBounds();
          //coralHeight = coral.height;
          console.log("coral bounds is " + coralBounds);

      coral.image.onload = function() {
        stage.update();
      };

      makeCoral();

      //NEED 3 CORAL - randomly generate when coral is happiest?
      function makeCoral() {
            stage.addChild(coral);
            stage.update();
      }
}
