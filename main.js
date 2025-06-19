window.onload = function() {
  let w=window.innerWidth;
  let h=window.innerHeight;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // <上>が<左>を引っ張る

  // up <<< left
  // up <<left
  // upleft
  
  //雑草、植物は100gtickごとに倍に増える。
  //雑草、植物は水無しで50gtick立つと消える。
  //水は植物、雑草の近くにいると吸収される。
  //食料は細胞の近くにいると吸収される。
  //細胞は食料無しで100gtick立つと食料と水に分解される。
  //
  //+++ 植物1 植物2 みず1 食料1 細胞1 細胞2 細胞3 細胞4
  //植物1 0    0    1     0    0    0     0     0
  //雑草1 0    0    1     0    0    0     0     0
  //みず1 0    0    0.1   0    0    0     0     0
  //食料1 0    0    0     0    0.1  0.1   0.1   0.2
  //細胞1 0    0    0     0    0.3  1     0.5   -0.4
  //細胞2 0    0    0     0    -1   0.1   -0.3  0.2
  //細胞3 0    0    0     0    0    -0.6  0.1   -0.7
  //細胞4 0    0    0     0    0.8  -1    0.7   0.5
  gravity=[
    [0,0,1  ,0,0,  0,  0,  0  ],
    [0,0,1  ,0,0,  0,  0,  0  ],
    [0,0,0.1,0,0,  0,  0,  0  ],
    [0,0,0  ,0,0.1,0.1,0.1,0.2],
    
    [0,0,0  ,0,   0.3,1  ,0.5,-0.4],
    [0,0,0  ,0,   -1,0.1,-0.3,0.2],
    [0,0,0  ,0,   0,-0.6,0.1,-0.7],
    [0,0,0  ,0,   0.8,-1,0.7,0.5],
  ]
  cells=[]
  for(i=0;i<8;i++) {
    for(units=0;units<20;units++) {
      cells[cells.length]=[i,Math.random()*100,Math.random()*150]
    }
  }
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
    size=i-1
    ctx.fillStyle="rgb(0,0,0)"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    for(i=0;i<cells.length;i++){
      c_type=cells[i][0]
      c_x   =cells[i][1]
      c_y   =cells[i][2]
      arc(c_x, c_y, , size/100, 6.3, false);
    }
  }
}
