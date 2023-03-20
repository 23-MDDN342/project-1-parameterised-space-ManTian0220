function draw_one_frame(cur_frac) {
  angleMode(DEGREES);
  let backgroundColor = color("#d45a13");  //backgroundcolor
  let rollleft = map(cur_frac,0,0.5,-20,60); //eye look left
  let rollright = map(cur_frac,0.5,1,60,-20); //eye look right
  let swingleft = map(cur_frac,0,0.5,20,100); //spider swing to the left
  let swingright = map(cur_frac,0.5,1,100,20); //spider swing to the right
  let mouth_sizeS = map(cur_frac,0,0.5,width/2, width/3); //mouth size small
  let mouth_sizeB = map(cur_frac,0,0.5,width/4, width/3); //mouth size big

  fill(backgroundColor ); //background
  rect(0,0,width,height);
  strokeWeight(10);

  push()
  translate(width/12,height/6);;
  scale(0.5);
  beginShape();
  noStroke();
  fill(152, 52, 235);
    vertex(0,height/2);
    vertex(width*8/24,height/2);
    vertex(width*9/24,height*11/32);//peak1
    vertex(width*10/24,height*13/32);
    vertex(width*11/60,height*3/32);//peak2
    vertex(width*12/24,height*8/32);
    vertex(width*13/24,height*0/32);//peak3
    vertex(width*14/24,height*10/32);
    vertex(width*15/18,height*8/32);//peak4
    vertex(width*16/24,height/2);
    vertex(width*16/90,height*8/32);//peak5
    vertex(width*16/24,height/2);
  endShape();
  pop()

  push()
  translate(width/2.4,height/6);;
  scale(0.5);
  beginShape();
  noStroke();
  fill(152, 52, 235);
    vertex(0,height/2);
    vertex(width*8/24,height/2);
    vertex(width*9/24,height*11/32);//peak1
    vertex(width*10/24,height*13/32);
    vertex(width*11/60,height*3/32);//peak2
    vertex(width*12/24,height*8/32);
    vertex(width*13/24,height*0/32);//peak3
    vertex(width*14/24,height*10/32);
    vertex(width*15/18,height*8/32);//peak4
    vertex(width*16/24,height/2);
    vertex(width*16/90,height*8/32);//peak5
    vertex(width*16/24,height/2);
  endShape();
  pop()

  let main_points = [
    0.50 * height,
    0.51 * height
  ]

    if (debugView) {
      strokeWeight(1);
      stroke(255, 0, 0);
      for(let i=0; i<main_points.length; i++) {
        line(0, main_points[i], width, main_points[i]);
      }
   }

  for(let i=0; i<main_points.length-1; i++) {

    let cur_grid_line = map(cur_frac, 0, 1, main_points[i], main_points[i+1])
    
    push()
    strokeWeight(8);
    stroke(125, 56, 12);
    fill(240, 133, 34);
    ellipse(width/2,cur_grid_line,width/1.6,width/2) //head
    pop()

    push()
    strokeWeight(4);
    stroke(153, 82, 38);
    fill(69, 18, 3);
    ellipse(width/3,cur_grid_line/1.2,width/6,width/10) //left eye
    ellipse(width/1.5,cur_grid_line/1.2,width/6,width/10) //right eye
    pop()
    
    if(cur_frac <=0.5){

      push()
      noStroke();
      fill(224, 218, 18);
      translate(width/3,height/3.6);
      rotate(rollleft);
      ellipse(width/30,height/5.8,width/35,width/35) //left eyeball swing to the left
      pop()

      push()
      noStroke();
      fill(224, 218, 18);
      translate(width/1.5,height/3.6);
      rotate(rollleft);
      ellipse(width/30,height/5.8,width/35,width/35) //right eyeball swing to the left
      pop()

      push()
      noStroke();
      fill(173, 57, 19);
      arc(width/2, cur_grid_line/0.88, mouth_sizeB, mouth_sizeB, 0, 180, CHORD); //mouthsize big
      pop()

      push()
      translate(width/2,0);
      scale(0.5);
      rotate(swingleft);
      strokeWeight(2);
      stroke(22, 65, 130);
      fill(0);

      line(cur_frac, 0, width * 0.5, height * 0.5); // web
    
      //spider legs
      line(width/2, height/2, width/1.9, height/2.1);
      line(width/1.8, height/2, width/1.9, height/2.1);
  
      line(width/1.8, height/1.95, width/1.9, height/2.04);
      line(width/2, height/1.95, width/1.9, height/2.04);
    
      line(width/1.8, height/1.9, width/1.9, height/2);
      line(width/2, height/1.9, width/1.9, height/2);

      line(width/2.2, height/2, width/2.1, height/2.1);
      line(width/1.988, height/2, width/2.1, height/2.1);

      line(width/2, height/1.95, width/2.1, height/2.03);
      line(width/2.2, height/1.95, width/2.1, height/2.03);

      line(width/2, height/1.9, width/2.1, height/1.98);
      line(width/2.2, height/1.9, width/2.1, height/1.98);
  
      ellipse(width/2, height/2, width/26, height/26); //spider body
      ellipse(width/2, height/1.9, width/50, height/50); //spider head
      pop()

    } else{
      push()
      noStroke();
      fill(224, 218, 18);
      translate(width/3,height/3.6);
      rotate(rollright);
      ellipse(width/30,height/5.8,width/35,width/35) //left eyeball swing to the right
      pop()

      push()
      noStroke();
      fill(224, 218, 18);
      translate(width/1.5,height/3.6);
      rotate(rollright);
      ellipse(width/30,height/5.8,width/35,width/35) //right eyeball swing to  the right
      pop()
      push()
      noStroke();
      fill(173, 57, 19);
      arc(width/2, cur_grid_line/0.88, mouth_sizeS, mouth_sizeS, 0, 180, CHORD); //mouth size small
      pop()

    push()
    translate(width/2,0);
    scale(0.5);
    rotate(swingright);
    strokeWeight(2);
    stroke(22, 65, 130);
    fill(0);

    line(cur_frac, 0, width * 0.5, height * 0.5); // web
  
    // spider legs
    line(width/2, height/2, width/1.9, height/2.1);
    line(width/1.8, height/2, width/1.9, height/2.1);

    line(width/1.8, height/ 1.95, width/1.9, height/2.04);
    line(width/2, height/1.95, width/1.9, height/2.04);
  
    line(width/1.8, height/1.9, width/1.9, height/2);
    line(width/2, height/1.9, width/1.9, height/2);

    line(width/2.2, height/2, width/2.1, height/2.1);
    line(width/1.988, height/2, width/2.1, height/2.1);

    line(width/2, height/1.95, width/2.1, height/2.03);
    line(width/2.2, height/1.95, width/2.1, height/2.03);

    line(width/2, height/1.9, width/2.1, height/1.98);
    line(width/2.2, height/1.9, width/2.1, height/1.98);

    ellipse(width/2, height/2, width/26, height/26); // spider body
    ellipse(width/2, height/1.9, width/50, height/50); // spider head
    pop()
   }
  }

  
}