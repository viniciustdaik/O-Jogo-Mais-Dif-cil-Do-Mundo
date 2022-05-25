var player, player2, next;
var coin, coin2, coin3, coin4;
var enemy1, enemy2, enemy3, enemy4, enemy5;
var coin_redimg, coinimg, enemyimg, friendanm, leverimg, friend_face, hitbox, friend2_face, friend2anm;

var edges;

var mortes = 0;
var pontos = 0;
var level = 1;
var players = 0;
var sound = true;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15;

function preload(){
  coin_redimg = loadImage("coin_red.png");
  coinimg = loadImage("coin.png");
  enemyimg = loadImage("./characters/enemy1.png");
  leverimg = loadImage("lever.png");
  friendanm = loadAnimation("./characters/friendOG.png", "./characters/friend-closingeyes1.png", 
  "./characters/friend-closingeyes2.png", "./characters/friend-closedeyes.png", "./characters/friendOG.png", 
  "./characters/friendOG.png", "./characters/friendOG.png", "./characters/friendOG.png");
  friend_face = loadImage("./characters/friendOG.png");
  hitbox = loadImage("hitbox.png");
  friend2anm = loadAnimation("./characters/friend2OG.png", "./characters/friend2-closingeyes1.png", 
  "./characters/friend2-closingeyes2.png", "./characters/friend2-closedeyes.png", "./characters/friend2OG.png", 
  "./characters/friend2OG.png", "./characters/friend2OG.png", "./characters/friend2OG.png", 
  "./characters/friend2OG.png", "./characters/friend2OG.png");
  friend2_face = loadImage("./characters/friend2OG.png");
}

function setup() {
  createCanvas(400, 400);//400, 400

  var friendimg = createImg('./characters/friendOG.png');
  friendimg.position(width - width - width, height - height - height);
  friendimg.size(15, 15);

  wall1 = createSprite(40, 160, 5, 150);
  wall1.shapeColor = "lightgreen";

  wall2 = createSprite(85, 87, 90, 5);
  wall2.shapeColor = "lightgreen";

  wall3 = createSprite(197, 177, 60, 5);
  wall3.shapeColor = "lightgreen";

  wall4 = createSprite(200, 26, 140, 5);
  wall4.shapeColor = "lightgreen";

  wall5 = createSprite(130, 55, 5, 60);
  wall5.shapeColor = "lightgreen";

  wall6 = createSprite(270, 55, 5, 60);
  wall6.shapeColor = "lightgreen";

  wall7 = createSprite(315, 87, 90, 5);
  wall7.shapeColor = "lightgreen";

  wall8 = createSprite(99, 234, 115, 5);
  wall8.shapeColor = "lightgreen";

  wall9 = createSprite(225, 174, 5, 125);
  wall9.shapeColor = "lightgreen";

  wall10 = createSprite(360, 160, 5, 150);
  wall10.shapeColor = "lightgreen";

  wall11 = createSprite(145, 317, 5, 167);
  wall11.shapeColor = "lightgreen";

  wall12 = createSprite(390, 233, 60, 5);
  wall12.shapeColor = "lime";

  wall13 = createSprite(190, 234, 65, 5);
  wall13.shapeColor = "lightgreen";

  wall14 = createSprite(225, 204, 5, 65);
  wall14.shapeColor = "lightgreen";

  wall15 = createSprite(10, 233, 60, 5);
  wall15.shapeColor = "lime";
  
  next = createSprite(200, 300, 15, 15);
  //next.addImage(hitbox);
  next.shapeColor = 'yellow';
  next.visible = false;

  player = createSprite(190, 205, 13, 13);
  player.addAnimation("anim", friendanm);
  player.shapeColor = ('lightblue');
  //player.scale = 1.2;
  //player.addImage(friend_face);

  player2 = createSprite(640, 205, 13, 13);
  player2.addAnimation(friendanm);
  player2.addAnimation("anim", friend2anm);
  player2.shapeColor = 'blue';
  player2.visible = false;
  //player2.scale = 1.2;
  //player2.addImage(friend2_face);
  
  enemy1 = createSprite(200, 100, 13, 13);
  enemy1.shapeColor = "red";
  enemy1.velocityY = 10;
  enemy1.addAnimation("enemy", enemyimg);
  //enemy1.scale = 1.2;

  enemy2 = createSprite(200, 150, 13, 13);
  enemy2.shapeColor = "red";
  enemy2.velocityX = -12;
  enemy2.addAnimation("enemy", enemyimg);

  enemy3 = createSprite(300, 150, 13, 13);
  enemy3.shapeColor = "red";
  enemy3.velocityX = -12;
  enemy3.addAnimation("enemy", enemyimg);

  enemy4 = createSprite(300, 200, 13, 13);
  enemy4.shapeColor = "red";
  enemy4.velocityY = 15;
  enemy4.addAnimation("enemy", enemyimg);

  enemy5 = createSprite(300, 300, 13, 13);
  enemy5.shapeColor = "red";
  enemy5.velocityX = 12;
  enemy5.addAnimation("enemy", enemyimg);
  
  coin = createSprite(200, 60, 20, 20);
  coin.shapeColor = "gold";
  coin.addAnimation("coin", coinimg);
  coin.scale = 0.4;
  coin.depth = player.depth;
  player.depth = player.depth+1;
  
  coin3 = createSprite(500, 500, 20, 20);
  coin3.shapeColor = "gold";
  coin3.addAnimation("coin", coinimg);
  coin3.scale = 0.4;
  coin3.depth = player.depth;
  player.depth = player.depth+1;
  coin3.visible = false;
  
  coin2 = createSprite(100, 350, 20, 20);
  coin2.shapeColor = "darkred";
  coin2.addAnimation("coin_red", coin_redimg);
  coin2.scale = 0.4;
  coin2.depth = player.depth;
  player.depth = player.depth+1;
  
  coin4 = createSprite(500, 500, 20, 20);
  coin4.shapeColor = "darkred";
  coin4.addAnimation("coin_red", coin_redimg);
  coin4.scale = 0.4;
  coin4.depth = player.depth;
  player.depth = player.depth+1;
  coin4.visible = false;
  
  /*coin = createSprite(200, 60, 20, 20);
  coin.addImage("coin", coinimg);
  coin.scale = 0.4;
  coin.depth = player.depth;
  player.depth = player.depth+1;
  coin.shapeColor = 'gold';

  coin_red = createSprite(100, 300, 15, 15);
  coin_red.addImage("redcoin", coin_redimg);
  coin_red.scale = 0.4;
  coin_red.depth = player.depth;
  player.depth = player.depth+1;*/

  lever = createSprite(100, 100, 15, 15);
  lever.addImage("lever", leverimg);
  lever.shapeColor = 'brown';
  lever.visible = false;
  
  edges = createEdgeSprites();
}

function draw() {
  background("violet");
  if(player.isTouching(lever) && level == 2 && keyDown("space")&&players==1||
  player.isTouching(lever)&&level==2&&keyDown("e")&&players==1){
  //||
  //player2.isTouching(lever) && level == 2 && keyDown("space")){
    level = -1;
    pontos = pontos +15;
  }
  if(player.isTouching(lever)&&player2.isTouching(lever)&&keyDown("space")&&level==2&&players==2||
  player.isTouching(lever)&&player2.isTouching(lever)&&keyDown("e")&&level==2&&players==2){
    level = -1;
    pontos = pontos +15;
  }
  if(player.isTouching(lever)&&level==2&&players==2||
  player2.isTouching(lever)&&level==2&&players==2){
    textSize(20);
    fill('cyan');
    text("Espere Pelo Outro Jogador.", 10, 55);
  }
  if(level == 2){
    fill("cyan");
    textSize(15);
    text("Ache E Ative A Alavanca Pressionando A Barra De Espaço.", 1, 387);
    //wall1.y = 650;//wall1.x = 650;//wall2.y = 650;//wall2.x = 650;
    //wall3.y = 650;//wall3.x = 650;//wall4.y = 650;//wall4.x = 650;
    //wall5.y = 650;//wall5.x = 650;//wall6.y = 650;//wall6.x = 650;//wall7.y = 650;
    //wall8.y = 650;//wall8.x = 650;
    //wall10.y = 650;//wall10.x = 650;//wall11.y = 650;
    //wall11.x = 650;//wall12.y = 650;//wall12.x = 650;
    //wall13.y = 650;//wall13.x = 650;//wall14.y = 650;//wall14.x = 650;
    //wall15.y = 650;//wall15.x = 650;//wall7.x = 650;
    wall9.x = 650;wall9.y = 650;
  } 
  textSize(20);
  fill("red");
  text("Mortes: "+ mortes, 295, 35);
  fill("gold");
  text("Pontos: "+ pontos, 10, 35);
  if(pontos == 45 && level == 2){
    text("gold");
    textSize(15);
    text("Todas As Moedas Foram Coletadas No Level 2.", 20, 17);
  }
  if(player.isTouching(wall3)&&level==1||player.isTouching(wall14)&&level<2||
  player.isTouching(wall13)&&level<2){
    player.x = 200;
    player.y = 200;
  }
  if(player2.isTouching(wall3)&&level==1||player2.isTouching(wall14)&&level<2||
  player2.isTouching(wall13)&&level<2){
    player2.x = 200;
    player2.y = 200;
  }
  if(player.isTouching(wall3)&&level==2||player.isTouching(wall14)&&level==2||
  player.isTouching(wall13)&&level==2){
    player.x = 200;
    player.y = 300;
    mortes = mortes+1;
    //Sound
  }
  if(player2.isTouching(wall3)&&level==2||player2.isTouching(wall14)&&level==2||
  player2.isTouching(wall13)&&level==2){
    player2.x = 200;
    player2.y = 300;
    mortes = mortes+1;
    //Sound
  }
  if(player.isTouching(edges[0])&&level<2){//Left
    player.x = 380;
  }
  if(player2.isTouching(edges[0])&&level<2){//Left
    player2.x = 380;
  }
  if(player.isTouching(edges[1])&&level<2){//Right
    player.x = 20;
  }
  if(player2.isTouching(edges[1])&&level<2){//Right
    player2.x = 20;
  }
  if(enemy5.x > 420&&level<3||enemy5.x <130&&level<3){
    enemy5.x = 300;
  }
  if(enemy4.y <80&&level<3||enemy4.y > 420&&level<3){
    enemy4.y = 200;
  }
  if(enemy3.x > 360&&level<2||enemy3.x <145&&level<2){
    enemy3.x = 300;
  }
  if(enemy1.y < 15&&level<3||enemy1.y >185&&level<3){
    enemy1.y = 100;
  }
  if(enemy2.x < 30&&level<2||enemy2.x > 250&&level<2){
    enemy2.x = 110;
  }
  if(enemy2.x < 24&&level == 2||enemy2.x > 361&&level == 2){
    enemy2.x = 200;
  }
  if(enemy3.x >361&&level == 2||enemy3.x < 24&&level == 2){
    enemy3.x = 200;
  }
  if(level > 0){
  fill("lightblue");
  text("Level: "+ level, 165, 370);
  }
  fill("gold");
  rect(174, 180, 52, 50);
  ellipse(200, 300, 15, 15);
  if(mortes > 99){
    fill("red");
    text("Fim De Jogo", 155, 17);
    enemy1.velocityY = 0;
    enemy2.velocityX = 0;
    enemy3.velocityX = 0;
    enemy4.velocityY = 0;
    enemy5.velocityX = 0;
  }
  if(pontos == 15&&level == 1){
    text("gold");
    textSize(15);
    text("Todas As Moedas Foram Coletadas No Level 1.",20, 17);
  }
  if(players == 0){
    fill("cyan");
    textSize(25);
    text("Movimentação: Setas Ou WASD.", 20, 150);
    //text("Clique Para Começar!", 120, 170);
    text("Pressione 1 Para 1 Jogador.", 50, 170);
    text("Pressione 2 Para 2 Jogadores.", 50, 190);
    text("M Para Mutar/Desmutar Sons.", 50, 230);
    fill("gold");
    textSize(20);
    text("Ache      Orbe.", 136, 307);
    text("Ache M    edas.", 120, 70);
  }
  if(level < 0){
    next.y = 500;
    next.x = 500;
    enemy1.velocityY = 0;
    enemy2.velocityX = 0;
    enemy3.velocityX = 0;
    enemy4.velocityY = 0;
    enemy5.velocityX = 0;
    fill("gold");
    text("Parabéns!", 155, 17);
    if(pontos == 60&& level == -1){
      fill("gold");
      text("Coletou Todas As Moedas!", 156, 383);
    }
    if(mortes == 0){
      fill("gold");
      text("Sem Mortes!", 30, 383);
    }
  }
  if(player.isTouching(next)&&player2.isTouching(next)&&players == 2){
    level = 2;
    pontos = pontos +15;
    coin3.x = 200;
    coin3.y = 160;
    coin4.x = 300;
    coin4.y = 300;
    coin3.setAnimation("coin_red");
    coin4.setAnimation("coin");
    coin3.scale = 0.4;
    coin4.scale = 0.4;
    next.y = 500;
    next.x = 500;
    lever.y = 200;
    lever.x = 200;
    player.y = 320;
    player2.y = 350;
    coin.y = 500;
    coin.x = 500;
    coin2.y = 500;
    coin2.x = 500;
  }
  if(player.isTouching(next)&&players == 1){
    level = 2;
    pontos = pontos +15;
    coin3.x = 200;
    coin3.y = 160;
    coin4.x = 300;
    coin4.y = 300;
    //coin3.setAnimation("coin_red");
    //coin4.setAnimation("coin");
    coin3.visible = true;
    coin4.visible = true;
    coin3.scale = 0.4;
    coin4.scale = 0.4;
    next.y = 500;
    next.x = 500;
    lever.y = 200;
    lever.x = 200;
    player.y = 320;
    player2.y = 350;
    coin.y = 500;
    coin.x = 500;
    coin2.y = 500;
    coin2.x = 500;
  }
  if(player.isTouching(next)&&players==2||player2.isTouching(next)&&players==2){
    textSize(20);
    fill('cyan');
    text("Espere Pelo Outro Jogador.", 10, 55);
  }
  if(enemy1.bounceOff(wall3)&&sound==true||
  enemy1.bounceOff(wall4)&&sound==true||
  enemy2.bounceOff(wall1)&&sound==true||
  enemy2.bounceOff(wall9)&&sound==true||
  enemy3.bounceOff(wall10)&&sound==true||
  enemy3.bounceOff(wall9)&&sound==true||
  enemy4.bounceOff(wall7)&&sound==true||
  enemy4.bounceOff(edges[3])&&sound==true||
  enemy5.bounceOff(wall11)&&sound==true||
  enemy5.bounceOff(edges[1])&&sound==true||
  enemy2.bounceOff(wall10)&&sound==true||
  enemy3.bounceOff(wall1)&&sound==true){
    //Sound
  }
  if(player.isTouching(coin)){
    pontos = pontos +5;
    //coin.setAnimation("hitbox");
    coin.visible = false;
    coin.x = 500;
    coin.y = 500;
    //Sound
  }
  if(player2.isTouching(coin)){
    pontos = pontos +5;
    //coin.setAnimation("hitbox");
    coin.visible = false;
    coin.x = 500;
    coin.y = 500;
    //Sound
  }
  if(player.isTouching(coin2)){
    pontos = pontos +10;
    //coin2.setAnimation("hitbox");
    coin2.visible = false;
    coin2.x = 500;
    coin2.y = 500;
    //Sound
  }
  if(player2.isTouching(coin2)){
    pontos = pontos +10;
    //coin2.setAnimation("hitbox");
    coin2.visible = false;
    coin2.x = 500;
    coin2.y = 500;
    //Sound
  }
  if(player.isTouching(coin3)){
    pontos = pontos +10;
    //coin3.setAnimation("hitbox");
    coin3.visible = false;
    coin3.x = 500;
    coin3.y = 500;
    //Sound
  }
  if(player2.isTouching(coin3)){
    pontos = pontos +10;
    //coin3.setAnimation("hitbox");
    coin3.visible = false;
    coin3.x = 500;
    coin3.y = 500;
    //Sound
  }
  if(player.isTouching(coin4)){
    pontos = pontos +5;
    //coin4.setAnimation("hitbox");
    coin4.visible = false;
    coin4.x = 500;
    coin4.y = 500;
    //Sound
  }
  if(player2.isTouching(coin4)){
    pontos = pontos +5;
    //coin4.setAnimation("hitbox");
    coin4.visible = false;
    coin4.x = 500;
    coin4.y = 500;
    //Sound
  }
  if(player.isTouching(edges[1])&& level ==2||player.isTouching(edges[0])&& level ==2){
    player.x = 200;
    player.y = 330;
    //Sound
    mortes = mortes +1;
  }
  if(player2.isTouching(edges[1])&& level ==2||player2.isTouching(edges[0])&& level ==2){
    player2.x = 200;
    player2.y = 330;
    //Sound
    mortes = mortes +1;
  }
  if(player.isTouching(edges[3])||
  player.isTouching(edges[2])||
  ///player.isTouching(edges[0])||
  ///player.isTouching(edges[1])||
  player.isTouching(enemy1)||
  player.isTouching(wall1)||
  player.isTouching(wall2)||
  ///player.isTouching(wall3)||
  player.isTouching(wall4)||
  player.isTouching(wall5)||
  player.isTouching(wall6)||
  player.isTouching(wall7)||
  player.isTouching(wall8)||
  player.isTouching(wall9)||
  player.isTouching(enemy2)||
  player.isTouching(enemy3)||
  player.isTouching(wall11)||
  player.isTouching(enemy4)||
  player.isTouching(enemy5)||
  player.isTouching(wall12)||
  player.isTouching(wall15)){
    if(level <2){
      player.x = 190;
      player.y = 200;
    }else{
      player.y = 330;
      player.x = 200;
    }
    //Sound
    mortes = mortes +1;
  }
    if(player2.isTouching(edges[3])||
  player2.isTouching(edges[2])||
  ///player2.isTouching(edges[0])||
  ///player2.isTouching(edges[1])||
  player2.isTouching(enemy1)||
  player2.isTouching(wall1)||
  player2.isTouching(wall2)||
  ///player2.isTouching(wall3)||
  player2.isTouching(wall4)||
  player2.isTouching(wall5)||
  player2.isTouching(wall6)||
  player2.isTouching(wall7)||
  player2.isTouching(wall8)||
  player2.isTouching(wall9)||
  player2.isTouching(enemy2)||
  player2.isTouching(enemy3)||
  player2.isTouching(wall11)||
  player2.isTouching(enemy4)||
  player2.isTouching(enemy5)||
  player2.isTouching(wall12)||
  player2.isTouching(wall15)){
    if(level <2){
      player2.x = 210;
      player2.y = 200;
    }else{
      player2.y = 330;
      player2.x = 200;
    }
    //Sound
    mortes = mortes +1;
  }
  if(keyDown("up")&& mortes <= 99&& level >0&&players==1
  ||keyDown("w")&& mortes <= 99&& level >0&&players==1){
    player.y = player.y -3;
  }
  if(keyDown("down")&& mortes <= 99&& level >0&&players==1
  ||keyDown("s")&& mortes <= 99&& level >0&&players==1){
    player.y = player.y +3;
  }
  if(keyDown("right")&& mortes <= 99&& level >0&&players==1
  ||keyDown("d")&& mortes <= 99&& level >0&&players==1){
    player.x = player.x +3;
  }
  if(keyDown("left")&& mortes <= 99&& level >0&&players==1
  ||keyDown("a")&& mortes <= 99&& level >0&&players==1){
    player.x = player.x -3;
  }
  if(keyDown("up")&& mortes <= 99&& level >0&&players==2){
    player.y = player.y -3;
  }
  if(keyDown("down")&& mortes <= 99&& level >0&&players==2){
    player.y = player.y +3;
  }
  if(keyDown("right")&& mortes <= 99&& level >0&&players==2){
    player.x = player.x +3;
  }
  if(keyDown("left")&& mortes <= 99&& level >0&&players==2){
    player.x = player.x -3;
  }
  if(keyDown("w")&& mortes <= 99&& level >0&&players==2){
    player2.y = player2.y -3;
  }
  if(keyDown("s")&& mortes <= 99&& level >0&&players==2){
    player2.y = player2.y +3;
  }
  if(keyDown("d")&& mortes <= 99&& level >0&&players==2){
    player2.x = player2.x +3;
  }
  if(keyDown("a")&& mortes <= 99&& level >0&&players==2){
    player2.x = player2.x -3;
  }
  if(keyDown('1')&&players==0){
    players =1;
  }
  if(keyDown('2')&&players==0){
    players = 2;
    player2.x = 210;
    player2.visible = true;
  }
  if(keyWentDown("m")&&sound==true){
    sound = false;
  }
  else if(keyWentDown("m")&&sound==false){
    sound = true;
  }
  
  drawSprites();
}

/*function mousePressed(){
  if(level == 0){
    level = 1;
  }
}*/
