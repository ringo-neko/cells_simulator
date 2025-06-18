window.onload = function() {
  let w=window.innerWidth;
  let h=window.innerHeight;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  //+++ 植物1 植物2 水 細胞1 細胞2 細胞3 細胞4
  //植物1 0    0    0  0    0     0     0
  //植物2 0    0    0  0    0     0     0
  //みず1 0    0
  //細胞1 0    0
  //細胞2 0    0
  //細胞3 0    0
  //細胞4 0    0
  grabity=[
    [],
  ]
  
  while(true) {
    let w=window.innerWidth;
    let h=window.innerHeight;
    for(i=0;i<10000;i++) {
      if(i>w || i*1.5>h) {
        canvas.width=i-1;
        canvas.height=i*1.5-1.5;
        break;
      }   
    }
    ctx.fillStyle="rgb(0,0,0)"
    ctx.fillRect(0,0,canvas.width,canvas.height)
  }
}
