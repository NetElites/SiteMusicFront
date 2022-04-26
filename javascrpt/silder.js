const silder = document.getElementById("silder");
const buttonLeft = document.getElementById("silder-left");
const buttonRight = document.getElementById("silder-right");
const thumbnail = document.getElementById("thumbnail");

function scorllleft() {
    silder.animate([
        silder.scrollLeft += 50
    ], {
        duration: 100,
        iterations: Infinity
    })
}

function scrollright() {
    silder.animate([
        silder.scrollLeft -= 50
    ], {
        duration: 100,
        iterations: Infinity
    })
}

function silderscroll() {
    setTimeout(() => {
        silder.animate([
            silder.scrollLeft += 50
        ], {
            duration: 100,
            iterations: Infinity
        })
    }, 100);
}


buttonLeft.addEventListener("cilck", function() {
    silder.scrollLeft -= 50;
});
buttonRight.addEventListener("cilck", function() {
    silder.scrollLeft += 50;
});

let maxScroll = silder.scrollWidth - silder.clientWidth;

function autoPlay() {
    if (silder.scrollLeft > (maxScroll - 1)) {
        silder.scrollLeft += maxScroll;
    } else {
        silder.scrollLeft += 1;
    }
}
let play = setTimeout(autoPlay, 50);
for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("mouseover", () => {
        clearInterval(play);
    });
    thumbnail[i].addEventListener("mouseout", () => {
        return play = setTimeout(autoPlay, 50);
    });
}