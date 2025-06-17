window.onload = function() {
  let w=window.innerWidth;
  let h=window.innerHeight;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.addEventListener('mousedown', (e) => {(touched=e)});

  while(true) {
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
