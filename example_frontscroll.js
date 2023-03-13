function draw_one_frame(cur_frac) {
  let moveXMap, moveYMap;
  let moveXMap1, moveYMap1;

  strokeWeight(10);
  let grid_points = [
    0.50 * height,
    0.51 * height
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
    // ellipse(width/2,cur_grid_line,width/2.6,width/3)
    ellipse(width/3,cur_grid_line/1.2,width/10,width/10)
    ellipse(width/1.5,cur_grid_line/1.2,width/10,width/10)
   
    if(cur_frac){
      fill(0, 100, 255);
      moveXMap = map(cur_frac,0,1,width/1.5,width/1.54)
      moveXMap1 = map(cur_frac,0,1,width/3,width/3.1)
      ellipse(moveXMap1,cur_grid_line/1.2,width/35,width/35)
      ellipse(moveXMap,cur_grid_line/1.2,width/35,width/35)
    }

   }
}