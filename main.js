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
  for(type_of_unit=0;type_of_unit<8;type_of_unit++) {
    for(units=0;units<20;units++) {
      cells[cells.length]=[units,Math.random()*100,Math.random()*150]
    }
  }
  console.log(cells)
  //main loop
  while(true) {
    let w=window.innerWidth;
    let h=window.innerHeight;
    for(size=0;size<10000;size++) {
      if(size>w || size*1.5>h) {
        canvas.width=size-1;
        canvas.height=size*1.5-1.5;
        size--
        break;
      }   
    }
    ctx.lineWidth = 5; // 線の幅は5px
    ctx.strokeStyle = '#333'; // 塗りつぶしは暗めの色
    
    
    ctx.fillStyle="rgb(0,0,0)"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    for(i=0;i<cells.length;i++){
      console.log(i)
      c_type=cells[i][0]
      c_x   =cells[i][1]
      c_y   =cells[i][2]
      /* 円の描画 */
      ctx.beginPath();
      ctx.arc(c_x, c_y, size/80, 0, Math.PI*2);
      ctx.closePath();
      ctx.fill();
    }
  }
}
