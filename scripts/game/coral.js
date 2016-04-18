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

       coral = new createjs.Bitmap("assets/coral-1.png");
          coral.x = (tankWidth*(5/12));
          coral.y = (tankHeight*(8/11));
          coral.width = (tankWidth/5);
          coral.height = (tankHeight/5);
          coral.setBounds(coral.x, coral.y, coral.width, coral.height);
          // coral.addClass("Coral1");
          // coral.class
          coral.id = "coral1";
          console.log("coral id = " + coral.id);
          //coral.id
          //coral.name
          //setbounds x, y, w, h

      coral2 = new createjs.Bitmap("assets/coral-1.png");
         coral2.x = (tankWidth*(11/17));
         coral2.y = (tankHeight*(8/11));
         coral2.width = (tankWidth/5);
         coral2.height = (tankHeight/5);
         coral2.setBounds(coral2.x, coral2.y, coral2.width, coral2.height);

      coral3 = new createjs.Bitmap("assets/coral-2.png");
         coral3.x = (tankWidth*(7/8));
         coral3.y = (tankHeight*(8/11)) ;
         coral3.width = (tankWidth/5);
         coral3.height = (tankHeight/5);
         coral3.setBounds(coral3.x, coral3.y, coral3.width, coral3.height);

      makeCoral();

      //NEED 3 CORAL - randomly generate when coral is happiest?
      function makeCoral() {
            stage.addChild(coral);
            stage.addChild(coral2);
            stage.addChild(coral3);
            stage.update();
      }
}
