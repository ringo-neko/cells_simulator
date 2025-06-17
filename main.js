window.onload = function() {
  let w=window.innerWidth;
  let h=window.innerHeight;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.addEventListener('mousedown', (e) => {(touched=e)});
  for(i=0;i<10000;i++) {
    if(i>w || i*1.5>h) {
      canvas.width=i-1;
      canvas.height=i*1.5-1.5;
      break;
    }   
  }
}
