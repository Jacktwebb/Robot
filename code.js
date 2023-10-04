var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var HeadOutline = "white";
var CircleOutline = "red";
var C = 150;
var D = 255;
background(rgb(randomNumber(0, D), randomNumber(0, D), randomNumber(0, D)));
fill(rgb(randomNumber(0, D), randomNumber(0, D), randomNumber(0, D)));
ellipse(200, 200, 260, 310);
stroke(CircleOutline);
fill(rgb(randomNumber(0, D), randomNumber(0, D), randomNumber(0, D)));
stroke(HeadOutline);
rect(100, 100, 200, 200);
fill(rgb(randomNumber(0, D), randomNumber(0, D), randomNumber(0, D)));
regularPolygon(250, C, 5, randomNumber(15, 45));
regularPolygon(C, C, 5, randomNumber(15, 45));
regularPolygon(200, 220, 3, randomNumber(10, 40));
rect(120, 260, 160, 20);
line(C, 280, C, 260);
line(200, 280, 200, 260);
line(250, 280, 250, 260);
fill(rgb(randomNumber(0, D), randomNumber(0, D), randomNumber(0, D)));
ellipse(C, C, 5, 5);
ellipse(250, C, 5, 5);
rect(C, 50, 10, 50);
rect(250, 50, 10, 50);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
