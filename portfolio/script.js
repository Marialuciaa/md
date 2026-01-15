const b = document.querySelector(".button");
const portfolio = document.querySelector("#page");
const intro = document.querySelector("#intro-container");

b.addEventListener("click", () => {
  b.style.transformOrigin = "0% 0%";

  const anim = b.animate(
    [
      { transform: "translateY(0px) rotate(0deg)" },
      { transform: "translateY(10px) rotate(5deg)" },
      { transform: "translateY(40px) rotate(20deg)" },
      { transform: "translateY(140px) rotate(50deg)" },
      { transform: "translateY(100vh) rotate(95deg)" }
    ],
    {
      duration: 900,
      easing: "cubic-bezier(.25,.9,.4,1)",
      fill: "forwards"
    }
  );

  const t = document.createElement("div");
  t.style.position = "absolute"; 
  intro.appendChild(t);

  const msg = "One momement, please...";

  anim.addEventListener("finish", () => {
    let i = 0;
    const type = setInterval(() => {
      t.textContent += msg[i++];
      if (i === msg.length) {
        clearInterval(type);

        setTimeout(() => {
          const erase = setInterval(() => {
            t.textContent = t.textContent.slice(0, -1);

            if (t.textContent.length === 0) {
              clearInterval(erase);
              
          
    
              intro.style.display = "none";
              portfolio.style.display = "block";
              
            
            }
          }, 50);
        }, 2000);
      }
    }, 80);
  }, { once: true });
});