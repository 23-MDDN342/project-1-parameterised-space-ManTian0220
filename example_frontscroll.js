function draw_one_frame(cur_frac) {
  angleMode(DEGREES);
  let = ghostX = width / 2;
  let = ghostY = height / 2;
  let rollleft = map(cur_frac,0,0.5,-20,60);
  let rollright = map(cur_frac,0.5,1,60,-20);

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
    arc(width/2, cur_grid_line/0.88, width/1.8, width/4.5, 0, 180, CHORD); //mouth
    
  //   // web
  // stroke(200);
  // line(width * .5, 0, width * .5, height * .5);

  // // spider is black
  // fill(0);
  // stroke(0);

  // // first left leg
  // line(width * .5, height * .5, width * .25, height * .25);
  // line(width * .25, height * .25, width * .05, height * .5);

  // // first right leg
  // line(width * .5, height * .5, width * .75, height * .25);
  // line(width * .75, height * .25, width * .95, height * .5);

  // // second left leg
  // line(width * .5, height * .5, width * .25, height * .4);
  // line(width * .25, height * .4, width * .05, height * .7);

  // // second right leg
  // line(width * .5, height * .5, width * .75, height * .4);
  // line(width * .75, height * .4, width * .95, height * .7);

  // // third left leg
  // line(width * .5, height * .5, width * .25, height * .6);
  // line(width * .25, height * .6, width * .05, height * .9);

  // // third right leg
  // line(width * .5, height * .5, width * .75, height * .6);
  // line(width * .75, height * .6, width * .95, height * .9);

  // // fourth left leg
  // line(width * .5, height * .5, width * .25, height * .75);
  // line(width * .25, height * .75, width * .4, height * .9);

  // // fourth right leg
  // line(width * .5, height * .5, width * .75, height * .75);
  // line(width * .75, height * .75, width * .6, height * .9);

  // // body
  // ellipse(width * .5, height * .5, width * .15, height * .15);

    translate(width/3,height/3.6);
    fill(0, 100, 255);
    if(cur_frac <=0.5){
      rotate(rollleft);
      //ellipse(width/80,height/5.8,width/35,width/35) //right
      ellipse(width/30,height/5.8,width/35,width/35) //left
    } else{
      rotate(rollright);
      //ellipse(width/80,height/5.8,width/35,width/35) //right
      ellipse(width/30,height/5.8,width/35,width/35) //left
    }

    
   }
}