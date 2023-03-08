function draw_one_frame(cur_frac) {
  let sun_size = canvasHeight/2;
  let moveXMap, moveYMap;
  let moveXMap1, moveYMap1;
// fill(100, 100, 214);
// ellipse(width/2,height/1,sun_size/0.5,sun_size/0.5);
// fill(255, 255, 0);
// circle(width/1.8,height/1.8,sun_size/12);
// fill(100, 100, 214);
// circle(width/1.8,height/1.8,sun_size/30);
// fill(255, 255, 0);
// circle(width/1.95,height/1.8,sun_size/12);
// fill(100, 100, 214);
// circle(width/1.95,height/1.8,sun_size/30);
// fill(255, 255, 0);
// ellipse(width/1.87,height/1.7,sun_size/12,sun_size/18);

  strokeWeight(10);
  let grid_points = [
    0.00 * height,
    0.50 * height,
    0.90 * height,
    1.20* height,
    1.40 * height,
    1.50 * height
  ]

    if (debugView) {
      strokeWeight(1);
      stroke(255, 0, 0);
      for(let i=0; i<grid_points.length; i++) {
        line(0, grid_points[i], width, grid_points[i]);
      }
   }

   strokeWeight(2);
   stroke(0);
  
  for(let i=0; i<grid_points.length-1; i++) {
     let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
     fill(100, 100, 214);
    ellipse(width/2,cur_grid_line,width/1.6,width/2)
    fill(20, 10, 0);
    ellipse(width/2,cur_grid_line,width/2.6,width/3)
    ellipse(width/3,cur_grid_line-150,width/15,width/15)
    ellipse(width/1.5,cur_grid_line-150,width/15,width/15)
   
    if(cur_frac){
      fill(0, 100, 255);
      moveXMap = map(cur_frac,0,1,width/1.5,width/1.54)
      moveXMap1 = map(cur_frac,0,1,width/3,width/3.1)
      ellipse(moveXMap1,cur_grid_line-150,width/35,width/35)
      ellipse(moveXMap,cur_grid_line-150,width/35,width/35)
    }

   }
}