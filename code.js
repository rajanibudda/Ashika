var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00189737-5b1e-495f-b8ef-a722dc27bed2","bd4d4dd0-16dd-4247-a476-6baeb29653cc","8e2a4cb5-2bd2-4d0f-8ed5-e7ef6eca0c5a","19779a5a-a45a-4730-b4ea-626f50e7acfd","34f25015-e564-48bc-b03c-c19bb79b3cd0"],"propsByKey":{"00189737-5b1e-495f-b8ef-a722dc27bed2":{"name":"lord shen","sourceUrl":null,"frameSize":{"x":607,"y":411},"frameCount":1,"looping":true,"frameDelay":12,"version":"6OBW1U.Oy3ts_0lxemRgRL4w4yoSW_Ic","loadedFromSource":true,"saved":true,"sourceSize":{"x":607,"y":411},"rootRelativePath":"assets/00189737-5b1e-495f-b8ef-a722dc27bed2.png"},"bd4d4dd0-16dd-4247-a476-6baeb29653cc":{"name":"panda","sourceUrl":null,"frameSize":{"x":195,"y":259},"frameCount":1,"looping":true,"frameDelay":12,"version":"zRyujfhwvwNUk3VZOXNxfoo15PYiovoP","loadedFromSource":true,"saved":true,"sourceSize":{"x":195,"y":259},"rootRelativePath":"assets/bd4d4dd0-16dd-4247-a476-6baeb29653cc.png"},"8e2a4cb5-2bd2-4d0f-8ed5-e7ef6eca0c5a":{"name":"p1","sourceUrl":null,"frameSize":{"x":250,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"vad7mURuwV8esn9GRDXqWztWdsvn.5V0","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":350},"rootRelativePath":"assets/8e2a4cb5-2bd2-4d0f-8ed5-e7ef6eca0c5a.png"},"19779a5a-a45a-4730-b4ea-626f50e7acfd":{"name":"kai","sourceUrl":null,"frameSize":{"x":483,"y":517},"frameCount":1,"looping":true,"frameDelay":12,"version":"DXmSElHgtqwfdpC495EtLFaiQoZ0OHNI","loadedFromSource":true,"saved":true,"sourceSize":{"x":483,"y":517},"rootRelativePath":"assets/19779a5a-a45a-4730-b4ea-626f50e7acfd.png"},"34f25015-e564-48bc-b03c-c19bb79b3cd0":{"name":"tai","sourceUrl":null,"frameSize":{"x":457,"y":546},"frameCount":1,"looping":true,"frameDelay":12,"version":"V4GdaU_nYy_AxRLttHMrgN7hp3xk8jlb","loadedFromSource":true,"saved":true,"sourceSize":{"x":457,"y":546},"rootRelativePath":"assets/34f25015-e564-48bc-b03c-c19bb79b3cd0.png"}}};
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

var life = 0;

var p1 = createSprite(25,176,20,20);
p1.setAnimation("p1");
p1.scale=0.2;

var panda = createSprite(365,180,20,20)
panda.setAnimation("panda"); 
panda.scale = "0.2";

var enemy = createSprite(85,90,20,20);
enemy.setAnimation("tai");
enemy.scale="0.1";

var enemy2 = createSprite(176,240,20,20);
enemy2.setAnimation("lord shen");
enemy2.scale = "0.07";

var enemy3 = createSprite(270,100,20,20);
enemy3.setAnimation("kai");
enemy3.scale = "0.15";

var boundary1 = createSprite(90,50,700,5);
var boundary2 = createSprite(200,300,500,5);

  enemy.velocityY = 7;
  enemy2.velocityY = -7;
  enemy3.velocityY = 7;




function draw() {
 background("white")   
 
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);   
    


enemy.bounceOff(boundary1);
enemy.bounceOff(boundary2);

enemy2.bounceOff(boundary1);
enemy2.bounceOff(boundary2);

enemy3.bounceOff(boundary1);
enemy3.bounceOff(boundary2);

 if(keyDown("left")){
  p1.x = p1.x - 4;
}
  if(keyDown("right")){
  p1.x = p1.x + 4;
} 

if(p1.isTouching(enemy)||
p1.isTouching(enemy2)||
p1.isTouching(enemy3))

{
   p1.x = 20;
  p1.y = 190;
  life = life + 1;
} 





drawSprites();
}


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
