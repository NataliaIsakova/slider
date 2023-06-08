const next = document.querySelector(".next");
const back = document.querySelector(".back");

const picks = ["Bach.jpg", "Garye.jpg", "LaDig.jpg", "Lezgira.jpg", "Maui.jpg", "Oluvely.jpg", "Palavan.jpg", "Pkhi.jpg"];
 
let i = 0;

next.addEventListener("click", () =>{
i++;
if (i >picks.length-1) {
    i=0;
}
document.querySelector("#picture").src = picks[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = picks.length - 1;
    }
    document.querySelector("#picture").src = picks[i];
})


gsap.to("h1",{
    text:"Лучшие пляжи мира",
    duration: 2,
    repeat: -1,
    repeatDelay: 0.7,
    ease: "power1.in",
    yoyo: true,
    delay: 2
}
)