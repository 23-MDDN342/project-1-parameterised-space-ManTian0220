function draw_one_frame(cur_frac) {
  angleMode(DEGREES);
  let = ghostX = width / 2;
  let = ghostY = height / 2;
  let rollleft = map(cur_frac,0,0.5,-20,60);
  let rollright = map(cur_frac,0.5,1,60,-20);
  let swingleft = map(cur_frac,0,0.5,20,100);
  let swingright = map(cur_frac,0.5,1,100,20);

  strokeWeight(10);
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

   strokeWeight(2);
   stroke(0);
  
  for(let i=0; i<main_points.length-1; i++) {
    let cur_grid_line = map(cur_frac, 0, 1, main_points[i], main_points[i+1])
    fill(100, 100, 214);
    ellipse(width/2,cur_grid_line,width/1.6,width/2) // main
    fill(20, 10, 0);
    ellipse(width/3,cur_grid_line/1.2,width/6,width/10) //left
    ellipse(width/1.5,cur_grid_line/1.2,width/6,width/10) //right
    arc(width/2, cur_grid_line/0.88, width/1.8, width/3, 0, 180, CHORD); //mouth
    
  stroke(200);
    fill(0, 100, 255);
    if(cur_frac <=0.5){
      push()
      translate(width/3,height/3.6);
      rotate(rollleft);
      ellipse(width/30,height/5.8,width/35,width/35) //left
      pop()

      push()
      translate(width/1.5,height/3.6);
      rotate(rollleft);
      ellipse(width/30,height/5.8,width/35,width/35) //right
      pop()

      push()
      translate(0,0);
      //rotate(swingleft);
      stroke(200);
      line(cur_frac, 0, width * 0.5, height * 0.5); // web
    
      fill(0); // black
      stroke(0);
    
      //legs
      line(width/2, height/2, width/1.9, height/2.1);
      line(width/1.8, height/2, width/1.9, height/2.1);
  
      line(width/1.8, height/1.95, width/1.9, height/2.04);
      line(width/2, height/1.95, width/1.9, height/2.04);
    
      line(width/1.8, height/1.9, width/1.9, height/2);
      line(width/2, height/1.9, width/1.9, height/2);

      line(width/2.2, height/2, width/2.1, height/2.1);
      line(width/1.988, height/2, width/2.1, height/2.1);
  
      ellipse(width/2, height/2, width/26, height/26); //body
      ellipse(width/2, height/1.9, width/50, height/50); // head
      pop()

    } else{
      push()
      translate(width/3,height/3.6);
      rotate(rollright);
      ellipse(width/30,height/5.8,width/35,width/35) //left
      pop()

      push()
      translate(width/1.5,height/3.6);
      rotate(rollright);
      ellipse(width/30,height/5.8,width/35,width/35) //right
      pop()

    push()
    translate(0,0);
    ///rotate(swingright);
    stroke(200);
    line(cur_frac, 0, width * 0.5, height * 0.5); // web
    
    fill(0); // black
    stroke(0);
  
    //legs
    line(width/2, height/2, width/1.9, height/2.1);
    line(width/1.8, height/2, width/1.9, height/2.1);

    line(width/1.8, height/1.95, width/1.9, height/2.04);
    line(width/2, height/1.95, width/1.9, height/2.04);
  
    line(width/1.8, height/1.9, width/1.9, height/2);
    line(width/2, height/1.9, width/1.9, height/2);

    line(width/2.2, height/2, width/2.1, height/2.1);
    line(width/1.988, height/2, width/2.1, height/2.1);
    

    ellipse(width/2, height/2, width/26, height/26); //body
    ellipse(width/2, height/1.9, width/50, height/50); // head
    pop()
   }
  }
}