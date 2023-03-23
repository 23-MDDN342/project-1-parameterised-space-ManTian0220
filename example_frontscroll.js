function draw_one_frame(cur_frac) {
  angleMode(DEGREES);
  let backgroundColor = color("#10396b");  //background color dark blue
  let rollleft = map(cur_frac,0,0.5,-20,60); //eye look left
  let rollright = map(cur_frac,0.5,1,60,-20); //eye look right
  let swingleft = map(cur_frac,0,0.5,20,100); //spider swing to the left
  let swingright = map(cur_frac,0.5,1,100,20); //spider swing to the right
  let mouth_sizeS = map(cur_frac,0,0.5,width/2, width/3); //mouth size small
  let mouth_sizeB = map(cur_frac,0,0.5,width/4, width/3); //mouth size big

  fill(backgroundColor ); //background color
  rect(0,0,width,height);
  strokeWeight(10);

  push() // blue
  translate(width/20,height/20);;
  scale(1.7);
  noStroke();
  fill(31, 92, 166);
  quad(width/40, height/2, width/60, height/60, width/2, height/10, width*0.5, height/1.9);
  quad(width/90, height/4, width/20, height/80, width/2, height/20, width*0.1, height/1.8);
  pop()

  push() // light blue
  translate(width/10,height/10);;
  scale(1.5);
  noStroke();
  fill(125, 188, 255);
  quad(width/40, height/2, width/60, height/60, width/2, height/10, width*0.5, height/1.9);
  quad(width/90, height/4, width/20, height/80, width/2, height/20, width*0.1, height/1.8);
  pop()

  push() // dots
  noStroke();
  fill(152, 52, 2);
  ellipse(width/12,height/8,width/25)
  ellipse(width*0.9,height/2,width/25)
  fill(62, 171, 214);
  ellipse(width/7,height/2,width/25)
  ellipse(width*0.8,height/10,width/25)
  fill(146, 199, 66);
  ellipse(width/14,height/1.2,width/25)
  ellipse(width*0.95,height/1.2,width/25)
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
  stroke(237, 155, 88);
  fill(255, 192, 66);
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
      fill(255);
      translate(width/3,height/3.6);
      rotate(rollleft);
      ellipse(width/30,height/5.8,width/35,width/35) // left eyeball swing to the left
      pop()

      push()
      noStroke();
      fill(255);
      translate(width/1.5,height/3.6);
      rotate(rollleft);
      ellipse(width/30,height/5.8,width/35,width/35) //right eyeball swing to the left
      pop()

      push()
      noStroke();
      fill(173, 57, 19);
      arc(width/2, cur_grid_line/0.88, mouth_sizeB, mouth_sizeB, 0, 180, CHORD); // mouthsize big
      pop()

      push()
      translate(width/2,0);
      scale(0.5);
      rotate(swingleft);
      strokeWeight(2);
      stroke(71, 140, 214);
      fill(168, 232, 255);

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
      fill(255);
      translate(width/3,height/3.6);
      rotate(rollright);
      ellipse(width/30,height/5.8,width/35,width/35) //left eyeball swing to the right
      pop()

      push()
      noStroke();
      fill(255);
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
    stroke(71, 140, 214);
    fill(168, 232, 255);

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