function draw_one_frame(cur_frac) {
  let sun_size = canvasHeight/2;
fill(100, 100, 214);
ellipse(width/2,height/1,sun_size/0.5,sun_size/0.5);
fill(255, 255, 0);
circle(width/1.8,height/1.8,sun_size/12);
fill(100, 100, 214);
circle(width/1.8,height/1.8,sun_size/30);
fill(255, 255, 0);
circle(width/1.95,height/1.8,sun_size/12);
fill(100, 100, 214);
circle(width/1.95,height/1.8,sun_size/30);
fill(255, 255, 0);
ellipse(width/1.87,height/1.7,sun_size/12,sun_size/18);

  strokeWeight(10);
  let grid_points = [
    0.50 * height,
    0.53 * height,
    0.60 * height,
    0.75 * height,
    1.00 * height
  ]

   if (debugView) {
     strokeWeight(1);
     stroke(255, 0, 0);
     for(let i=0; i<grid_points.length; i++) {
       line(0, grid_points[i], width, grid_points[i]);
     }
   }

  // strokeWeight(2);
  // stroke(0);
  // for(let i=0; i<grid_points.length-1; i++) {
  //   let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
  //   line(0, cur_grid_line, width, cur_grid_line);
  // }
}