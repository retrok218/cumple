const container = document.querySelector('.container')
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 3000);
    const rain = () => {
    let j= 0
    while (j<=80){
      let gout = document.createElement('i')
      let x =innerWidth * Math.random()
      let time = 1 * Math.random()
      
      gout.style.animationDuration = time + 's'
      gout.style.animationDelay = time + 's'
      gout.style.left = x + 'px'
      
      container.appendChild(gout)
      
      j++
      
    }
    } 
  };
