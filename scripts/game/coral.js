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

      //  coral = new createjs.Bitmap("assets/coral-1.png");
      //     coral.x = (tankWidth*(5/12));
      //     coral.y = (tankHeight*(8/11));
      //     coral.width = (tankWidth/5);
      //     coral.height = (tankHeight/5);
      //     coral.setBounds(coral.x, coral.y, coral.width, coral.height);
      //     // coral.addClass("Coral1");
      //     // coral.class
      //     coral.id = "coral1";
      //     console.log("coral id = " + coral.id);
      //     //coral.id
      //     //coral.name
      //     //setbounds x, y, w, h

  // Defining coral1 spritesheet
  var coralSprite1 = new createjs.SpriteSheet({
      framerate: 13,
      numFrames: 70,
      images: ["assets/coral1-final-spritesheet-sm.png"],
      frames: [
        //x, y, width, height, imageIndex, regX, regY
        [0, 0, 62, 36], //1
        [64, 0, 62, 36],
        [127, 0, 62, 36],
        [191, 0, 62, 36],
        [254, 0, 62, 36],
        [317, 0, 62, 36],
        [0, 38, 62, 36], //7
        [64, 38, 62, 36],
        [127, 38, 62, 36],
        [191, 38, 62, 36],
        [254, 38, 62, 36],
        [317, 38, 62, 36],
        [0, 76, 62, 36], //13 - for coral to fade when 76 - 81
        [64, 76, 62, 36],
        [127, 76, 62, 36],
        [191, 76, 62, 36], //16
        [254, 76, 62, 36], //17
        [317, 76, 62, 36], //18
        [0, 114, 62, 36], //19
        [64, 114, 62, 36], //20
        [127, 114, 62, 36],
        [191, 114, 62, 36],
        [254, 114, 62, 36],
        [317, 114, 62, 36], //end of coral phasing
        [0, 152, 62, 36], //25 blinking
        [64, 152, 62, 36],
        [127, 152, 62, 36],
        [191, 152, 62, 36],
        [254, 152, 62, 36],
        [317, 152, 62, 36],
        [0, 190, 62, 36], //31
        [64, 190, 62, 36],
        [127, 190, 62, 36],
        [191, 190, 62, 36],
        [254, 190, 62, 36],
        [317, 190, 62, 36],
        [0, 229, 62, 36], //37
        [64, 229, 62, 36],
        [127, 229, 62, 36],
        [191, 229, 62, 36],
        [254, 229, 62, 36],
        [317, 229, 62, 36],
        [0, 266, 62, 36], //43
        [64, 266, 62, 36], //44
        [127, 266, 62, 36],
        [191, 266, 62, 36],
        [254, 266, 62, 36],
        [317, 266, 62, 36],
        [0, 306, 62, 36], //49
        [64, 306, 62, 36],
        [127, 306, 62, 36],
        [191, 306, 62, 36],
        [254, 306, 62, 36],
        [317, 306, 62, 36], //54
        [0, 344, 62, 36], //55
        [63, 344, 62, 36],
        [127, 344, 62, 36],
        [191, 344, 62, 36],
        [254, 344, 62, 36],
        [317, 344, 62, 36],
        [0, 382, 62, 36], //61
        [63, 382, 62, 36],
        [127, 382, 62, 36],
        [191, 382, 62, 36],
        [254, 382, 62, 36],
        [317, 382, 62, 36],
        [0, 420, 62, 36], //67
        [63, 420, 62, 36],
        [127, 420, 62, 36],
        [190, 420, 62, 36]
      ],
      // define two animations, run (loops, 1.5x speed) and jump (returns to run):
      animations: {
        //start. end, next, speed
        // not bleached stare (Default)
        "stare": {
          frames: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           next: "blink",
           speed: .2
        },
        //half-bleached stare
        "stare-13": {
          frames: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
          next: "blink-13",
          speed: .2
        },
        //3-4ths bleached stare
        "stare-19": {
          frames: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
          next: "blink-19",
          speed: .3
        },
        //full bleached
        "stare-bleach": {
          frames: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
          next: "blink-bleach",
          speed: .2
        },
        //not bleached blink
        "blink": {
          frames: [24, 25, 24],
          next: "stare",
          speed: .7
        },
        //half-bleached blink
        "blink-13": {
          frames: [48, 49, 48],
          next: "stare-13",
          speed: .7
        },
        "blink-19": {
          frames: [58, 59, 58],
          next: "stare-19",
          speed: .7
        },
        //full bleached blink
        "blink-bleach": {
          frames: [68, 69, 68],
          next: "stare-bleach",
          speed: .7
        },
        //coral phasing until half bleached
        "bleach-13": [0, 12, "stare-13", .9],
        //function that shows coral phasing until 3-4s bleached
        "bleach-19": [0, 18, "stare-19", .9],
        //coral phasing until completely bleached
        "bleach": [0, 23, "stare-bleach", .9]
      }
    });

      coral2 = new createjs.Sprite(coralSprite1, "stare");
      // coral2 = new createjs.Bitmap("assets/coral-1.png");
         coral2.x = (tankWidth*(11/17));
         coral2.y = (tankHeight*(8/11));
         coral2.width = (tankWidth/5);
         coral2.height = (tankHeight/5);
         coral2.setBounds(coral2.x, coral2.y, coral2.width, coral2.height);


      makeCoral();

      //NEED 3 CORAL - randomly generate when coral is happiest?
      function makeCoral() {
            //stage.addChild(coral);
            stage.addChild(coral2);
            createjs.Ticker.timingMode = createjs.Ticker.RAF;
            createjs.Ticker.addEventListener("tick", stage);
            stage.update();
      }
}
